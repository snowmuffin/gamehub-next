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
const ReactStatistics = dynamic(() => import('react-apexcharts'), { ssr: false });

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
      <ReactBTC options={this.state.options} series={this.state.series} type="area" height={60} />

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
      <ReactETH options={this.state.options} series={this.state.series} type="area" height={60} />

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
      <ReactDASH options={this.state.options} series={this.state.series} type="area" height={60} />

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
      <ReactLTC options={this.state.options} series={this.state.series} type="area" height={60} />

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
      <ReactXRS options={this.state.options} series={this.state.series} type="area" height={60} />

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
      <ReactGLM options={this.state.options} series={this.state.series} type="area" height={60} />

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
      <ReactMonero options={this.state.options} series={this.state.series} type="area" height={60} />

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
      <ReactEOS options={this.state.options} series={this.state.series} type="area" height={60} />

    );
  }
}
export class Statistics extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {

      series: [{
        type: 'line',
        name: "Buy",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
      }, {
        name: "Sell",
        type: 'bar',
        data: [65, 45, 75, 68, 85, 35, 62, 40, 40, 64, 50, 89]
      }],

      options: {
        chart: {
          height: 300,

          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: -15,
          fontWeight: "bold",
        },
        plotOptions: {
          bar: {
            columnWidth: "18%",
            borderRadius: 2
          }
        },
        stroke: {
          curve: 'smooth',
          width: [1, 1],
          dashArray: [3, 5],
        },
        grid: {
          borderColor: '#f1f1f1',
          strokeDashArray: 3
        },
        colors: ["rgba(0, 255, 190, 0.9)", "rgba(69, 214, 91, 0.8)"],
        yaxis: {
          title: {
            text: 'Statistics',
            style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'Rajdhani',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
        },
        xaxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            // width: [6],
          },
          labels: {
            rotate: -90
          }
        }
      }

    };
  }

  render() {
    return (
      <ReactStatistics options={this.state.options} series={this.state.series} type="line" width={"100%"} height={300} />

    );
  }
}
export const Options1 = [
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Etherium', label: 'Etherium' },
  { value: 'Litecoin', label: 'Litecoin' },
  { value: 'Ripple', label: 'Ripple' },
  { value: 'Cardano', label: 'Cardano' },
  { value: 'Neo', label: 'Neo' },
  { value: 'Stellar', label: 'Stellar' },
  { value: 'EOS', label: 'EOS' },
  { value: 'NEM', label: 'NEM' },
];
export const Options2 = [
  { value: 'USD', label: 'USD' },
  { value: 'Pound', label: 'Pound' },
  { value: 'Rupee', label: 'Rupee' },
  { value: 'Euro', label: 'Euro' },
  { value: 'Won', label: 'Won' },
  { value: 'Dinar', label: 'Dinar' },
  { value: 'Rial', label: 'Rial' }
];

/** Selectdata**/
interface Data {
  value: string;
  label: string;
}
export const Data1: Data[] = [
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
  { value: 'XRP', label: 'XRP' },
  { value: 'DASH', label: 'DASH' },
  { value: 'NEO', label: 'NEO' },
  { value: 'LTC', label: 'LTC' },
  { value: 'BSD', label: 'BSD' }
];
interface Dataa {
  value: string;
  label: string;
}
export const Data2: Dataa[] = [
  { value: 'USD', label: 'USD' },
  { value: 'AED', label: 'AED' },
  { value: 'AUD', label: 'AUD' },
  { value: 'ARS', label: 'ARS' },
  { value: 'AZN', label: 'AZN' },
  { value: 'BGN', label: 'BGN' },
  { value: 'BRL', label: 'BRL' }
];
