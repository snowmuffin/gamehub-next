"use client";
import React, { useMemo, useState } from "react";
import { Card, Col, Form, Row, Table, ProgressBar, Button } from "react-bootstrap";

type GridSize = "small" | "large";

type ThrusterKind = "ion" | "atmo" | "hydro";

type ThrusterSpec = {
  id: string;
  name: string;
  thrustN: number; // base thrust per thruster at 100% efficiency (Newtons)
  kind: ThrusterKind;
  massKg?: number; // per-block mass on this grid
};

// Thruster data from Space Engineers Wiki (values in Newtons at 100% efficiency).
// Small Grid and Large Grid sets include Atmospheric, Flat Atmospheric (Flatmo), Ion, and Hydrogen.
const THRUSTERS_BY_GRID: Record<GridSize, ThrusterSpec[]> = {
  small: [
    // Ion
    { id: "ion_large", name: "Large Ion Thruster", thrustN: 172_800, kind: "ion", massKg: 721 }, // 172.8 kN, 721 kg
    { id: "ion_small", name: "Ion Thruster", thrustN: 14_400, kind: "ion", massKg: 121 }, // 14.4 kN, 121 kg
    // Hydrogen
    {
      id: "hydrogen_large",
      name: "Large Hydrogen Thruster",
      thrustN: 480_000,
      kind: "hydro",
      massKg: 1_222
    }, // 480 kN, 1,222 kg
    {
      id: "hydrogen_small",
      name: "Hydrogen Thruster",
      thrustN: 98_400,
      kind: "hydro",
      massKg: 334
    }, // 98.4 kN, 334 kg
    // Atmospheric
    {
      id: "atmo_large",
      name: "Large Atmospheric Thruster",
      thrustN: 576_000,
      kind: "atmo",
      massKg: 2_948
    }, // 576 kN, 2,948 kg
    { id: "atmo_small", name: "Atmospheric Thruster", thrustN: 96_000, kind: "atmo", massKg: 699 }, // 96 kN, 699 kg
    // Flat Atmospheric (Flatmo)
    {
      id: "flatmo_small",
      name: "Flat Atmospheric Thruster",
      thrustN: 32_000,
      kind: "atmo",
      massKg: 303
    }, // 32 kN, 303 kg
    {
      id: "flatmo_large",
      name: "Large Flat Atmospheric Thruster",
      thrustN: 230_000,
      kind: "atmo",
      massKg: 1_060
    }, // 230 kN, 1,060 kg
    // Prototech (treated as Ion-like for environment curve)
    {
      id: "prototech_small",
      name: "Prototech Thruster",
      thrustN: 561_600,
      kind: "ion",
      massKg: 1521
    } // 561.6 kN
  ],
  large: [
    // Ion
    {
      id: "ion_large",
      name: "Large Ion Thruster",
      thrustN: 4_320_000,
      kind: "ion",
      massKg: 43_200
    }, // 4,320 kN, 43,200 kg
    { id: "ion_small", name: "Ion Thruster", thrustN: 345_600, kind: "ion", massKg: 4_380 }, // 345.6 kN, 4,380 kg
    // Hydrogen
    {
      id: "hydrogen_large",
      name: "Large Hydrogen Thruster",
      thrustN: 7_200_000,
      kind: "hydro",
      massKg: 6_940
    }, // 7,200 kN, 6,940 kg
    {
      id: "hydrogen_small",
      name: "Hydrogen Thruster",
      thrustN: 1_080_000,
      kind: "hydro",
      massKg: 1_420
    }, // 1,080 kN, 1,420 kg
    // Atmospheric
    {
      id: "atmo_large",
      name: "Large Atmospheric Thruster",
      thrustN: 6_480_000,
      kind: "atmo",
      massKg: 32_970
    }, // 6,480 kN, 32,970 kg
    {
      id: "atmo_small",
      name: "Atmospheric Thruster",
      thrustN: 648_000,
      kind: "atmo",
      massKg: 4_000
    }, // 648 kN, 4,000 kg
    // Flat Atmospheric (Flatmo)
    {
      id: "flatmo_small",
      name: "Flat Atmospheric Thruster",
      thrustN: 200_000,
      kind: "atmo",
      massKg: 1_273
    }, // 200 kN, 1,273 kg
    {
      id: "flatmo_large",
      name: "Large Flat Atmospheric Thruster",
      thrustN: 2_600_000,
      kind: "atmo",
      massKg: 12_190
    }, // 2,600 kN, 12,190 kg
    // Prototech (treated as Ion-like for environment curve)
    {
      id: "prototech_large",
      name: "Prototech Thruster",
      thrustN: 14_040_000,
      kind: "ion",
      massKg: 38_850
    } // 14,040 kN
  ]
};

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function formatKN(n: number) {
  return (n / 1000).toFixed(1);
}

const g_ms2 = 9.81; // m/s^2 per 1g

function getEfficiency(kind: ThrusterKind, atmDensity: number) {
  // Allow densities > 1 (e.g., dense atmospheres); keep lower bound at 0
  const d = Math.max(0, atmDensity);
  switch (kind) {
    case "ion":
      // Ion: 100% in vacuum -> 20% at sea-level atmosphere (linear by density)
      return Math.min(1, Math.max(0.2, 1.0 - 0.8 * d));
    case "atmo":
      // Atmo scales with density and can get 20% bonus on alien planet
      return Math.max(0, Math.min(1.2, d * 1.0));
    case "hydro":
    default:
      return 1.0;
  }
}

const SpaceEngineersCalculator: React.FC = () => {
  const [weightKg, setWeightKg] = useState<number>(15000);
  const [grid, setGrid] = useState<GridSize>("small");
  const [gravityG, setGravityG] = useState<number>(1);
  // Environment
  const [atmDensity, setAtmDensity] = useState<number>(1);
  // Global factors
  const [healthPct, setHealthPct] = useState<number>(100); // damage/health
  const [throttlePct, setThrottlePct] = useState<number>(100);
  const [cargoAutoFill, setCargoAutoFill] = useState<boolean>(false);
  // Separate counts: existing thrusters vs. additional thrusters to be added
  // - existing counts affect available thrust but do NOT add mass (they're already part of ship weight)
  // - added counts affect both available thrust and added thruster mass
  const [existingThrusterCounts, setExistingThrusterCounts] = useState<Record<string, number>>({});
  const [addedThrusterCounts, setAddedThrusterCounts] = useState<Record<string, number>>({});

  const requiredThrustN = useMemo(() => {
    const mass = Math.max(0, weightKg);
    const g = Math.max(0, gravityG);
    return mass * g * g_ms2; // Newtons
  }, [weightKg, gravityG]);

  // Initialize/reset counts whenever grid changes
  const thrusters = useMemo(() => THRUSTERS_BY_GRID[grid], [grid]);

  React.useEffect(() => {
    const initCounts: Record<string, number> = {};
    thrusters.forEach((t) => {
      initCounts[t.id] = 0;
    });
    setExistingThrusterCounts(initCounts);
    setAddedThrusterCounts(initCounts);
  }, [thrusters]);

  const thrusterRows = useMemo(() => {
    const health = clampNumber(healthPct, 0, 100) / 100;
    const throttle = clampNumber(throttlePct, 0, 100) / 100;
    return thrusters.map((t) => {
      const envEff = getEfficiency(t.kind, atmDensity);
      const effEachN = t.thrustN * envEff * health * throttle;
      const existCount = Math.max(0, Math.floor(existingThrusterCounts[t.id] ?? 0));
      const addCount = Math.max(0, Math.floor(addedThrusterCounts[t.id] ?? 0));
      const totalCount = existCount + addCount;
      const totalEffN = effEachN * totalCount;
      const massEachKg = Math.max(0, Number(t.massKg ?? 0));
      // Only added thrusters contribute to added mass (existing should be part of base weight already)
      const addedMassKg = massEachKg * addCount;
      return {
        ...t,
        existCount,
        addCount,
        totalCount,
        effEachN,
        totalEffN,
        massEachKg,
        addedMassKg
      } as const;
    });
  }, [thrusters, existingThrusterCounts, addedThrusterCounts, atmDensity, healthPct, throttlePct]);

  const totalEffectiveN = useMemo(
    () => thrusterRows.reduce((sum, r) => sum + r.totalEffN, 0),
    [thrusterRows]
  );

  const thrustersMassKg = useMemo(
    () => thrusterRows.reduce((sum, r) => sum + r.addedMassKg, 0),
    [thrusterRows]
  );

  const requiredBaseN = useMemo(
    () => Math.max(0, weightKg) * Math.max(0, gravityG) * g_ms2,
    [weightKg, gravityG]
  );

  const requiredExtraFromThrustersN = useMemo(
    () => thrustersMassKg * Math.max(0, gravityG) * g_ms2,
    [thrustersMassKg, gravityG]
  );

  const requiredTotalN = requiredBaseN + requiredExtraFromThrustersN;

  const meetsRequirement = totalEffectiveN >= requiredTotalN && requiredTotalN > 0;

  return (
    <Row className="g-4">
      <Col xl={6} lg={6} md={12}>
        <Card className="custom-card h-100">
          <Card.Header>
            <Card.Title>Ship Specifications</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row className="gy-3">
                <Col xs={12}>
                  <Form.Label>Ship Weight (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    value={weightKg}
                    min={0}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                  />
                </Col>
                <Col xs={12}>
                  <Form.Label>Ship Size</Form.Label>
                  <Form.Select value={grid} onChange={(e) => setGrid(e.target.value as GridSize)}>
                    <option value="small">Small Ship</option>
                    <option value="large">Large Ship</option>
                  </Form.Select>
                </Col>
                <Col xs={12}>
                  <Form.Label>Gravity Multiplier</Form.Label>
                  <div className="d-flex align-items-center gap-2">
                    <Form.Control
                      type="number"
                      value={gravityG}
                      step={0.1}
                      min={0}
                      onChange={(e) => setGravityG(Number(e.target.value))}
                    />
                  </div>
                </Col>
                <Col xs={12}>
                  <Form.Label className="mb-1">Environment</Form.Label>
                  <Row className="gx-2 gy-2">
                    <Col xs={7}>
                      <div className="d-flex align-items-center gap-2">
                        <Form.Control
                          type="number"
                          value={atmDensity}
                          step={0.05}
                          min={0}
                          onChange={(e) => setAtmDensity(Number(e.target.value))}
                        />
                        <span className="text-muted">atm density (≥ 0)</span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} lg={6} md={12}>
        <Card className="custom-card h-100">
          <Card.Header>
            <Card.Title>Ship Thruster Requirements</Card.Title>
          </Card.Header>
          <Card.Body>
            <p className="mb-1">
              Required thrust: <b>{formatKN(requiredTotalN)} kN</b>
            </p>
            <p className={meetsRequirement ? "text-success mb-3" : "text-danger mb-3"}>
              Status: {meetsRequirement ? "Meets requirement" : "Insufficient thrust"}
            </p>
            <div className="mb-3">
              <ProgressBar
                now={Math.min(100, (totalEffectiveN / Math.max(1, requiredTotalN)) * 100)}
                variant={meetsRequirement ? "success" : "danger"}
                label={`${formatKN(totalEffectiveN)} kN`}
              />
            </div>

            <div className="mb-2 text-muted small">Required breakdown</div>
            <div className="mb-3">
              <ProgressBar>
                <ProgressBar
                  now={requiredTotalN > 0 ? (requiredBaseN / requiredTotalN) * 100 : 0}
                  key={1}
                  variant="secondary"
                  label={`Base ${formatKN(requiredBaseN)} kN`}
                />
                <ProgressBar
                  now={
                    requiredTotalN > 0 ? (requiredExtraFromThrustersN / requiredTotalN) * 100 : 0
                  }
                  key={2}
                  variant="warning"
                  label={`+Thrusters ${formatKN(requiredExtraFromThrustersN)} kN`}
                />
              </ProgressBar>
            </div>

            <Table responsive className="mb-3 align-middle">
              <thead>
                <tr>
                  <th>Thruster</th>
                  <th className="text-end">Each (kN)</th>
                  <th className="text-end">Mass each (kg)</th>
                  <th className="text-end">Existing</th>
                  <th className="text-end">Add</th>
                  <th className="text-end">Total (kN)</th>
                </tr>
              </thead>
              <tbody>
                {thrusterRows.map((r) => (
                  <tr key={r.id}>
                    <td>{r.name}</td>
                    <td className="text-end">{formatKN(r.effEachN)}</td>
                    <td className="text-end">{(r.massEachKg ?? 0).toLocaleString()}</td>
                    <td className="text-end" style={{ minWidth: 110 }}>
                      <Form.Control
                        type="number"
                        min={0}
                        step={1}
                        value={existingThrusterCounts[r.id] ?? 0}
                        onChange={(e) =>
                          setExistingThrusterCounts((prev) => ({
                            ...prev,
                            [r.id]: Math.max(0, Math.floor(Number(e.target.value) || 0))
                          }))
                        }
                      />
                    </td>
                    <td className="text-end" style={{ minWidth: 110 }}>
                      <Form.Control
                        type="number"
                        min={0}
                        step={1}
                        value={addedThrusterCounts[r.id] ?? 0}
                        onChange={(e) =>
                          setAddedThrusterCounts((prev) => ({
                            ...prev,
                            [r.id]: Math.max(0, Math.floor(Number(e.target.value) || 0))
                          }))
                        }
                      />
                    </td>
                    <td className="text-end">{formatKN(r.totalEffN)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex flex-wrap gap-2">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => {
                  const zeros = Object.fromEntries(thrusters.map((t) => [t.id, 0]));
                  setExistingThrusterCounts(zeros);
                  setAddedThrusterCounts(zeros);
                }}
              >
                Reset Counts
              </Button>

              <div className="ms-auto text-muted small">
                Thrusters mass (added only): <b>{thrustersMassKg.toLocaleString()} kg</b>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SpaceEngineersCalculator;
