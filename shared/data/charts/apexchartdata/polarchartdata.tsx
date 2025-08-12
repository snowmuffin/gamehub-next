import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

//
interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}

export class Basicpolararea extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      options: {
        chart: {
          type: "polarArea",
          height: 300,
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          colors: ["#fff"]
        },
        fill: {
          opacity: 0.8
        },
        legend: {
          position: "bottom"
        },
        colors: [
          "rgb(4,173,130)",
          "rgb(48,147,67)",
          "rgb(159,109,20)",
          "rgb(38,108,150)",
          "rgb(152,59,48)",
          "rgb(34,141,82)",
          "rgb(165,79,94)",
          "rgb(37,107,149)",
          "rgb(95,10,172)"
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="polarArea"
        width={"100%"}
        height={320}
      />
    );
  }
}
//Monochromepolar
export class Monochromepolar extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [42, 47, 52, 58, 65],
      options: {
        chart: {
          height: 300,
          type: "polarArea",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: "bottom"
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
            color: "rgb(0,255,190)"
          }
        }
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="polarArea"
        width={"100%"}
        height={320}
      />
    );
  }
}
