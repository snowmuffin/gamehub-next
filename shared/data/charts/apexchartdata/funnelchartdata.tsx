import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface FunnelDataState {
  series: { name: string; data: number[] }[];
  options: any; // Define the type of options properly
}

export class FunnelData extends Component<{}, FunnelDataState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "Funnel Series",
          data: [1380, 1100, 990, 880, 740, 548, 330, 200],

        },
      ],
      options: {

        chart: {
          type: 'bar',
          height: 350,

        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
            barHeight: '80%',
            isFunnel: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: any, opt: any) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
          },
          dropShadow: {
            enabled: true,
          },
        },
        title: {
          text: 'Recruitment Funnel',
          align: 'middle',

        },

        xaxis: {
          categories: [
            'Sourced',
            'Screened',
            'Assessed',
            'HR Interview',
            'Technical',
            'Verify',
            'Offered',
            'Hired',
          ],

        },
        legend: {
          show: false,
        },
        colors: ["rgb(2,221,165)"],
      },
    };

  }

  render() {
    return (
      <div>
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={350} />
      </div>
    );
  }
}
export class PyramidData extends Component<{}, FunnelDataState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "",
          data: [200, 330, 548, 740, 880, 990, 1100, 1380],

        },
      ],
      options: {

        chart: {
          type: 'bar',
          height: 350,

        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
            distributed: true,
            barHeight: '80%',
            isFunnel: true,
          },
        },
        colors: ["rgb(2,221,165)", "rgb(60,186,81)", "rgb(208,136,19)", "rgb(46,133,199)", "rgb(198,68,55)", "rgb(41,177,100)", "rgb(123,4,221)", "rgb(4,222,165)"],
        dataLabels: {
          enabled: true,
          formatter: function (val: any, opt: any) {
            return opt.w.globals.labels[opt.dataPointIndex];
          },
          dropShadow: {
            enabled: true,
          },
        },
        title: {
          text: 'Recruitment Funnel',
          align: 'middle',

        },

        xaxis: {
          categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains']

        },
        legend: {
          show: false,
        },

      },
    };

  }

  render() {
    return (
      <div>
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={350} />
      </div>
    );
  }
}
