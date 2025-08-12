import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dynamic from "next/dynamic";
import { Button } from "react-bootstrap";
import { ApexOptions } from "apexcharts";
//

interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}
export class Basicpiechart extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          height: 300,
          type: "pie",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        colors: ["rgb(0,255,190)", "rgb(69,214,91)", "rgb(243,156,18)", "rgb(52,152,219)", "rgb(231,76,60)"],
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        legend: {
          position: "bottom"
        },
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        }
      }
    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={"100%"} height={300} />
    );
  }
}
//Simpledonut
export class Simpledonut extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: "donut",
          height: 290,
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        legend: {
          position: "bottom"
        },
        colors: ["rgb(0,255,190)", "rgb(69,214,91)", "rgb(243,156,18)", "rgb(52,152,219)", "rgb(231,76,60)"],
        dataLabels: {
          dropShadow: {
            enabled: false
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
        type="donut"
        width={"100%"}
        height={300}
      />
    );
  }
}
//Updatingdonut

export class Updatingdonut extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [44, 55, 13, 33],
      colors: ["rgb(0,255,190)", "rgb(69,214,91)", "rgb(243,156,18)", "rgb(52,152,219)", "rgb(231,76,60)"],
      options: {
        chart: {
          height: 280,
          type: "donut",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["rgb(0,143,251)", "rgb(69,214,91)", "rgb(243,156,18)", "rgb(255,69,96)", "rgb(231,76,60)"],
        legend: {
          position: "bottom"
        }
      }
    };
  }

  appendData = () => {
    const arr: any = this.state.series ? this.state.series.slice() : [];
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    this.setState({
      series: arr
    });
  };

  removeData = () => {
    if (!this.state.series || this.state.series.length === 1) return;

    const arr = this.state.series.slice();
    arr.pop();

    this.setState({
      series: arr
    });
  };

  randomize = () => {
    this.setState({
      series: this.state.series
        ? this.state.series.map(() => {
            return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
          })
        : []
    });
  };

  reset() {
    this.setState({
      series: [44, 55, 13, 33]
    });
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width={"100%"}
            height={280}
          />
        </div>

        <div className="text-center mt-4">
          <Button variant="primary" size="sm" className="m-1" onClick={() => this.appendData()}>
            + ADD
          </Button>
          &nbsp;
          <Button variant="primary" size="sm" className="m-1" onClick={() => this.removeData()}>
            - REMOVE
          </Button>
          &nbsp;
          <Button variant="primary" size="sm" className="m-1" onClick={() => this.randomize()}>
            RANDOMIZE
          </Button>
          &nbsp;
          <Button variant="primary" size="sm" className="m-1" onClick={() => this.reset()}>
            RESET
          </Button>
        </div>
      </div>
    );
  }
}
//Monochrome
export class Monochrome extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          height: "280",
          type: "pie",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
          monochrome: {
            enabled: true,
            color: "rgb(55,255,204)"
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        title: {
          text: "Monochrome Pie",
          align: "left",
          style: {
            fontSize: "13px",
            fontWeight: "bold",
            color: "#8c9097"
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
        legend: {
          show: false
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={"100%"}
          height={280}
        />
      </div>
    );
  }
}
//Gradientpie
export class Gradientpie extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          height: 300,
          type: "donut",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient"
        },
        legend: {
          formatter: function (
            val: string,
            opts: { w: { globals: { series: { [x: string]: string } } }; seriesIndex: string | number }
          ) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
          position: "bottom"
        },
        colors: ["rgb(89,255,213)", "rgb(125,226,140)", "rgb(245,175,62)", "#49b6f5", "#e6533c"],
        title: {
          text: "Gradient Donut with custom Start-angle",
          align: "left",
          style: {
            fontSize: "13px",
            fontWeight: "bold",
            color: "#8c9097"
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={"100%"}
          height={300}
        />
      </div>
    );
  }
}
//Donutwithpattern
export class Donutwithpattern extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          height: 250,
          type: "donut",
          dropShadow: {
            enabled: true,
            color: "#111",
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          },
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          width: 0
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true
                }
              }
            }
          }
        },
        colors: ["rgb(68,244,200)", "rgb(69,214,91)", "rgb(243,156,18)", "rgb(80,165,223)", "rgb(231,76,60)"],
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#111"]
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            borderWidth: 0
          }
        },
        fill: {
          type: "pattern",
          opacity: 1,
          pattern: {
            style: ["verticalLines", "squares", "horizontalLines", "circles", "slantedLines"]
          }
        },
        states: {
          hover: {}
        },
        theme: {
          palette: "palette2"
        },
        title: {
          text: "Favourite Movie Type",
          align: "left",
          style: {
            fontSize: "13px",
            fontWeight: "bold",
            color: "#8c9097"
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={"100%"}
          height={250}
        />
      </div>
    );
  }
}
//Imagefilledpie
export class Imagefilledpie extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [44, 33, 54, 45],
      options: {
        chart: {
          height: 300,
          type: "pie",
          events: {
            mounted: (chart: { windowResizeHandler: () => void }) => {
              chart.windowResizeHandler();
            }
          }
        },
        colors: ["#93C3EE", "#E5C6A0", "#669DB5", "#94A74A"],
        fill: {
          type: "image",
          opacity: 0.85,
          image: {
            src: [
              "../../../assets/images/media/media-21.jpg",
              "../../../assets/images/media/media-21.jpg",
              "../../../assets/images/media/media-21.jpg",
              "../../../assets/images/media/media-21.jpg"
            ],
            width: 25
          }
        },
        stroke: {
          width: 4
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#111"]
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            borderWidth: 0
          }
        },
        legend: {
          position: "bottom"
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={"100%"}
          height={300}
        />
      </div>
    );
  }
}
