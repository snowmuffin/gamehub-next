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

//total-revenue1
export class Crmrevenue extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          data: [0, 32, 18, 58]
        }
      ],
      options: {
        chart: {
          height: 40,
          width: 100,
          type: "area",
          fontFamily: "Rajdhani",
          foreColor: "#5d6162",
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }
        },
        tooltip: {
          enabled: true,
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1],
          show: true
          // curve: 'straight',
        },
        title: {
          text: undefined
        },
        grid: {
          borderColor: "transparent"
        },
        xaxis: {
          crosshairs: {
            show: false
          }
        },
        colors: ["var(--primary-color)"],

        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: [
              [
                {
                  offset: 0,
                  color: "var(--primary02)",
                  opacity: 1
                },
                {
                  offset: 60,
                  color: "var(--primary02)",
                  opacity: 0.1
                }
              ]
            ]
          }
        }
      }
    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={100} height={40} />
    );
  }
}

//performance
export class Performance extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Profit",
          type: "column",
          data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
        },
        {
          name: "Revenue",
          type: "area",
          data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
        },
        {
          name: "Sales",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
        }
      ],
      options: {
        chart: {
          height: 285,
          type: "line",
          stacked: !1,
          toolbar: {
            show: !1
          }
        },
        stroke: {
          width: [0, 0, 1.5],
          dashArray: [0, 0, 2],
          show: true,
          curve: "straight",
          lineCap: "butt"
        },
        grid: {
          borderColor: "#f2f6f7"
        },
        xaxis: {
          axisBorder: {
            color: "rgba(119, 119, 142, 0.05)",
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
        tooltip: {
          y: [
            {
              formatter: function (e) {
                return void 0 !== e ? "$" + e.toFixed(0) : e;
              }
            },
            {
              formatter: function (e) {
                return void 0 !== e ? "$" + e.toFixed(0) : e;
              }
            },
            {
              formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) : e;
              }
            }
          ]
        },
        plotOptions: {
          bar: {
            columnWidth: "20%"
          }
        },
        legend: {
          position: "top"
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        markers: {
          size: 0
        },
        colors: ["var(--primary-color)", "rgba(255 ,255 ,255 ,0.05)", "rgb(235, 247, 72)"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={285} />
    );
  }
}

//revenue-target
export class Revenuetarget extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Total",
          data: [41, 38, 34, 26, 18, 15]
        }
      ],
      options: {
        chart: {
          width: 324,
          height: 283,
          type: "bar",
          toolbar: {
            show: false
          }
        },
        colors: ["var(--primary-color)"],
        plotOptions: {
          bar: {
            barHeight: "35%",
            distributed: true,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 400,
          fontSize: "11px",
          offsetX: 0,
          offsetY: 10,
          labels: {
            colors: "#74767c"
          },
          markers: {
            width: 6,
            height: 6,
            strokeWidth: 0,
            radius: 12,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 5,
            vertical: 5
          }
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3
        },
        xaxis: {
          categories: [["Usa"], ["Russia"], ["Canada"], ["Indonesia"], ["China"], ["Uae"]],
          labels: {
            show: false,
            style: {
              fontSize: "12px"
            }
          }
        },
        yaxis: {
          // offsetX: 30,
          // offsetY: 30,
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 300,
              cssClass: "apexcharts-yaxis-label"
            },
            offsetY: 8
          }
        },
        fill: {
          type: "pattern",
          opacity: 1,
          pattern: {
            style: [
              "verticalLines",
              "verticalLines",
              "verticalLines",
              "verticalLines",
              "verticalLines",
              "verticalLines"
            ] // string or array of strings
          }
        },
        tooltip: {
          enabled: true,
          shared: false,
          intersect: true,
          x: {
            show: false
          }
        }
      }
    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={283} />
    );
  }
}

//lead_sourc
export class Leadsource extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [1754, 634, 878, 470],
      labels: ["Call", "Email", "Website", "Organic"],
      options: {
        chart: {
          height: 250,
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
          curve: "straight",
          lineCap: "round",
          // colors: "#fff",
          width: 0,
          dashArray: 0
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            expandOnClick: false,
            donut: {
              size: "85%",
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
            bottom: -90
          }
        },
        colors: ["var(--primary-color)", "var(--primary07)", "var(--primary04)", "var(--primary01)"]
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
        height={250}
      />
    );
  }
}

//Top Deals
interface topdeal {
  id: number;
  deal: string;
  src1: string;
  company: string;
  sale: string;
}
export const Topdeals: topdeal[] = [
  {
    id: 1,
    deal: "$2.11923M",
    src1: "../../assets/images/company-logos/2.png",
    company: "Stellar Solutions",
    sale: "18,293"
  },
  {
    id: 2,
    deal: "$1.07324M",
    src1: "../../assets/images/company-logos/5.png",
    company: "Nexus Dynamics",
    sale: "17,556"
  },
  {
    id: 3,
    deal: "$3.01153M",
    src1: "../../assets/images/company-logos/7.png",
    company: "Velocity Ventures",
    sale: "15,895"
  },
  {
    id: 4,
    deal: "$2.14915M",
    src1: "../../assets/images/company-logos/4.png",
    company: "Fusion Innovate",
    sale: "15,229"
  },
  {
    id: 5,
    deal: "$5.08923M",
    src1: "../../assets/images/company-logos/3.png",
    company: "Nebula Nexus",
    sale: "14,253"
  },
  { id: 6, deal: "$1.11923M", src1: "../../assets/images/company-logos/1.png", company: "Horizon Hub", sale: "12,763" },
  { id: 7, deal: "$3.28911M", src1: "../../assets/images/company-logos/6.png", company: "Spruko Tech", sale: "10,543" }
];

//Recent Leads
interface Recent {
  id: number;
  src1: string;
  data: string;
  data1: string;
  mail: string;
  amount: string;
  sale: string;
  location: string;
}
export const RecentLead: Recent[] = [
  {
    id: 1,
    src1: "../../assets/images/faces/15.jpg",
    data: "Xenon Tech. Ed.",
    data1: "Ayyan Cowall",
    mail: "mayorkelly@gmail.com",
    amount: "$4320.29",
    sale: "43 Days",
    location: "Germany"
  },
  {
    id: 2,
    src1: "../../assets/images/faces/4.jpg",
    data: "Ideal IT Sol.",
    data1: "Meisha Kerr",
    mail: "Kevingarfield@gmail.com",
    amount: "$6745.99",
    sale: "45 Days",
    location: "Canada"
  },
  {
    id: 3,
    src1: "../../assets/images/faces/5.jpg",
    data: "Inferno Xo",
    data1: "Jessica",
    mail: "Ayyancowel234@gmail.com",
    amount: "$1176.89",
    sale: "50 Days",
    location: "Singapore"
  },
  {
    id: 4,
    src1: "../../assets/images/faces/6.jpg",
    data: "Myami Group & Tech.",
    data1: "Arunima A",
    mail: "mirindahers@gmail.com",
    amount: "$1899.99",
    sale: "55 Days",
    location: "USA"
  },
  {
    id: 5,
    src1: "../../assets/images/faces/11.jpg",
    data: "Mevengo Tech Et Sed",
    data1: "Martin Miles",
    mail: "jacobsmith@gmail.com",
    amount: "$1867.29",
    sale: "30 Days",
    location: "Europe"
  },
  {
    id: 6,
    src1: "../../assets/images/faces/13.jpg",
    data: "Lackme Info Et.",
    data1: "Khabib Hussain",
    mail: "Hussain@gmail.com",
    amount: "$2439.99",
    sale: "35 Days",
    location: "Canada"
  }
];
