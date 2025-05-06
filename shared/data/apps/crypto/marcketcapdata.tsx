import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface spark3 {
  options?: ApexOptions,
  width?: number;
  height?: string | number,
  series?: ApexOptions['series'],
  label?: XAxisAnnotations
  color?: string | string[] | (string & string[]) | undefined
  endingShape?: string
  enabled?: boolean;
}

export class Bitcoin extends React.Component<{}, spark3>{
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
            35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
            65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
            46,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 30,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1,
          dashArray: 0,
        },
        fill: {
          gradient: {
            // enabled: false,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          min: 0,
          show: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        colors: ["rgb(237, 78, 131)"],
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
    );
  }
}

export class Etherium extends React.Component<{}, spark3>{
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
            35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
            46,
          ],
        },
      ],
      options: {
        chart: {
          type: "line",
          height: 30,
          width: 120,
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1,
          dashArray: 0,
        },
        fill: {
          gradient: {
            // enabled: false,
          },
        }, yaxis: {
          axisBorder: {
            show: false,
          },
          min: 0,
          show: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        colors: ["rgb(10, 145, 81)"],
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
    );
  }
}

export class BTC extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          type: 'line',
          height: 40,
          width: 120,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#26bf94'],
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />
    );
  }
}

//ETH
export class ETH extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          type: 'line',
          height: 40,
          width: 120,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#26bf94'],
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />

    );
  }
}
//DASH
export class DASH extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          type: 'line',
          height: 40,
          width: 120,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1.5,
          dashArray: 0,
        },
        fill: {
          gradient: {
            //   enabled: false
          }
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          },
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['#e6533c'],
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={35} width={120} />

    );
  }
}

//bitcoin-chart
export class BitcoinChart extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          type: 'area',
          height: 40,
          width: 150,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1,
          dashArray: 0,
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          min: 0,
          show: false
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['rgb(10, 145, 81)'],
      }
    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={40} width={150} />

    );
  }
}

//dashcoin-chart
export class Dashcoinchart extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      options: {
        chart: {
          type: 'area',
          height: 40,
          width: 150,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 1,
          dashArray: 0,
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          min: 0,
          show: false
        },
        xaxis: {
          axisBorder: {
            show: false
          },
        },
        colors: ['rgb(237, 78, 131)'],
      }
    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={40} width={150} />

    );
  }
}