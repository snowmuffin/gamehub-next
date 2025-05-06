import React, { Component, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
}


export const RealtimeChart = () => {

    const [chartData, setChartData] = useState<any>({
        series: [{
            name: 'population',
            data: [8, 5, 6, 4, 3, 8, 5, 6, 4, 3, 8, 5, 6, 4, 3]
        }],
        options: {
            chart: {
                id: 'realtime',
                height: 300,
                type: 'bar',
                animations: {
                    enabled: true,
                    easing: 'linear',
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
            },
            plotOptions: {
                bar: {
                    columnWidth: "30%",
                    borderRadius: 4,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                // linecap:'rounded'

            },
            colors: ["var(--primary-color)"],
            markers: {
                size: 0
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "vertical",
                    shadeIntensity: 0.5,
                    inverseColors: false,
                    gradientToColors: ["rgb(0, 227, 210)"],
                    opacityFrom: 1,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                }
            },
            // xaxis: {
            //   type: 'datetime',
            //   labels: {
            //     show: true,
            //   },
            //   axisBorder: {
            //     show: false,
            //   },
            //   axisTicks: {
            //     show: false,
            //   },
            //   crosshairs: {
            //     show: false,
            //   }
            // },
            yaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                }
            },
            legend: {
                show: false
            },

        },
    });

    const getRandomNumber = (_min: number, _max: number) => {
        // implementation of getRandomNumber function
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newArray: any[] = [];
            for (let i = 0; i < 5; i++) {
                newArray.push(getRandomNumber(3, 8));
            }
            setChartData((prevData: { series: any[]; }) => ({
                ...prevData,
                series: [{
                    ...prevData.series[0],
                    data: newArray
                }]
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ReactApexChart options={chartData.options} series={chartData.series} type="radar" height={268} />
    );
};



//VIEWS BY BROWSER
export class Viewbysource extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [{
                name: 'Call',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Email',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Website',
                data: [44, 76, 78, 13, 43, 10],
            }],
            options: {
                chart: {
                    height: 268,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                plotOptions: {
                    radar: {
                        size: 80,
                        polygons: {
                            fill: {
                                colors: ['var(--primary005)', 'var(--primary01)']
                            },
                        }
                    }
                },
                title: {
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                colors: ["#00ffbe", "#48f768", "#00e3d2"],
                stroke: {
                    width: 1.5
                },
                fill: {
                    opacity: 0.05
                },
                markers: {
                    size: 0
                },
                legend: {
                    show: true,
                    fontSize: "12px",
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontWeight: 500,
                    offsetX: 0,
                    offsetY: 10,
                    labels: {
                        colors: '#9ba5b7',
                    },
                    markers: {
                        width: 7,
                        height: 7,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0
                    },
                },
                xaxis: {
                    categories: ['2019', '2020', '2021', '2022', '2023', '2024']
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val: any, i: number) {
                            if (i % 5 === 0) {
                                return val;
                            }
                        }
                    }
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" width={"100%"} height={268} />

        );
    }
}

//users-report
export class Userreport extends Component<{}, spark3> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Revenue',
                    type: 'bar',
                    data: [
                        { x: 'Jan', y: 180 },
                        { x: 'Feb', y: 620 },
                        { x: 'Mar', y: 476 },
                        { x: 'Apr', y: 220 },
                        { x: 'May', y: 520 },
                        { x: 'Jun', y: 780 },
                        { x: 'Jul', y: 435 },
                        { x: 'Aug', y: 515 },
                        { x: 'Sep', y: 738 },
                        { x: 'Oct', y: 454 },
                        { x: 'Nov', y: 525 },
                        { x: 'Dec', y: 230 }
                    ]
                },
                {
                    name: 'Profit',
                    type: 'bar',
                    data: [
                        { x: 'Jan', y: 100 },
                        { x: 'Feb', y: 210 },
                        { x: 'Mar', y: 180 },
                        { x: 'Apr', y: 454 },
                        { x: 'May', y: 230 },
                        { x: 'Jun', y: 320 },
                        { x: 'Jul', y: 656 },
                        { x: 'Aug', y: 830 },
                        { x: 'Sep', y: 350 },
                        { x: 'Oct', y: 350 },
                        { x: 'Nov', y: 210 },
                        { x: 'Dec', y: 410 }
                    ]
                }
            ],
            options: {
                chart: {
                    toolbar: {
                        show: true,
                    },
                    height: 370,

                    type: "bar",
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                },

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1.5, 1.5],
                    show: true,
                    curve: ['smooth', 'smooth'],
                },
                grid: {
                    borderColor: '#f3f3f3',
                    strokeDashArray: 3
                },
                xaxis: {
                    axisBorder: {
                        color: 'rgba(119, 119, 142, 0.05)',
                    },
                },
                legend: {
                    show: false
                },
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                markers: {
                    size: 0
                },
                colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
                plotOptions: {
                    bar: {
                        columnWidth: "35%",
                        borderRadius: 0,
                    }
                },
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={357} />
        );
    }
}

//visitors-source
export class Visitorsource extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            series: [
                // Organic Search
                {
                    name: 'Organic Search',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(200, 2, 4).getTime(),
                                new Date(280, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(180, 3, 21).getTime(),
                                new Date(289, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Direct
                {
                    name: 'Direct',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(280, 2, 4).getTime(),
                                new Date(390, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(289, 3, 21).getTime(),
                                new Date(420, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Referral
                {
                    name: 'Referral',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(390, 2, 4).getTime(),
                                new Date(560, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(420, 3, 21).getTime(),
                                new Date(590, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Social
                {
                    name: 'Social',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(560, 2, 4).getTime(),
                                new Date(900, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(590, 3, 21).getTime(),
                                new Date(780, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Email
                {
                    name: 'Email',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(900, 2, 4).getTime(),
                                new Date(960, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(780, 3, 21).getTime(),
                                new Date(1020, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Paid Search
                {
                    name: 'Paid Search',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(960, 2, 4).getTime(),
                                new Date(1240, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(1020, 3, 21).getTime(),
                                new Date(1104, 2, 4).getTime()
                            ]
                        }
                    ]
                },
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'rangeBar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '25%',
                        rangeBarGroupRows: true
                    }
                },
                stroke: {
                    show: true,
                    colors: ["transparent"],
                    width: 10,
                },
                colors: [
                    "var(--primary-color)", "var(--primary08)", "var(--primary06)", "var(--primary04)", "var(--primary02)",
                    "var(--primary005)"
                ],
                grid: {
                    borderColor: '#f2f5f7',
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        show: false,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    height: 50,
                    offsetX: 0,
                    offsetY: 20,
                    markers: {
                        width: 5,
                        height: 5
                    },
                },
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" width={"100%"} height={300} />
        );
    }
}

//revenue
export class Revenue extends Component<{}, spark3> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [{
                name: 'This Week',
                data: [44, 42, 57, 86, 58, 55, 70],
            }, {
                name: 'Last Week',
                data: [34, 22, 37, 56, 21, 35, 60],
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 268,
                    toolbar: {
                        show: false,
                    }
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: -100,
                                to: -46,
                                color: '#ebeff5'
                            }, {
                                from: -45,
                                to: 0,
                                color: '#ebeff5'
                            }]
                        },
                        columnWidth: '25%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    curve: "straight",
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    offsetX: 0,
                    offsetY: 15,
                    height: 30,
                    markers: {
                        width: 5,
                        height: 5
                    },
                },
                yaxis: {
                    title: {
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'Rajdhani',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "";
                        }
                    }
                },
                xaxis: {
                    type: 'category',
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={"100%"} height={278} />
        );
    }
}
//SESSIONS BY DEVICE
export class SessionSource extends Component<{}, spark3> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [1754, 1234, 878, 270],
            labels: ["Mobile", "Tablet", "Desktop", "Others"],
            options: {
                chart: {
                    height: 312,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    markers: {
                        width: 5,
                        height: 5,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    // colors: "#fff",
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '90%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%"
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["var(--primary-color)", "var(--primary06)", "var(--primary04)", "var(--primary005)"],
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={"100%"} height={320} />
        );
    }
}

//VISITORS BY CHANNEL
interface visitior {
    id:number;
    icon:string;
    data:string;
    sessions:string;
    bounce:string;
    avg:string;
    target:string;
    pages:string;
    color:string;
}
export const Visitors:visitior[] = [
    { id: 1, icon: "search-2", data: "Organic Search", sessions: "782", bounce: "32.09%", avg: "0 hrs : 0 mins : 32 secs", target: "578", pages: "1.5", color: "primary" },
    { id: 2, icon: "globe", data: "Direct", sessions: "882", bounce: "39.38%", avg: "0 hrs : 2 mins : 45 secs	", target: "278", pages: "3.2", color: "secondary" },
    { id: 3, icon: "share-forward", data: "Referral", sessions: "322", bounce: "22.67%", avg: "0 hrs : 38 mins : 28 secs", target: "782", pages: "1.4", color: "danger" },
    { id: 4, icon: "reactjs", data: "Social", sessions: "389", bounce: "25.11%", avg: "0 hrs : 12 mins : 29 secs	", target: "622", pages: "1.6", color: "warning" },
    { id: 5, icon: "mail", data: "Email", sessions: "378", bounce: "23.79%", avg: "0 hrs : 14 mins : 27 secs	", target: "142", pages: "2.5", color: "success" },
    { id: 6, icon: "bank-card", data: "Paid Search", sessions: "488", bounce: "28.77%", avg: "0 hrs : 16 mins : 28 secs	", target: "178", pages: "2.9", color: "info" },
];
