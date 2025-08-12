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

//Attendencesummary
export class Attendencesummary extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Absent",
          data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120]
        },
        {
          name: "Timely Arrival",
          data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136]
        },
        {
          name: "Late Arrival",
          data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98]
        }
      ],
      options: {
        chart: {
          height: 292,
          type: "line",
          toolbar: {
            show: false
          },
          background: "none"
          // fill: "#fff",
        },
        grid: {
          borderColor: "#f2f6f7"
        },
        colors: ["var(--primary-color)", "var(--primary05)", "var(--primary01)"],
        // background: 'transparent',
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 2
        },
        // dataLabels: {
        //     enabled: false,
        // },
        legend: {
          show: true,
          position: "top"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          // show: false,
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
        },
        yaxis: {
          show: false,
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={700} height={292} />
    );
  }
}

//jobs-applied
export class Jobsapplied extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [
        {
          name: "Jobs Applied",
          data: [11, 22, 31, 37, 41, 49, 65]
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 295,
          toolbar: {
            show: false
          }
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3
        },
        colors: ["var(--primary-color)"],
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: "#ebeff5"
                },
                {
                  from: -45,
                  to: 0,
                  color: "#ebeff5"
                }
              ]
            },
            columnWidth: "30%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: undefined
        },
        legend: {
          show: false,
          position: "top"
        },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "13px",
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label"
            }
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            }
          }
        },
        xaxis: {
          type: "category",
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
            rotate: -90
          }
        }
      }
    };
  }
  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={324} height={295} />
    );
  }
}

//Employeeroles
export class Employeeroles extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      series: [1754, 1234, 878, 270],
      labels: ["Developer", "Designer", "Team Lead", "Hr Role"],
      options: {
        chart: {
          height: 247,
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
          width: 0,
          dashArray: 0
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "90%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -4
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  color: undefined,
                  offsetY: 8,
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
        height={247}
      />
    );
  }
}

//Todo Tasks

const check = <input className="form-check-input" type="checkbox" id="task1" value="" aria-label="..." />;
const defaultcheck = (
  <input className="form-check-input" type="checkbox" id="task1" value="" aria-label="..." defaultChecked />
);

export const Todotask = [
  {
    id: 1,
    title: "Home Page",
    status: "In Progress",
    date: "14-04-2024",
    src1: "../../assets/images/faces/2.jpg",
    color: "primary",
    check: check
  },
  {
    id: 2,
    title: "Landing Design",
    status: "In Progress",
    date: "20-04-2024",
    src1: "../../assets/images/faces/5.jpg",
    color: "primary",
    check: defaultcheck
  },
  {
    id: 3,
    title: "New Template Design",
    status: "Pending",
    date: "29-05-2024",
    src1: "../../assets/images/faces/1.jpg",
    color: "warning",
    check: check
  },
  {
    id: 4,
    title: "HR Management Template Design",
    status: "In Progress",
    date: "18-04-2024",
    src1: "../../assets/images/faces/10.jpg",
    color: "primary",
    check: check
  },
  {
    id: 5,
    title: "Designing New Template",
    status: "Completed",
    date: "11-04-2024",
    src1: "../../assets/images/faces/2.jpg",
    color: "success",
    check: check
  },
  {
    id: 6,
    title: "Documentation Project",
    status: "In Progress",
    date: "18-04-2024",
    src1: "../../assets/images/faces/4.jpg",
    color: "primary",
    check: check
  }
];

//Upcoming Interviews
interface upcoming {
  id: number;
  src1: string;
  title: string;
  role: string;
  date: string;
  shedule: string;
}
export const Upcoming: upcoming[] = [
  {
    id: 1,
    src1: "../../assets/images/faces/1.jpg",
    title: "Elisha Smith",
    role: "Ui Developer",
    date: "14-04-2024",
    shedule: "1:00PM - 2:00PM"
  },
  {
    id: 2,
    src1: "../../assets/images/faces/15.jpg",
    title: "Paul Levoski",
    role: "React Developer",
    date: "20-04-2024",
    shedule: "3:00PM - 4:00PM"
  },
  {
    id: 3,
    src1: "../../assets/images/faces/13.jpg",
    title: "Reva Shaan",
    role: "	Testing",
    date: "29-05-2024",
    shedule: "10:30AM - 11:30AM"
  },
  {
    id: 4,
    src1: "../../assets/images/faces/7.jpg",
    title: "Emma Watson",
    role: "HR Manager",
    date: "18-04-2024",
    shedule: "4:30PM - 5:30PM"
  },
  {
    id: 5,
    src1: "../../assets/images/faces/4.jpg",
    title: "Carolin Smith",
    role: "Angular Developer	",
    date: "11-04-2024",
    shedule: "12:00PM - 1:00PM"
  },
  {
    id: 6,
    src1: "../../assets/images/faces/11.jpg",
    title: "Micheal Jackson",
    role: "Web Developer",
    date: "18-04-2024",
    shedule: "1:00PM - 2:00PM"
  }
];

//Applicant Details
export const Applicant = [
  {
    id: 1,
    src1: "../../assets/images/faces/4.jpg",
    title: "Mayor Kelly",
    applicantid: "#SPT-011",
    position: "System Administrator",
    date: "24,Nov 2023",
    mail: "mayorkelly2341@gmail.com	",
    work: "2+ Years",
    status: "New",
    color: "primary",
    check: check
  },
  {
    id: 2,
    src1: "../../assets/images/faces/15.jpg",
    title: "Kevin Garfield",
    applicantid: "#SPT-012",
    position: "Data and Analytics",
    date: "13,Dec 2023",
    mail: "Kevingarfield45@gmail.com",
    work: "3+ Years	",
    status: "Interviewed	",
    color: "success",
    check: defaultcheck
  },
  {
    id: 3,
    src1: "../../assets/images/faces/11.jpg",
    title: "Ayyan Cowel",
    applicantid: "#SPT-013",
    position: "UX/UI Design",
    date: "10,Nov 2023",
    mail: "Ayyancowel234@gmail.com	",
    work: "Fresher",
    status: "Hired",
    color: "info",
    check: check
  },
  {
    id: 4,
    src1: "../../assets/images/faces/8.jpg",
    title: "Mirinda Hers",
    applicantid: "#SPT-014",
    position: "Database Management	",
    date: "21,Jan 2024",
    mail: "mirindahers@gmail.com",
    work: "1 Year",
    status: "Under Review	",
    color: "secondary",
    check: defaultcheck
  },
  {
    id: 5,
    src1: "../../assets/images/faces/9.jpg",
    title: "Jacob Smith",
    applicantid: "#SPT-015",
    position: "AI and Machine Learning",
    date: "22,Dec 2023",
    mail: "jacobsmith@gmail.com",
    work: "5+ Years",
    status: "rejected",
    color: "danger",
    check: defaultcheck
  }
];
