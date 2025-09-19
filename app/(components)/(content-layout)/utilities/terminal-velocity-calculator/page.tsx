"use client";
import React, { Fragment, useMemo, useState } from "react";
import { Card, Col, Form, Row, Table, Alert } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false }) as any;

// Simple terminal velocity and parachute sizing helper for Space Engineers-like gameplay.
// Physics model (approx.):
//   Drag = 0.5 * rho * v^2 * Cd * A
//   At terminal velocity, Drag = Weight = m * g
//   Solve v_t = sqrt((2 * m * g) / (rho * Cd * A_total))
// We expose atmosphere density multiplier (rho_mult) where 1 = Earth-like. Use conservative values (e.g., 0.85) for safety.

const g_ms2 = 9.81; // m/s^2 per 1g

// Parachute parameters from in-game definitions (Lg/Sm Parachute)
const DEFAULTS = {
  massKg: 5_000_000,
  gridSize: "large" as "small" | "large",
  gravityG: 1,
  rhoMultiplier: 0.85, // atmosphere density factor (0..1.2+)
  // In-game constants
  dragCoeff: 1.0, // <DragCoefficient>
  radiusMultiplier: 8.0, // <RadiusMultiplier>
  reefAtmosphere: 0.6, // <ReefAtmosphereLevel>
  minAtmosphere: 0.2, // <MinimumAtmosphereLevel>
  chuteCount: 1
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function formatNumber(n: number, digits = 2) {
  if (!isFinite(n)) return "-";
  return Number(n.toFixed(digits)).toLocaleString();
}

function atanh(x: number) {
  return 0.5 * Math.log((1 + x) / Math.max(1e-12, 1 - x));
}
function acoth(x: number) {
  return 0.5 * Math.log((x + 1) / Math.max(1e-12, x - 1));
}

const TerminalVelocityCalculatorPage: React.FC = () => {
  const [massKg, setMassKg] = useState<number>(DEFAULTS.massKg);
  const [gridSize, setGridSize] = useState<"small" | "large">(DEFAULTS.gridSize);
  const [gravityG, setGravityG] = useState<number>(DEFAULTS.gravityG);
  const [rhoMultiplier, setRhoMultiplier] = useState<number>(DEFAULTS.rhoMultiplier);
  const [chuteCount, setChuteCount] = useState<number>(DEFAULTS.chuteCount);
  const [maxSpeed, setMaxSpeed] = useState<number>(200);
  // No target velocity; we use an internal effective area based on grid scale

  // Effective parameters
  const rho = useMemo(() => clamp(rhoMultiplier, 0, 10) * 1.225, [rhoMultiplier]); // 1.225 kg/m^3 at sea level
  const g = useMemo(() => clamp(gravityG, 0, 10) * g_ms2, [gravityG]);

  // Internal constants from definitions
  const dragCoeff = DEFAULTS.dragCoeff;
  const radiusMultiplier = DEFAULTS.radiusMultiplier;
  const reefLevel = DEFAULTS.reefAtmosphere;
  const minLevel = DEFAULTS.minAtmosphere;

  const blockMeters = gridSize === "small" ? 0.5 : 2.5;

  // Approximate canopy radius growth vs atmosphere (matches user's desmos sketch)
  const canopyRadiusMeters = useMemo(() => {
    const a = Math.max(0, rhoMultiplier);
    if (a <= minLevel) return 0;
    const x = 10 * (a - reefLevel) - 0.99; // shifts growth to start near reef level
    const factor = Math.max(0, Math.log(x) + 5); // avoid NaN below threshold; clamp to 0
    return (factor * radiusMultiplier * blockMeters) / 2; // convert to radius (m)
  }, [rhoMultiplier, radiusMultiplier, blockMeters, reefLevel, minLevel]);

  const effectiveArea = useMemo(() => Math.PI * Math.max(0, canopyRadiusMeters) ** 2, [canopyRadiusMeters]);

  const totalArea = useMemo(
    () => Math.max(0, Math.floor(chuteCount || 0)) * Math.max(0, effectiveArea),
    [chuteCount, effectiveArea]
  );

  const terminalVelocity = useMemo(() => {
    const denom = rho * Math.max(0.05, dragCoeff) * Math.max(1e-6, totalArea);
    return Math.sqrt((2 * Math.max(0, massKg) * g) / Math.max(1e-9, denom));
  }, [massKg, g, rho, dragCoeff, totalArea]);

  // Build graph data: velocity vs time using A = requiredArea (so vt ≈ targetVelocity)
  const graph = useMemo(() => {
    const deployed = rhoMultiplier >= DEFAULTS.minAtmosphere && totalArea > 0;
    const vt = Math.max(0.01, terminalVelocity);
    const v0 = Math.max(0, maxSpeed);
    const k = (rho * dragCoeff * Math.max(1e-9, totalArea)) / (2 * Math.max(1e-9, massKg));
    const t10 = deployed ? 9 / Math.max(1e-12, k * Math.max(v0, 1e-9)) : undefined; // time to 10% v0
    const tMax = deployed ? Math.min(Math.max(10, (t10 ?? 30) * 1.2), 600) : 60;
    const steps = 160;
    const points: [number, number][] = [];
    for (let i = 0; i <= steps; i++) {
      const t = (tMax * i) / steps;
      const v = deployed ? v0 / (1 + Math.max(0, k) * v0 * t) : v0; // zero-terminal always
      points.push([t, v]);
    }
    const options: any = {
      chart: {
        id: "v-time",
        toolbar: {
          show: false,
          tools: { download: false, selection: false, zoom: false, zoomin: false, zoomout: false, pan: false, reset: false }
        },
        selection: { enabled: false },
        zoom: { enabled: false },
        animations: { enabled: true },
        events: {
          click: (e: any) => {
            if (e && typeof e.preventDefault === "function") e.preventDefault();
            return false;
          },
          dataPointSelection: (e: any) => {
            if (e && typeof e.preventDefault === "function") e.preventDefault();
            return false;
          },
          markerClick: (e: any) => {
            if (e && typeof e.preventDefault === "function") e.preventDefault();
            return false;
          }
        }
      },
      stroke: { curve: "smooth", width: 2 },
      xaxis: {
        type: "numeric",
        title: { text: "Time (s)" },
        labels: { formatter: (v: number) => `${formatNumber(v, 0)}` }
      },
      yaxis: { title: { text: "Velocity (m/s)" } },
      tooltip: {
        x: { formatter: (v: number) => `${formatNumber(v, 2)} s` },
        y: { formatter: (v: number) => `${formatNumber(v, 2)} m/s` }
      },
      annotations: deployed
        ? {
            xaxis: t10
              ? [
                  {
                    x: t10,
                    borderColor: "#198754",
                    label: { text: `≈10% v₀ at ${formatNumber(t10, 1)} s`, style: { background: "#198754" } }
                  }
                ]
              : [],
            yaxis: []
          }
        : { xaxis: [], yaxis: [] }
    };
    return { options, series: [{ name: "v(t)", data: points }], deployed, vt, t10 } as const;
  }, [terminalVelocity, rhoMultiplier, totalArea, maxSpeed, rho, dragCoeff, massKg]);

  return (
    <Fragment>
      <Seo title={"Parachute / Terminal Velocity Calculator"} />
      <Row className="g-4">
        <Col lg={6} md={12}>
          <Card className="custom-card h-100">
            <Card.Header>
              <div className="card-title">Inputs</div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="gy-3">
                  <Col xs={12}>
                    <Form.Label>Mass (kg)</Form.Label>
                    <Form.Control type="number" min={0} value={massKg} onChange={(e) => setMassKg(Number(e.target.value))} />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Grid size</Form.Label>
                    <Form.Select value={gridSize} onChange={(e) => setGridSize(e.target.value as "small" | "large")}>
                      <option value="small">Small grid</option>
                      <option value="large">Large grid</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Gravity (g)</Form.Label>
                    <Form.Control type="number" step={0.05} min={0} value={gravityG} onChange={(e) => setGravityG(Number(e.target.value))} />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Atmosphere density multiplier</Form.Label>
                    <div className="text-muted small mb-1">Parachutes require ≥ {DEFAULTS.minAtmosphere}. Reef level ≈ {DEFAULTS.reefAtmosphere}.</div>
                    <Form.Control type="number" step={0.05} min={0} value={rhoMultiplier} onChange={(e) => setRhoMultiplier(Number(e.target.value))} />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Max speed (m/s)</Form.Label>
                    <Form.Control type="number" step={1} min={0} value={maxSpeed} onChange={(e) => setMaxSpeed(Number(e.target.value))} />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Parachute count</Form.Label>
                    <Form.Control
                      type="number"
                      min={0}
                      step={1}
                      value={chuteCount}
                      onChange={(e) => setChuteCount(Math.max(0, Math.floor(Number(e.target.value) || 0)))}
                    />
                  </Col>
                  
                  
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12}>
          <Card className="custom-card h-100">
            <Card.Header>
              <div className="card-title">Results</div>
            </Card.Header>
            <Card.Body>
              <Table responsive className="align-middle mb-3">
                <tbody>
                  <tr>
                    <td>Effective gravity (m/s²)</td>
                    <td className="text-end">{formatNumber(g, 2)}</td>
                  </tr>
                  <tr>
                    <td>Atmospheric density ρ (kg/m³)</td>
                    <td className="text-end">{formatNumber(rho, 3)}</td>
                  </tr>
                  <tr>
                    <td>Deployable under current atmosphere?</td>
                    <td className="text-end">{rhoMultiplier >= DEFAULTS.minAtmosphere ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td>Grid size unit (m)</td>
                    <td className="text-end">{blockMeters}</td>
                  </tr>
                  <tr>
                    <td>Per-chute area A₁ (m²)</td>
                    <td className="text-end">{formatNumber(effectiveArea, 1)}</td>
                  </tr>
                  <tr>
                    <td>Parachute count</td>
                    <td className="text-end">{chuteCount}</td>
                  </tr>
                  <tr>
                    <td>Total drag area A (m²)</td>
                    <td className="text-end">{formatNumber(totalArea, 1)}</td>
                  </tr>
                  <tr>
                    <td>Physical terminal velocity vₜ (m/s)</td>
                    <td className="text-end">{formatNumber(terminalVelocity, 2)}</td>
                  </tr>
                  <tr>
                    <td>Start speed v₀ (m/s)</td>
                    <td className="text-end">{formatNumber(maxSpeed, 2)}</td>
                  </tr>
                  {graph.deployed && graph.t10 && (
                    <tr>
                      <td>Time to 10% v₀ (s)</td>
                      <td className="text-end">{formatNumber(graph.t10 as number, 1)}</td>
                    </tr>
                  )}
                  
                </tbody>
              </Table>

              <div className="mb-2">
                {ApexChart && (
                  <ApexChart type="line" height={320} options={graph.options} series={graph.series} />
                )}
              </div>
              
              <Alert variant="secondary" className="mb-0">
                Using in-game parameters: Cd = {DEFAULTS.dragCoeff}, RadiusMultiplier = {DEFAULTS.radiusMultiplier}, Reef = {DEFAULTS.reefAtmosphere}, Min = {DEFAULTS.minAtmosphere}.
                Canopy radius scales with atmosphere and grid size; A = π·r². Velocity curve assumes 1 deployed parachute.
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TerminalVelocityCalculatorPage;
