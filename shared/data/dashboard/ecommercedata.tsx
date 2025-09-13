import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { Component, useEffect, useState } from "react";
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

//total-sales
export class Totalsales extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [48],
      options: {
        chart: {
          height: 120,
          // width: 100,
          type: "radialBar"
        },
        colors: ["var(--primary-color)"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
              background: "#fff"
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#4b9bfa",
                fontSize: "10px",
                show: false
              },
              value: {
                offsetY: 5,
                color: "#4b9bfa",
                fontSize: "11px",
                show: true,
                fontWeight: 500
              }
            }
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Followers"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width={"100%"}
        height={120}
      />
    );
  }
}

//total-revenue
export class TotalRevenue extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [62],
      options: {
        chart: {
          height: 120,
          // width: 100,
          type: "radialBar"
        },
        colors: ["var(--primary-color)"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
              background: "#fff"
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#4b9bfa",
                fontSize: "10px",
                show: false
              },
              value: {
                offsetY: 5,
                color: "#4b9bfa",
                fontSize: "11px",
                show: true,
                fontWeight: 500
              }
            }
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Followers"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width={"100%"}
        height={120}
      />
    );
  }
}

//page-view
export class Pageview extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [80],
      options: {
        chart: {
          height: 120,
          // width: 100,
          type: "radialBar"
        },
        colors: ["var(--primary-color)"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
              background: "#fff"
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#4b9bfa",
                fontSize: "10px",
                show: false
              },
              value: {
                offsetY: 5,
                color: "#4b9bfa",
                fontSize: "11px",
                show: true,
                fontWeight: 500
              }
            }
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Followers"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width={"100%"}
        height={120}
      />
    );
  }
}

//profit-by-sale
export class Profitbysale extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [25],
      options: {
        chart: {
          height: 120,
          // width: 100,
          type: "radialBar"
        },
        colors: ["var(--primary-color)"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
              background: "#fff"
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#4b9bfa",
                fontSize: "10px",
                show: false
              },
              value: {
                offsetY: 5,
                color: "#4b9bfa",
                fontSize: "11px",
                show: true,
                fontWeight: 500
              }
            }
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Followers"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width={"100%"}
        height={120}
      />
    );
  }
}

//website-traffic
export const Website = () => {
  const [data, setData] = useState([]);
  const [lastDate, setLastDate] = useState(0);
  const TICKINTERVAL = 86400000;
  const XAXISRANGE = 777600000;
  let intervalId: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    const _seed = 42;

    const generateRandomData = () => {
      const newData: any = [...data];
      const newDate = lastDate + TICKINTERVAL;

      for (let i = 0; i < newData.length - 1; i++) {
        newData[i].x = newDate - XAXISRANGE - TICKINTERVAL;
        newData[i].y = 0;
      }

      newData.push({
        x: newDate,
        y: Math.floor(Math.random() * (90 - 10 + 1)) + 10
      });

      if (newData.length > 20) {
        newData.splice(0, newData.length - 20);
      }

      setData(newData);
      setLastDate(newDate);
    };

    const initializeChart = () => {
      const options = {
        series: [{ data: data }],
        chart: {
          id: "realtime",
          height: 300,
          type: "bar",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 500
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        }
        // Other options...
      };

      const chart = new ApexCharts(document.querySelector("#website-traffic"), options);
      chart.render();

      intervalId = window.setInterval(generateRandomData, 3000);

      return () => clearInterval(intervalId);
    };

    initializeChart();

    return () => clearInterval(intervalId);
  }, [data, lastDate]);

  return <div id="website-traffic">{/* Chart will be rendered here */}</div>;
};

//sales-statistics
export class SalesStatics extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: [100, 210, 180, 454, 230, 320, 656, 830, 350, 350, 210, 410]
        },
        {
          name: "Refunds",
          data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480]
        }
      ],
      options: {
        chart: {
          type: "area",
          height: 318,
          toolbar: {
            show: false
          }
        },
        colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
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
                  color: "var(--primary-color)",
                  opacity: 1
                },
                {
                  offset: 50,
                  color: "var(--primary-color)",
                  opacity: 0.2
                },
                {
                  offset: 100,
                  color: "var(--primary-color)",
                  opacity: 0.0
                }
              ],
              [
                {
                  offset: 0,
                  color: "rgb(0, 227, 210)",
                  opacity: 1
                },
                {
                  offset: 50,
                  color: "rgb(0, 227, 210)",
                  opacity: 0.2
                },
                {
                  offset: 100,
                  color: "rgb(0, 227, 210)",
                  opacity: 0.0
                }
              ]
            ]
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          position: "top",
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
        stroke: {
          curve: "smooth",
          width: [1, 1],
          lineCap: "round"
        },
        grid: {
          borderColor: "#edeef1",
          strokeDashArray: 2
        },
        yaxis: {
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
        height={300}
      />
    );
  }
}

//profit-analysis
export class ProfitAnalysis extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [92],

      options: {
        chart: {
          height: 250,
          type: "radialBar"
          // responsive: 'true',
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            // size: 120,
            // imageWidth: 50,
            // imageHeight: 50,
            track: {
              strokeWidth: "0"
            },
            // dropShadow: {
            //     enabled: false,
            //     top: 0,
            //     left: 0,
            //     bottom: 0,
            //     blur: 3,
            //     opacity: 0.5
            // },
            dataLabels: {
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 30
              },
              // hollow: {
              //     size: "60%"
              // },
              value: {
                offsetY: -10,
                fontSize: "22px",
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        colors: ["var(--primary-color)"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            type: "horizontal",
            gradientToColors: ["rgb(0, 227, 210)"],
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          dashArray: 3
        },
        labels: ["Profit"]
      }
    };
  }
  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width={"100%"}
        height={250}
      />
    );
  }
}

//Recent Orders
interface order {
  id: number;
  code: string;
  card: string;
  payment: string;
  status: string;
  amount: string;
  date: string;
}
export const RecentOrder: order[] = [
  {
    id: 1,
    code: "Rupay Card ****2783",
    card: "Card Payment",
    payment: "#ORD789ABC",
    status: "completed",
    amount: "$1,234.78",
    date: "Nov 22,2023"
  },
  {
    id: 2,
    code: "Digital Wallet",
    card: "Online Transaction",
    payment: "#ORD253SFW",
    status: "pending",
    amount: "$623.99",
    date: "Nov 22,2023"
  },
  {
    id: 3,
    code: "Mastro Card ****7893",
    card: "Card Payment",
    payment: "#ORD356SKF",
    status: "cancelled",
    amount: "$1,324",
    date: "Nov 21,2023"
  },
  {
    id: 4,
    code: "Cash On Delivery",
    card: "Pay On Delivery",
    payment: "#ORD363ESD",
    status: "completed",
    amount: "$1,123.49",
    date: "Nov 20,2023"
  },
  {
    id: 5,
    code: "Visa Card ****2563",
    card: "Card Payment",
    payment: "#ORD253KSE",
    status: "completed",
    amount: "$1,289",
    date: "Nov 18,2023"
  }
];

//Products Overview
interface products {
  id: number;
  heading: string;
  src1: string;
  productid: string;
  price: string;
  status: string;
  sales: string;
  revenue: string;
  color: string;
}
export const Products: products[] = [
  {
    id: 1,
    heading: "Niker College Bag",
    src1: "../../assets/images/ecommerce/png/17.png",
    productid: "#1734-9743",
    price: "$199.99",
    status: "Available",
    sales: "3,903",
    revenue: "$67,899.24",
    color: "success"
  },
  {
    id: 2,
    heading: "Dslr Camera (50mm f/1.9 HRM Lens)",
    src1: "../../assets/images/ecommerce/png/14.png",
    productid: "#1234-4567",
    price: "$1,299.99",
    status: "Available",
    sales: "12,435",
    revenue: "$3,24,781.92",
    color: "success"
  },
  {
    id: 3,
    heading: "Outdoor Bomber Jacket",
    src1: "../../assets/images/ecommerce/png/11.png",
    productid: "#1902-9883",
    price: "$99.99",
    status: "Not Available",
    sales: "5,143",
    revenue: "$76,102.76",
    color: "danger"
  },
  {
    id: 4,
    heading: "Light Blue Teddy",
    src1: "../../assets/images/ecommerce/png/5.png",
    productid: "#8745-1232",
    price: "$79.00",
    status: "Limited Deal",
    sales: "7,183",
    revenue: "$78,211.83",
    color: "warning"
  },
  {
    id: 5,
    heading: "Orange Smart Watch (24mm)",
    src1: "../../assets/images/ecommerce/jpg/18.jpg",
    productid: "#1962-9033",
    price: "$199.99",
    status: "In Offer",
    sales: "10,287",
    revenue: "$2,32,982.99",
    color: "primary"
  }
];
