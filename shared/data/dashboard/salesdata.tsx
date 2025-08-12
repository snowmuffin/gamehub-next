"use client";
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

//Male Users
export class MaleUsers extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Transactions",
          data: [42, 11, 51, 35, 51, 32]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 40,
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
          },
          events: {
            mounted: chart => {
              chart.windowResizeHandler();
            }
          }
        },
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
        stroke: {
          show: true,
          curve: "straight",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {},
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          }
        },
        xaxis: {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        colors: ["var(--primary-color)"]
      }
    };
  }
  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={"100%"}
          height={110}
        />
      </div>
    );
  }
}

//Female Users
export class FemaleUsers extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Transactions",
          data: [32, 51, 35, 51, 11, 32]
        }
      ],
      options: {
        chart: {
          type: "line",
          height: 40,
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
          },
          events: {
            mounted: chart => {
              chart.windowResizeHandler();
            }
          }
        },
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
        stroke: {
          show: true,
          curve: "straight",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {},
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          }
        },
        xaxis: {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        colors: ["var(--primary-color)"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={110} />
    );
  }
}

//sales-statistics"
export class SalesStatistics extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          type: "line",
          data: [100, 210, 180, 454, 230, 320, 656, 830, 350, 350, 210, 410]
        },
        {
          name: "Profit",
          type: "line",
          data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480]
        }
      ],
      options: {
        chart: {
          redrawOnWindowResize: true,
          height: 328,
          type: "line",
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            top: 7,
            left: 0,
            blur: 1,
            // color: ["transparent", "rgb(0, 227, 210)"],
            opacity: 0.05
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
          width: [1.5, 1.5],
          curve: "straight",
          dashArray: [0, 3]
        },
        legend: {
          show: true,
          fontSize: "12px",
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 500,
          height: 40,
          offsetX: 0,
          offsetY: 10,
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
        colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontFamily: "Rajdhani",
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
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
            rotate: -90,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        fill: {
          opacity: 1
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
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={315} />
    );
  }
}

//recent-orders
export class RecentOrders extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);
    this.state = {
      series: [1754, 634],
      labels: ["Delivered", "Cancelled"],
      options: {
        chart: {
          height: 265,
          type: "donut"
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          // colors: "#fff",
          width: 1,
          dashArray: 0
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            expandOnClick: false,
            donut: {
              size: "70%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -25
                },
                value: {
                  show: true,
                  fontSize: "15px",
                  color: undefined,
                  offsetY: -20,
                  formatter: function (val) {
                    return val + "%";
                  }
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#495057"
                }
              }
            }
          }
        },
        grid: {
          padding: {
            bottom: -100
          }
        },
        colors: ["var(--primary-color)", "rgba(0, 227, 210, 1)"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="donut"
        width={"100%"}
        height={270}
      />
    );
  }
}

//visitors
export class Visitors extends Component<{}, spark3> {
  constructor(props: {}) {
    super(props);
    this.state = {
      series: [
        {
          name: "This Week",
          data: [25, 50, 30, 55, 20, 45, 30]
        },
        {
          name: "Previous Week",
          data: [35, 25, 40, 30, 45, 35, 60]
        }
      ],
      options: {
        chart: {
          height: 290,
          type: "line",
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 0,
            blur: 1,
            // color: ["transparent", "rgb(0, 227, 210)"],
            opacity: 0.05
          }
        },
        colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 1.5,
          dashArray: [0, 3]
        },
        grid: {
          show: false,
          borderColor: "#f9f9fb87",
          row: {
            colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          axisBorder: {
            color: "rgba(119, 119, 142, 0.15)",
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            color: "rgba(119, 119, 142, 0.05)",
            // width: 6,
            offsetX: 0,
            offsetY: 0
          }
        },
        legend: {
          show: false,
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={290} />
    );
  }
}

const svg1 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
    <path d="M224,80V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H216A8,8,0,0,1,224,80Z" opacity="0.2"></path>
    <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"></path>
  </svg>
);
const svg2 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
    <path
      d="M192,168a40,40,0,0,1-40,40H128V128h24A40,40,0,0,1,192,168ZM112,48a40,40,0,0,0,0,80h16V48Z"
      opacity="0.2"
    ></path>
    <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
  </svg>
);
const svg3 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
    <path
      d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
      opacity="0.2"
    ></path>
    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
  </svg>
);
const svg4 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
    <path
      d="M224,88V200a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V64A16,16,0,0,0,56,80H216A8,8,0,0,1,224,88Z"
      opacity="0.2"
    ></path>
    <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path>
  </svg>
);

export const Salesdata = [
  {
    id: 1,
    data: "32,981",
    content: "Total Sales",
    icon: "ti-arrow-narrow-up",
    percentage: "0.29%",
    color: "success",
    icon1: svg1
  },
  {
    id: 2,
    data: "$14,32,145",
    content: "Total Revenue",
    icon: "ti-arrow-narrow-up",
    percentage: "1.25%",
    color: "success",
    icon1: svg2
  },
  {
    id: 3,
    data: "4,678",
    content: "Page Views",
    icon: "ti-arrow-narrow-down",
    percentage: "0.05%",
    color: "danger",
    icon1: svg3
  },
  {
    id: 4,
    data: "$645",
    content: "Profit By Sale",
    icon: "ti-arrow-narrow-up",
    percentage: "0.18%",
    color: "success",
    icon1: svg4
  }
];

//TRAFFIC SOURCES
interface traffic {
  id: number;
  data: string;
  percentage: string;
  now: number;
}
export const Trafficsource: traffic[] = [
  { id: 1, data: "Organic Search", percentage: "38%", now: 38 },
  { id: 2, data: "Email Marketing", percentage: "29%", now: 29 },
  { id: 3, data: "Direct Traffic", percentage: "35%", now: 35 },
  { id: 4, data: "Social Media", percentage: "43%", now: 43 },
  { id: 5, data: "Offline Marketing", percentage: "59%", now: 59 },
  { id: 6, data: "Referral", percentage: "45%", now: 45 }
];

//RECENT INVOICES
interface invoice {
  id: number;
  orderid: string;
  customer: string;
  quantity: string;
  price: string;
  date: string;
  src: string;
  status: string;
}
export const Recentinvoice: invoice[] = [
  {
    id: 1,
    orderid: "#1537890",
    customer: "Ayyan Cowall",
    quantity: "1",
    price: "$4320.29",
    status: "shipped",
    date: "25,Nov 2022",
    src: "../../assets/images/faces/15.jpg"
  },
  {
    id: 2,
    orderid: "#1539078",
    customer: "Meisha Kerr",
    quantity: "1",
    price: "$6745.99",
    status: "cancelled",
    date: "29,Nov 2022",
    src: "../../assets/images/faces/4.jpg"
  },
  {
    id: 3,
    orderid: "#1539832",
    customer: "Jessica",
    quantity: "2",
    price: "$1176.89",
    status: "under process",
    date: "04,Dec 2022",
    src: "../../assets/images/faces/5.jpg"
  },
  {
    id: 4,
    orderid: "#1539832",
    customer: "Arunima A",
    quantity: "1",
    price: "$1899.99",
    status: "shipped",
    date: "10,Dec 2022",
    src: "../../assets/images/faces/6.jpg"
  },
  {
    id: 5,
    orderid: "#1538267",
    customer: "Martin Miles",
    quantity: "1",
    price: "$1867.29",
    status: "pending",
    date: "18,Dec 2022",
    src: "../../assets/images/faces/11.jpg"
  },
  {
    id: 6,
    orderid: "#1537890",
    customer: "Khabib Hussain",
    quantity: "1",
    price: "$2439.99",
    status: "success",
    date: "24,Dec 2022",
    src: "../../assets/images/faces/13.jpg"
  }
];
