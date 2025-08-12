import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { Component } from "react";
// import ReactApexChart from 'react-apexcharts';
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

//nft-balance-chart
export class Nftbalance extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [
            14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46, 55, 62, 55, 23, 11, 22,
            27, 13, 22, 37, 21, 44, 22, 45, 35
          ]
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 80,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          dashArray: 0
        },
        fill: {
          gradient: {
            // enabled: false
          }
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          }
        },
        xaxis: {
          // show: false,
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
      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={80} />
    );
  }
}

//nft-statistics
export class Nftstatistics extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Price",
          data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
        },
        {
          name: "Volume",
          data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
        }
      ],
      options: {
        chart: {
          height: 306,
          type: "line",
          zoom: {
            enabled: false
          },
          events: {
            mounted: chart => {
              chart.windowResizeHandler();
            }
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: -15,
          fontWeight: "bold"
        },
        stroke: {
          curve: "straight",
          width: [2, 2]
        },
        grid: {
          borderColor: "#f2f6f7"
        },
        colors: ["var(--primary-color)", "var(--primary02)"],
        yaxis: {
          title: {
            text: "Statistics",
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
            }
          }
        },
        xaxis: {
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
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={290} />
    );
  }
}

//Top Creators
interface topcreator {
  id: number;
  src1: string;
  data: string;
  data1: string;
  item: string;
  itemsold: string;
  price: string;
}
export const TopCreators: topcreator[] = [
  {
    id: 1,
    src1: "../../assets/images/faces/4.jpg",
    data: "Arunima Alice",
    data1: "Arunimaalice@",
    item: "Total Sold",
    itemsold: "18",
    price: "$1,982"
  },
  {
    id: 2,
    src1: "../../assets/images/faces/15.jpg",
    data: "Philip Fred",
    data1: "@charlesachilles",
    item: "Total Sold",
    itemsold: "126",
    price: "$16,982"
  },
  {
    id: 3,
    src1: "../../assets/images/faces/5.jpg",
    data: "Blanca Trico",
    data1: "@juliacamo",
    item: "Total Sold",
    itemsold: "42",
    price: "$3,432"
  },
  {
    id: 4,
    src1: "../../assets/images/faces/12.jpg",
    data: "Json Taylor",
    data1: "@jameslucas",
    item: "Total Sold",
    itemsold: "63",
    price: "$9,236"
  },
  {
    id: 5,
    src1: "../../assets/images/faces/3.jpg",
    data: "Kathie Skyla",
    data1: "elishasean",
    item: "Total Sold",
    itemsold: "59",
    price: "$7,783"
  }
];

//Top Collectors
export const TopCollectors = [
  { id: 1, src1: "../../assets/images/faces/5.jpg", data: "Alicia Smith", now: 75 },
  { id: 2, src1: "../../assets/images/faces/15.jpg", data: "Reva Shaan", now: 60 },
  { id: 3, src1: "../../assets/images/faces/4.jpg", data: "Emiley Jack", now: 35 },
  { id: 4, src1: "../../assets/images/faces/3.jpg", data: "Jessica", now: 70 },
  { id: 5, src1: "../../assets/images/faces/11.jpg", data: "Json Taylor", now: 90 },
  { id: 6, src1: "../../assets/images/faces/2.jpg", data: "Kiara May", now: 62 },
  { id: 7, src1: "../../assets/images/faces/14.jpg", data: "Agire Khan", now: 85 }
];

//Trending NFTs
interface trending {
  id: number;
  src1: string;
  rank: string;
  volume: string;
  percent: string;
  percent1: string;
  price: string;
  item: string;
  icon: string;
  icon1: string;
  color: string;
  color1: string;
  data: string;
  data1: string;
}
export const TrendingNFT: trending[] = [
  {
    id: 1,
    src1: "../../assets/images/nft-images/1.png",
    rank: "#1",
    volume: "2.56ETH",
    percent: "15.2%",
    percent1: "3.1%",
    price: "2.31ETH",
    item: "12.4K",
    icon: "ti-trending-up",
    icon1: "ti-trending-up",
    color: "success",
    color1: "success",
    data: "Starter Sense NFT",
    data1: "@irukasensei229"
  },
  {
    id: 2,
    src1: "../../assets/images/nft-images/2.png",
    rank: "#2",
    volume: "1.25ETH",
    percent: "3.7%",
    percent1: "0.5%",
    price: "0.25ETH",
    item: "10.1K",
    icon: "ti-trending-up",
    icon1: "ti-trending-down",
    color: "success",
    color1: "danger",
    data: "Lorem Kekkei",
    data1: "@clansound209"
  },
  {
    id: 3,
    src1: "../../assets/images/nft-images/10.png",
    rank: "#3",
    volume: "2,092ETH",
    percent: "23.1%",
    percent1: "9.12%",
    price: "2,000ETH",
    item: "52.7K",
    icon: "ti-trending-down",
    icon1: "ti-trending-up",
    color: "danger",
    color1: "success",
    data: "NFT Uchiha",
    data1: "@sasukeuhi990"
  },
  {
    id: 4,
    src1: "../../assets/images/nft-images/12.png",
    rank: "#4",
    volume: "36.25ETH",
    percent: "5.2%",
    percent1: "4.1%",
    price: "30.12ETH",
    item: "31.4K",
    icon: "ti-trending-up",
    icon1: "ti-trending-down",
    color: "danger",
    color1: "danger",
    data: "Lorem Ipsum Uch",
    data1: "@kakashi092"
  },
  {
    id: 5,
    src1: "../../assets/images/nft-images/15.png",
    rank: "#5",
    volume: "12.52ETH",
    percent: "7.0%",
    percent1: "12.5%",
    price: "12.50ETH",
    item: "121.5K",
    icon: "ti-trending-up",
    icon1: "ti-trending-up",
    color: "success",
    color1: "success",
    data: "Ivan Shomer Har",
    data1: "@narutouze025"
  }
];

//Personal Listings
interface Listings {
  id: number;
  src1: string;
  percent: string;
  price: string;
  icon: string;
  color: string;
  data: string;
  data1: string;
}
export const PersonalLisitings: Listings[] = [
  {
    id: 1,
    src1: "../../assets/images/nft-images/10.png",
    data: "Kakasha Si",
    data1: "@sensei011",
    price: "1.75ETH",
    color: "success",
    percent: "0.45%",
    icon: "arrow-up"
  },
  {
    id: 2,
    src1: "../../assets/images/nft-images/1.png",
    data: "Oorichimaru lo",
    data1: "@ooro001",
    price: "1.15ETH",
    color: "success",
    percent: "0.24%",
    icon: "arrow-up"
  },
  {
    id: 3,
    src1: "../../assets/images/nft-images/12.png",
    data: "SakuraYM",
    data1: "@sakura903",
    price: "1.58ETH",
    color: "danger",
    percent: "0.07%",
    icon: "arrow-down"
  },
  {
    id: 4,
    src1: "../../assets/images/nft-images/4.png",
    data: "Sasuke Uchiha",
    data1: "@sasuke777",
    price: "1.19ETH",
    color: "success",
    percent: "13.4%",
    icon: "arrow-up"
  },
  {
    id: 5,
    src1: "../../assets/images/nft-images/15.png",
    data: "Naruto Uzumaki",
    data1: "@naruto111",
    price: "2.45ETH",
    color: "success",
    percent: "1.70%",
    icon: "arrow-up"
  },
  {
    id: 6,
    src1: "../../assets/images/nft-images/16.png",
    data: "Peter Harvey",
    data1: "@Peterharvey900",
    price: "1.95ETH",
    color: "danger",
    percent: "1.21%",
    icon: "arrow-down"
  },
  {
    id: 7,
    src1: "../../assets/images/nft-images/6.png",
    data: "Nagiro Ohinavo",
    data1: "@nagiro096",
    price: "1.12ETH",
    color: "success",
    percent: "0.99%",
    icon: "arrow-up"
  }
];
