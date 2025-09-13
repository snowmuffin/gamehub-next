import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import ReactApexChart from 'react-apexcharts';

interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}

//learning-analysis
export class Learninganalysis extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "This Year",
          data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
        },
        {
          name: "Last Year",
          data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
        }
      ],
      options: {
        chart: {
          height: 328,
          type: "line",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1.5, 1.5],
          show: true,
          curve: ["straight", "straight"]
        },
        grid: {
          borderColor: "#f3f3f3",
          strokeDashArray: 3
        },
        xaxis: {
          axisBorder: {
            color: "rgba(119, 119, 142, 0.05)"
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
        colors: ["var(--primary-color)", "rgba(255,255,255,0.1)"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
            borderRadius: 2
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
        height={328}
      />
    );
  }
}

//top-course-categories
export class Topcourse extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [31, 21, 15, 10],
      options: {
        chart: {
          height: 238,
          type: "pie"
        },
        legend: {
          show: false,
          position: "bottom"
        },
        stroke: {
          width: 0
        },
        dataLabels: {
          offsetX: 50,
          offsetY: 50,
          dropShadow: {
            enabled: false
          }
          // Adjust the position of data labels to the center
          // position: 'center'
        },
        colors: [
          "var(--primary-color)",
          "var(--primary08)",
          "var(--primary06)",
          "var(--primary04)"
        ],
        labels: ["Sales"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="pie"
        width={"100%"}
        height={238}
      />
    );
  }
}

//courses-progress
export class Coursesprogress extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "In Progress",
          data: [44, 42, 57, 86, 58, 55, 70]
        },
        {
          name: "Completed",
          data: [74, 72, 87, 116, 88, 85, 100]
        }
      ],
      options: {
        chart: {
          stacked: true,
          type: "bar",
          height: 286
        },
        grid: {
          borderColor: "#f5f4f4",
          strokeDashArray: 5,
          yaxis: {
            lines: {
              show: true // Ensure y-axis grids are shown
            }
          }
        },
        colors: ["var(--primary-color)", "var(--primary01)"],
        plotOptions: {
          bar: {
            columnWidth: "20%"
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          position: "bottom",
          offsetX: 0,
          offsetY: 8,
          markers: {
            width: 5,
            height: 5,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          }
        },
        yaxis: {
          title: {
            text: "Courses Progress",
            style: {
              color: "#adb5be",
              fontSize: "14px",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label"
            }
          },
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            // borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            }
          }
        },
        xaxis: {
          type: "category",
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        type="bar"
        width={"100%"}
        height={286}
      />
    );
  }
}

//payouts
export class Payouts extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Payment",
          data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55]
        }
      ],
      options: {
        chart: {
          height: 260,
          type: "area",
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1.4],
          show: true,
          curve: ["smooth"]
        },
        grid: {
          borderColor: "#f3f3f3",
          strokeDashArray: 3
        },
        xaxis: {
          axisBorder: {
            color: "rgba(119, 119, 142, 0.05)"
          },
          crosshairs: {
            show: false
          }
        },
        yaxis: {
          min: 50
          //   stepSize: 1
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
        colors: ["var(--primary-color)"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
              [
                {
                  offset: 0,
                  color: "var(--primary01)",
                  opacity: 0.5
                },
                {
                  offset: 75,
                  color: "var(--primary01)",
                  opacity: 0.5
                },
                {
                  offset: 100,
                  color: "var(--primary01)",
                  opacity: 0.5
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
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width={"100%"}
        height={235}
      />
    );
  }
}
//Courses List
interface course {
  id: number;
  src: string;
  title: string;
  category: string;
  classes: string;
  recent: string;
  instructor: string;
  batch: string;
}
export const CoursesData: course[] = [
  {
    id: 1,
    src: "../../assets/images/media/backgrounds/3.png",
    title: "Quantum Physics for Kittens",
    category: "Physics & Science",
    classes: "140",
    recent: "20,Feb 2024	",
    instructor: "Prof. Astrid Stardust",
    batch: "100"
  },
  {
    id: 2,
    src: "../../assets/images/media/backgrounds/4.jpg",
    title: "Introduction to Time Travel 101",
    category: "Science Fiction & Fantasy",
    classes: "20",
    recent: "14,Feb 2024",
    instructor: "Dr. Ignatius Thunderstrike",
    batch: "200"
  },
  {
    id: 3,
    src: "../../assets/images/media/backgrounds/5.jpg",
    title: "Zombie Survival Strategies",
    category: "Survival Skills",
    classes: "60",
    recent: "06,Mar 2024",
    instructor: "Dr. Magnus Quasar",
    batch: "50"
  },
  {
    id: 4,
    src: "../../assets/images/media/backgrounds/6.jpg",
    title: "Extreme Juggling and Fire Breathing",
    category: "Performing Arts",
    classes: "30",
    recent: "28,Feb 2024",
    instructor: "Dr. Nebula Starlight",
    batch: "10"
  },
  {
    id: 5,
    src: "../../assets/images/media/backgrounds/7.jpg",
    title: "Advanced Banana Peeling Techniques",
    category: "Culinary Arts",
    classes: "60",
    recent: "10,Apr 2024	",
    instructor: "Prof. Orion Blaze",
    batch: "40"
  },
  {
    id: 6,
    src: "../../assets/images/media/backgrounds/8.jpg",
    title: "Unicorn Riding Basics",
    category: "Mythical Creatures Studies",
    classes: "90",
    recent: "08,Mar 2024",
    instructor: "Dr. Celestia Thunderbolt",
    batch: "60"
  }
];
