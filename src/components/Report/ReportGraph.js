import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export default function ReportGraph() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/data/graph.json")
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  console.log(data);
  if (!data.options) return <></>;
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={data.options}
            series={data.series}
            type="line"
            width="1180"
          />
        </div>
      </div>
    </div>
  );
}
