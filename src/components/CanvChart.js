import React, { useState } from 'react';
import Chart from "react-apexcharts";



const CanvChart = ({ optionsArray }) => {

    let arr = [];
    const generate = () => {
        arr = [];
        if(optionsArray.length === 0){
            // do nothing
        }else{
            for(var i = 0; i < optionsArray.length; i++){
                let data = {x: parseInt(optionsArray[i].strikeprice), y: parseInt(optionsArray[i].strikeprice)};
                arr.push(data);
            }
        }
        return arr;
    }

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
                data: arr
              }
            ]
          };
    const [ state, setState ] = useState(initialState)

    generate();
    console.log(arr);
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



// function renderGraph(arr){

    
//     let series = [
//         {
//         name: "series-1",
//         data: [{
//             x: 0,
//             y: 0
//         }]
//         }
//     ]


//     if(arr.length === 0){
//         state.updateSeries([{
//             data: [{
//                 x: 0,
//                 y: 0
//             }]
//         }])
//     }else{
//         console.log("from render", arr[arr.length - 1].strikeprice);
//         // CanvChart.updateSeries([{
//         //     data: [{
//         //         x: parseInt(arr[arr.length - 1].strikeprice),
//         //         y: parseInt(arr[arr.length - 1].strikeprice)**2
//         //     }]
//         // }])
//     }
// }


export default CanvChart