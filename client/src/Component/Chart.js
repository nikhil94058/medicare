import React, { useState } from 'react'
import Chart from "react-apexcharts";
const Chart1 = () => {
  return (
    <div className="chart-container bg-[#F8FDCF] w-[500px]">
      <center>
        <h2 className="chart-title">Corona Survey</h2>
        <div className="chart-wrapper">
          <ApexChart />
        </div>
      </center>
    </div>
  );
};



const ApexChart = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <div>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart1;
