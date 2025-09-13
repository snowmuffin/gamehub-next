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
//Bitcoin
export class Bitcoinwidget extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [34, 55, 41, 67, 22, 43, 21]
        }
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            // right: [6],
            blur: 3,
            color: "#47bbed",
            opacity: 0.2
          },
          type: "line",
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#47bbed"],
        stroke: {
          width: [1],
          curve: ["smooth"]
        },
        xaxis: {
          crosshairs: {
            show: false
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={100}
          height={20}
        />
      </div>
    );
  }
}

//Etherium
export class Etherumwidget extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [34, 55, 41, 47, 32, 53, 31]
        }
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            // right: 6,
            blur: 3,
            color: "#28D193",
            opacity: 0.2
          },
          type: "line",
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#28D193"],
        stroke: {
          width: [1],
          curve: ["smooth"]
        },
        xaxis: {
          crosshairs: {
            show: false
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={100}
          height={20}
        />
      </div>
    );
  }
}

//dshCoin
export class DshCoinwidget extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [31, 53, 32, 47, 41, 55, 44]
        }
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            // right: 6,
            blur: 3,
            // color: ['#FF534D'],
            opacity: 0.2
          },
          type: "line",
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#FF534D"],
        stroke: {
          width: [1],
          curve: ["smooth"]
        },
        xaxis: {
          crosshairs: {
            show: false
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={100}
          height={20}
        />
      </div>
    );
  }
}

//glmCoin
export class GlmCoinwidget extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [21, 43, 22, 45, 35, 55, 34]
        }
      ],
      options: {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            // right: 6,
            blur: 3,
            // color: ['#FFBE14'],
            opacity: 0.2
          },
          type: "line",
          height: 20,
          width: 100
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["#FFBE14"],
        stroke: {
          width: [1],
          curve: ["smooth"]
        },
        xaxis: {
          crosshairs: {
            show: false
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={100}
          height={20}
        />
      </div>
    );
  }
}

//sales-statistics
export class SalesStatistics extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
          type: "line"
        },
        {
          data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
          type: "bar"
        }
      ],
      options: {
        chart: {
          height: 321,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
          // show: true,
          // position: 'top',
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            dataLabels: {},
            columnWidth: "30%"
          }
        },
        colors: ["rgb(69, 214, 91)", "rgba(0, 227, 210 , 1)"],
        stroke: {
          curve: ["smooth", "stepline"],
          width: [1, 0],
          dashArray: [0, 0]
        },
        grid: {
          show: true,
          borderColor: "#ffffff",
          strokeDashArray: 3
        },
        xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
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
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={"100%"}
          height={321}
        />
      </div>
    );
  }
}

//totalRevenue1
export class TotalRevenue1 extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Revenue",
          data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55]
        }
      ],
      options: {
        chart: {
          height: 170,
          type: "area",
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1],
          show: true,
          curve: ["stepline"]
        },
        xaxis: {
          crosshairs: {
            show: false
          }
        },
        legend: {
          show: false
        },
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        markers: {
          size: 0
        },
        colors: ["#FFBE14"],
        fill: {
          type: "gradient"
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width={"100%"}
          height={170}
        />
      </div>
    );
  }
}

//sessionsByDevice
export class SessionsByDevice extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Tablet",
          data: [[10, 35, 80]]
        },
        {
          name: "Mobile",
          data: [[22, 10, 80]]
        },
        {
          name: "Desktop",
          data: [[25, 25, 150]]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "bubble",
          toolbar: {
            show: false
          }
        },
        grid: {
          borderColor: "#f3f3f3",
          strokeDashArray: 3
        },
        colors: ["rgb(0, 227, 210 )", "rgb(70, 178, 201)", "rgb(237, 78, 131)"],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          fontSize: "13px",
          labels: {
            colors: "#959595"
          },
          markers: {
            width: 10,
            height: 10
          }
        },
        xaxis: {
          min: 0,
          max: 50,
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          max: 50,
          labels: {
            show: false
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bubble"
          width={"100%"}
          height={350}
        />
      </div>
    );
  }
}

//report
export class Report extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [17, 22, 37, 47, 39, 28, 14],
          name: "Revenue"
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 235,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 6,
            blur: 3,
            color: "#000",
            opacity: 0.05
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "35%",
            borderRadius: 4,
            horizontal: false,
            colors: {
              ranges: [
                {
                  from: 41,
                  to: Infinity,
                  color: "rgb(0, 227, 210 )"
                },
                {
                  from: 0,
                  to: 40,
                  color: "rgba(0, 227, 210 , 0.2)"
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: false,
          borderColor: "transparent",
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          categories: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
          // colors: ['#fff'],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            rotate: -90,
            style: {
              fontFamily: "Inter, sans-serif"
            }
          }
        },
        yaxis: {
          // colors: ['#fff'],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={"100%"}
          height={235}
        />
      </div>
    );
  }
}

//views
export class Viewsdata extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Job Applied",
          type: "line",
          data: [25, 50, 30, 55, 20, 45, 30]
        },
        {
          name: "Job Viewed",
          type: "bar",
          data: [35, 25, 40, 30, 45, 35, 60]
        }
      ],
      options: {
        chart: {
          height: 348,
          type: "line",
          stacked: false,
          toolbar: {
            show: false
          }
        },
        colors: ["rgba(0, 227, 210 , 1)", "rgba(0, 227, 210 , 0.1)"],
        grid: {
          borderColor: "#e9edf4",
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        stroke: {
          width: [2, 0],
          curve: "smooth",
          dashArray: [0, 4]
        },
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        markers: {
          size: 4,
          hover: {
            size: 5
          }
        },
        fill: {
          opacity: [0.85, 0.25],
          gradient: {
            inverseColors: false,
            shadeIntensity: 1,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        legend: {
          show: true,
          position: "top",
          fontFamily: "Inter, sans-serif",
          markers: {
            width: 10,
            height: 10
          }
        },
        xaxis: {
          type: "category",
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            // width: [6],
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            rotate: -90
          }
        },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600
            }
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            }
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
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
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={"100%"}
          height={348}
        />
      </div>
    );
  }
}
