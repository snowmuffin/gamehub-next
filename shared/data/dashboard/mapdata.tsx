"use client";
import React, { Component } from "react";
import dynamic from "next/dynamic";

interface WorldMapProps {
  width?: string | number;
  height?: string | number;
}

interface WorldMapState {
  mapData: { [key: string]: number };
}

export default class WorldMapCom extends Component<WorldMapProps, WorldMapState> {
  constructor(props: WorldMapProps) {
    super(props);

    this.state = {
      // Example gaming player distribution data
      mapData: {
        US: 2500, // United States
        CN: 2200, // China
        KR: 1800, // South Korea
        JP: 1500, // Japan
        DE: 1200, // Germany
        GB: 1100, // United Kingdom
        CA: 900, // Canada
        AU: 800, // Australia
        FR: 750, // France
        BR: 700, // Brazil
        IN: 650, // India
        RU: 600, // Russia
        SE: 550, // Sweden
        NL: 500, // Netherlands
        FI: 450, // Finland
        NO: 400, // Norway
        DK: 350, // Denmark
        SG: 300, // Singapore
        TW: 280, // Taiwan
        HK: 250 // Hong Kong
      }
    };
  }

  render() {
    const { width = "100%", height = 350 } = this.props;

    // Fallback for when react-jvectormap isn't installed
    if (typeof window === "undefined") {
      return (
        <div
          style={{
            width,
            height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "0.375rem"
          }}
        >
          <div className="text-muted">Loading World Map...</div>
        </div>
      );
    }

    return (
      <div style={{ width, height }}>
        <div
          id="world-map-markers"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          {/* Fallback content */}
          <div className="text-center p-4">
            <h6 className="text-muted mb-3">Global Gaming Activity</h6>
            <div className="row g-2">
              <div className="col-6 col-md-3">
                <div className="bg-primary text-white p-2 rounded small">
                  <div>🇺🇸 US</div>
                  <div className="fw-bold">{this.state.mapData.US?.toLocaleString()}</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="bg-info text-white p-2 rounded small">
                  <div>🇨🇳 CN</div>
                  <div className="fw-bold">{this.state.mapData.CN?.toLocaleString()}</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="bg-success text-white p-2 rounded small">
                  <div>🇰🇷 KR</div>
                  <div className="fw-bold">{this.state.mapData.KR?.toLocaleString()}</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="bg-warning text-white p-2 rounded small">
                  <div>🇯🇵 JP</div>
                  <div className="fw-bold">{this.state.mapData.JP?.toLocaleString()}</div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-muted small">
              Install vector map library for interactive world map
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Additional map-related utilities
export const mapConfig = {
  backgroundColor: "transparent",
  borderColor: "#a4b7c1",
  borderOpacity: 0.25,
  borderWidth: 1,
  color: "#e6ebf0",
  hoverColor: "#465ac7",
  hoverOpacity: null,
  normalizeFunction: "polynomial",
  scaleColors: ["#465ac7", "#465ac7"],
  selectedColor: "#465ac7",
  selectedRegions: [],
  showTooltip: true,
  onRegionClick: function (element: any, code: string, region: string) {
    console.log("Region clicked:", { code, region });
  }
};

export const getTopCountries = (mapData: { [key: string]: number }) => {
  return Object.entries(mapData)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([country, players]) => ({ country, players }));
};

export const getTotalPlayers = (mapData: { [key: string]: number }) => {
  return Object.values(mapData).reduce((sum, players) => sum + players, 0);
};
