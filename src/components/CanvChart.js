import React, { useState } from 'react';
import Chart from "react-apexcharts";

const CanvChart = ({ optionsArray }) => {
    const initialState = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
              type: "numeric",
              min: 0,
              categories: [],
              axisTicks: {
                  show: true
              },
              tickAmount: 9
              }
          },
          noData: {
              text: "Loading..."
          },
          series: [
              {
              name: "series-1",
              data:
              
              [ 
                  {
                      x: 1,
                      y: 1,
                  },{
                      x: 2,
                      y: 2
                  },{
                      x: 10,
                      y: 10
                  }
              ]
              }
          ]
          };
    const [ state, setState ] = useState(initialState)

    return (
        <div className="chart">
                <Chart
                    options={state.options}
                    series={state.series}
                    type="line"
                    width="100%"
                    height="400"
                />
        </div>
    )
}

export default CanvChart