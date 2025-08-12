import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Revenue Statistics
interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}
export class Mixedlinecolumn extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      options: {
        chart: {
          height: 320,
          type: "line",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          width: [0, 4]
        },
        grid: {
          borderColor: "#f2f5f7"
        },
        title: {
          text: "Traffic Sources",
          align: "left",
          style: {
            fontSize: "13px",
            fontWeight: "bold",
            color: "#8c9097"
          }
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        colors: ["rgb(0,255,190)", "rgb(60,186,81)"],
        labels: [
          "01 Jan 2001",
          "02 Jan 2001",
          "03 Jan 2001",
          "04 Jan 2001",
          "05 Jan 2001",
          "06 Jan 2001",
          "07 Jan 2001",
          "08 Jan 2001",
          "09 Jan 2001",
          "10 Jan 2001",
          "11 Jan 2001",
          "12 Jan 2001"
        ],
        xaxis: {
          type: "datetime",
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        yaxis: [
          {
            title: {
              text: "Website Blog",
              style: {
                color: "#8c9097"
              }
            },
            labels: {
              show: true,
              style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label"
              }
            }
          },
          {
            opposite: true,
            title: {
              text: "Social Media",
              style: {
                color: "#8c9097"
              }
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={320} />
    );
  }
}

// Linearea
export class Linearea extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "TEAM A",
          type: "area",
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        },
        {
          name: "TEAM B",
          type: "line",
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }
      ],
      options: {
        chart: {
          height: 320,
          type: "line",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          curve: "smooth"
        },
        colors: ["rgb(11,108,83)", "rgb(60,186,81)"],
        grid: {
          borderColor: "#f2f5f7"
        },
        fill: {
          type: "solid",
          opacity: [0.35, 1]
        },
        labels: [
          "Dec 01",
          "Dec 02",
          "Dec 03",
          "Dec 04",
          "Dec 05",
          "Dec 06",
          "Dec 07",
          "Dec 08",
          "Dec 09 ",
          "Dec 10",
          "Dec 11"
        ],
        markers: {
          size: 0
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        yaxis: [
          {
            title: {
              text: "Series A",
              style: {
                color: "#8c9097"
              }
            },
            labels: {
              show: true,
              style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label"
              }
            }
          },
          {
            opposite: true,
            title: {
              text: "Series B",
              style: {
                color: "#8c9097"
              }
            },
            labels: {
              show: true,
              style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label"
              }
            }
          }
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y: number) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={320} />
    );
  }
}
// Linecolumnarea
export class Linecolumnarea extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
          name: "TEAM B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
      ],
      options: {
        chart: {
          height: 320,
          type: "line",
          stacked: false,
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth"
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        colors: ["rgb(0,255,190)", "rgb(30,76,43)", "#f5b849"],
        grid: {
          borderColor: "#f2f5f7"
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003"
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: "datetime",
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        yaxis: {
          title: {
            text: "Points",
            style: {
              color: "#8c9097"
            }
          },
          min: 0,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label"
            }
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y: number) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={320} />
    );
  }
}
