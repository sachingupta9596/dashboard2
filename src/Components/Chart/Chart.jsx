import React from "react";
import Chart from "react-apexcharts";

export default function ApexChart() {
  const data = {
    options: {
      chart: {
        id: "area"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      stroke: {
        curve: "smooth"
      },
      colors: ["#4f35a1", "#246dec"],
      tooltip: {
        shared: true,
        intersect: false
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "series-2",
        data: [90, 60, 85, 90, 49, 10, 90, 11]
      }
    ]
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={data.options}
            series={data.series}
            type="area"
            width="90%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
}
