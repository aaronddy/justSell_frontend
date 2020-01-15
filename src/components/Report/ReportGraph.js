import React, { Component } from "react";
import Chart from "react-apexcharts";

class ReportGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/graph.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: res
        })
      );
  }

  render() {
    if (!this.state.data.options) return <></>;
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.data.options}
              series={this.state.data.series}
              type="line"
              width="1180"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReportGraph;
