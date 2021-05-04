import React from 'react';
import Chart from "react-apexcharts";

const CanvChart = ({ optionsArray }) => {
    const generate = () => {
        let arr = [];
        if(optionsArray.length !== 0){
            for(var i = 0; i < optionsArray.length; i++){
                let data = {x: parseInt(optionsArray[i].strikeprice), y: parseInt(optionsArray[i].strikeprice)};
                arr.push(data);
            }
        }
        console.log('generate', arr)
        return arr;
    }

    const state = {
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
                data: generate()
              }
            ]
          };

    return (
        console.log('from chart', state),
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