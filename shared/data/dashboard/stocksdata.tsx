import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}

//candidatePerformance
export class Totalearnings extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Earnings",
          type: "column",
          data: [100, 210, 180, 454, -230, -320, 256, -430, -350, -350, 210, 410]
        },
        {
          name: "Stock Price",
          type: "line",
          data: [180, 620, 476, 220, 520, 780, 435, 515, 738, 454, 525, 230]
        },
        {
          name: "Volume Of Trading",
          type: "line",
          data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480]
        }
      ],
      options: {
        chart: {
          redrawOnWindowResize: true,
          height: 335,
          type: "bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            colors: {
              ranges: [
                {
                  from: -500,
                  to: 0,
                  color: "var(--primary01)"
                },
                {
                  from: 500,
                  to: 0,
                  color: "var(--primary-color)"
                }
              ]
            }
          }
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [0, 1.5, 1.5],
          curve: "straight"
        },
        legend: {
          show: true,
          fontSize: "12px",
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 500,
          height: 40,
          offsetX: 0,
          offsetY: 20,
          labels: {
            colors: "#9ba5b7"
          },
          markers: {
            width: 7,
            height: 7,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
            offsetX: 0,
            offsetY: 0
          }
        },
        colors: ["var(--primary-color)", "rgba(72, 247, 104)", "rgb(255, 49, 49)"],
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label"
            }
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        xaxis: {
          type: "category",
          categories: [
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
            // width: 6,
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            rotate: -90,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
            }
          }
        },
        fill: {
          opacity: 1,
          type: ["solid", "solid"],
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#fdc530"],
            inverseColors: true,
            opacityFrom: 0.35,
            opacityTo: 0.05,
            stops: [0, 50, 100]
            // colorStops: ['#fdc530']
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
        type="line"
        width={"100%"}
        height={335}
      />
    );
  }
}

//portfolio-value
export class Portfoliovalue extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Portfolio Value",
          data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45]
        }
      ],
      options: {
        chart: {
          type: "area",
          height: 260,
          toolbar: {
            show: false
          }
        },
        colors: ["var(--primary-color)"],
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          position: "top"
        },
        stroke: {
          curve: "stepline",
          width: [1]
        },
        fill: {
          type: "gradient",
          // gradient: {
          //     shadeIntensity: 0.9,
          //     opacityFrom: 0.4,
          //     opacityTo: 0.5,
          //     stops: [0, 75]
          // }
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
              [
                {
                  offset: 0,
                  color: "var(--primary005)",
                  opacity: 1
                },
                {
                  offset: 75,
                  color: "var(--primary005)",
                  opacity: 1
                },
                {
                  offset: 100,
                  color: "var(--primary005)",
                  opacity: 1
                }
              ]
            ]
          }
        },
        yaxis: {
          min: 0,
          show: false
        },
        xaxis: {
          type: "category",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec"
          ],
          axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            // width: 6,
            offsetX: 0,
            offsetY: 0
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
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width={"100%"}
        height={260}
      />
    );
  }
}

//apple-stock-graph
export class Applestock extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43,
            19, 46
          ]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        tooltip: {
          enabled: false
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
          }
        },
        colors: ["rgb(72, 247, 104)"]
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width={120}
        height={20}
      />
    );
  }
}

//nvidia-stock-graph
export class Nvidiastock extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Value",
          data: [
            0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51,
            35, 41
          ]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        tooltip: {
          enabled: false
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
          }
        },
        colors: ["rgb(253, 77, 77)"]
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width={120}
        height={20}
      />
    );
  }
}

//amazon-stock-graph
export class Amazonstock extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51,
            35, 41
          ]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        tooltip: {
          enabled: false
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
          }
        },
        colors: ["rgb(72, 247, 104)"]
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width={120}
        height={20}
      />
    );
  }
}

//microsoft-stock-graph
export class Microsoftstock extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51,
            35, 41
          ]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        tooltip: {
          enabled: false
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
          }
        },
        colors: ["rgb(72, 247, 104)"]
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width={120}
        height={20}
      />
    );
  }
}

//alphabet-stock-graph
export class Alphabetstock extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Value",
          data: [
            61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53,
            46, 31
          ]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        tooltip: {
          enabled: false
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
          }
        },
        colors: ["rgb(253, 77, 77)"]
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width={120}
        height={20}
      />
    );
  }
}

//mastercard-stock-graph
export class Mastercardstock extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Value",
          data: [
            62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45,
            54, 38
          ]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 20,
          width: 120,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        tooltip: {
          enabled: false
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
          }
        },
        colors: ["rgb(253, 77, 77)"]
      }
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width={120}
        height={20}
      />
    );
  }
}
//Stocks
interface stock {
  id: number;
  icon: string;
  data: string;
  data1: string;
  price: string;
  percent: string;
  stock: string;
}
export const Stocksdata: stock[] = [
  {
    id: 1,
    icon: "apple",
    data: "Apple",
    data1: "Apple Inc",
    price: "$191.56",
    percent: "1.55%",
    stock: "180"
  },
  {
    id: 2,
    icon: "nvidia",
    data: "Nvidia",
    data1: "NVIDIA Corp",
    price: "$594.91",
    percent: "4.17%",
    stock: "63 "
  },
  {
    id: 3,
    icon: "amazon",
    data: "Amazon",
    data1: "Amazon.com, Inc.",
    price: "$155.34",
    percent: "1.84%",
    stock: "79 "
  },
  {
    id: 4,
    icon: "microsoft",
    data: "Microsoft",
    data1: "Microsoft Corp",
    price: "$398.67",
    percent: "1.22%",
    stock: "153"
  },
  {
    id: 5,
    icon: "google",
    data: "ALPHABET",
    data1: "Alphabet Inc",
    price: "$147.97",
    percent: "2.06%",
    stock: "45"
  }
];

//My Portfolio :
interface profile {
  id: number;
  icon: string;
  data: string;
  data1: string;
  color: string;
}
export const Myprofile: profile[] = [
  { id: 1, icon: "ti-trending-down", color: "danger", data: "Nifty 50", data1: "$12,289.44" },
  { id: 2, icon: "ti-trending-down", color: "danger", data: "SENSEX", data1: "$12,289.44" },
  { id: 3, icon: "ti-trending-up", color: "success", data: "DJIA", data1: "$12,289.44" },
  { id: 4, icon: "ti-trending-down", color: "danger", data: "S&P 500", data1: "$12,289.44" },
  { id: 5, icon: "ti-trending-up", color: "success", data: "NASDAQ", data1: "$12,289.44" },
  { id: 6, icon: "ti-trending-up", color: "success", data: "NIFTY IT", data1: "$12,289.44" }
];
