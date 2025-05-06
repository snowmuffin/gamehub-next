import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';
const ReactApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface spark3 {
  options?: ApexOptions;
  width?: number;
  height?: string | number;
  series?: ApexOptions['series'];
  color?: string | string[] | (string & string[]);
  endingShape?: string;
  enabled?: boolean;
}

export class InvoiceStats extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [{
        data: [400, 540, 580, 690]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 200,
          toolbar: {
            show: false,
          }
        },
        colors: ['#00ffbe', '#ebf748', '#48f768', '#00e3d2'],
        plotOptions: {
          bar: {
            borderRadius: 1,
            horizontal: true,
            barHeight: '40%',
            dataLabels: {
              position: 'top'
            },
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['New', 'Pending', 'Completed', 'Ongoing'],
        },
      }
    };
  }

  render() {
    return (
      <ReactApexCharts options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={210} />
    );
  }
}

const td = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/2.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/8.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/2.jpg" alt="img" />
    </span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+2</a>
  </div>
</td>

const td1 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/12.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/11.jpg" alt="img" />
    </span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+4</a>
  </div>
</td>
const td2 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/5.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/9.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/13.jpg" alt="img" />
    </span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+5</a>
  </div>
</td>
const td3 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/2.jpg" alt="img" /></span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/8.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/2.jpg" alt="img" />
    </span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+2</a>
  </div>
</td>
const td4 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/10.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/15.jpg" alt="img" />
    </span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+3</a>
  </div>
</td>
const td5 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/12.jpg" alt="img" />
    </span>
  </div>
</td>
const td6 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/11.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/1.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/10.jpg" alt="img" /></span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+1</a>
  </div>
</td>
const td7 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/3.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/9.jpg" alt="img" />
    </span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+2</a>
  </div>
</td>
const td8 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/5.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/14.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/12.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/3.jpg" alt="img" /></span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+1</a>
  </div>
</td>
const td9 = <td>
  <div className="avatar-list-stacked">
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/12.jpg" alt="img" />
    </span>
    <span className="avatar avatar-sm avatar-rounded">
      <img src="../../../assets/images/faces/6.jpg" alt="img" />
    </span>
    <a className="avatar avatar-sm bg-primary avatar-rounded text-fixed-dark" href="#!">+4</a>
  </div>
</td>
export const Listviewdata = [
  { id: "1", title: "Redesign E-commerce Pages.", taskid: "31", assigndate: "18-12-2023", duedate: "02-01-2024", status: "New", priority: "Medium", src: td, color: "primary", color1: "secondary" },
  { id: "2", title: "Implementation of New Pages.", taskid: "34", assigndate: "06-12-2023", duedate: "12-01-2024", status: "Inprogress	", priority: "High", src: td1, color: "secondary", color1: "danger" },
  { id: "3", title: "Redesign E-commerce Pages.", taskid: "51", assigndate: "12-12-2023", duedate: "18-01-2024", status: "Pending", priority: "Low", src: td2, color: "warning", color1: "success" },
  { id: "4", title: "Design and update project", taskid: "44", assigndate: "19-12-2023", duedate: "06-01-2024", status: "Completed", priority: "Low", src: td3, color: "success", color1: "success" },
  { id: "5", title: "Integrate Wireframes for New Project", taskid: "56", assigndate: "08-12-2023", duedate: "19-12-2023", status: "Inprogress", priority: "Medium", src: td4, color: "secondary", color1: "secondary" },
  { id: "6", title: "Adding policies in main Landing page", taskid: "37", assigndate: "12-12-2023", duedate: "22-01-2024", status: "New", priority: "High", src: td5, color: "primary", color1: "danger" },
  { id: "7", title: "Implemetation of Reponsive Tables", taskid: "53", assigndate: "20-12-2023", duedate: "12-12-2023", status: "Completed", priority: "Low", src: td6, color: "success", color1: "success" },
  { id: "8", title: "Plugin Implementations", taskid: "40", assigndate: "30-12-2023", duedate: "02-01-2024", status: "Pending", priority: "High", src: td7, color: "warning", color1: "danger" },
  { id: "9", title: "Bug fixing Functinality", taskid: "46", assigndate: "16-12-2023", duedate: "05-01-2024", status: "Completed", priority: "Medium", src: td8, color: "success", color1: "secondary" },
  { id: "10", title: "Designing Sales Dashboard", taskid: "32", assigndate: "08-12-2023", duedate: "15-01-2024", status: "Inprogress", priority: "Low", src: td9, color: "secondary", color1: "success" },
]