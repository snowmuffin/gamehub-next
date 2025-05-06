import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';
const ReactBTC = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactETH = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactDASH = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactLTC = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactXRS = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactGLM = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactMonero = dynamic(() => import('react-apexcharts'), { ssr: false });
const ReactEOS = dynamic(() => import('react-apexcharts'), { ssr: false });

interface spark3 {
  options?: ApexOptions,
  width?: number | number[] | string | undefined;
  height?: string | number,
  [key: string]: any
  series?: ApexOptions['series'],
  label?: XAxisAnnotations
  color?: string | string[] | (string & string[]) | undefined
  endingShape?: string
  enabled?: boolean;
}

export class BTC extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],

      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(132, 90, 223,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactBTC options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//ETH
export class ETH extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],

      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(35, 183, 229,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactETH options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//DASH
export class DASH extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(38, 191, 148,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactDASH options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}
//LTC
export class LTC extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(245, 184, 73,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactLTC options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//XRS
export class XRS extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(231, 145, 188,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactXRS options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//GLM
export class GLM extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },
        yaxis: {
          min: 0,
          show: false,

          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(137, 32, 173,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactGLM options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}
//Monero
export class Monero extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },

        yaxis: {
          min: 0,
          show: false,

          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(230, 83, 60,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactMonero options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}

//EOS
export class EOS extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: "#fff",
            opacity: 0.05,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          // ltcArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false,
          },
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        colors: ["rgba(73, 182, 245,0.5)"],
        tooltip: {
          enabled: false,
        },
      }

    };
  }

  render() {
    return (
      <ReactEOS options={this.state.options} series={this.state.series} type="area" height={60} width={"100%"} />

    );
  }
}
