import React, { useState } from 'react';
import Chart from "react-apexcharts";


// let xVals = [];
// let funcs = [];

let inputs = [];

const lc = () => {
    inputs.push("Long Call");
}

const lp = () => {
    inputs.push("Long Put");
}

const sc = () => {
    inputs.push("Short Call");
}

const sp = () => {
    inputs.push("Short Put");
}

const CanvChart = ({ optionsArray }) => {

    let arr = [];
    const generate = () => {
        arr = [];
        inputs =[];
        if(optionsArray.length === 0){
            // do nothing
        }else{
            for(var j = 0; j < optionsArray.length; j++){
                if(optionsArray[j].position === "Long" && optionsArray[j].type === "Call"){
                    lc();
                }else if(optionsArray[j].position === "Long" && optionsArray[j].type === "Put"){
                    lp();
                }else if(optionsArray[j].position === "Short" && optionsArray[j].type === "Call"){
                    sc();
                }else if(optionsArray[j].position === "Short" && optionsArray[j].type === "Put"){
                    sp();
                }else{
                    console.log("Invalid input");
                }
            }

            for(var i = 0; i < optionsArray.length; i++){
                let data = {x: parseFloat(optionsArray[i].strikeprice), y: parseFloat(optionsArray[i].strikeprice)};
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
    console.log(inputs);
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