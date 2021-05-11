import React from 'react';
import Chart from "react-apexcharts";
// import { evaluate } from mathjs;

let inputs = [];
let arr = [];


const CanvChart = ({ optionsArray }) => {

    let globePre = 0;
    let funcs = [[0, globePre]];
    

    const lc = (sp, c) => {

        sp = parseFloat(sp);
        c = parseFloat(c);

        if (funcs.length !== 0){
            
            if(sp < parseFloat(funcs[0][0])){
                console.log("first");
                // funcs.push([sp, c+"-"+sp+"-"+globePre]);
                funcs.unshift([sp, 5]);
            }else if(sp > parseFloat(funcs[funcs.length - 1][0])){
                console.log("Last");
                funcs.push([sp, 5]);
            }else{
                for(var i = 0; i < funcs.length; i++){
                    if(sp > parseFloat(funcs[i][0]) && sp < parseFloat(funcs[i + 1][0])){
                        console.log("between");
                        funcs.splice((i+1), 0, [sp, 5]);
                    }else{
                        console.log("Error locating piv point");
                    }
                }
            }
            
        }
    }
    
    const lp = (sp, c) => {
        inputs.push("Long Put");
    }
    
    const sc = (sp, c) => {
        inputs.push("Short Call");
    }
    
    const sp = (sp, c) => {
        inputs.push("Short Put");
    }

    const generate = () => {
        arr = [];
        inputs = [];
        globePre = 0;

        for(var k = 0; k < optionsArray.length; k++){
            if(optionsArray[k].optionpremium !== 0){
                if(optionsArray[k].position === "Long" && optionsArray[k].type === "Call"){
                    globePre = globePre - parseFloat(optionsArray[k].optionpremium);
                }else if(optionsArray[k].position === "Long" && optionsArray[k].type === "Put"){
                    globePre = globePre - parseFloat(optionsArray[k].optionpremium);
                }else if(optionsArray[k].position === "Short" && optionsArray[k].type === "Call"){
                    globePre = globePre + parseFloat(optionsArray[k].optionpremium);
                }else if(optionsArray[k].position === "Short" && optionsArray[k].type === "Put"){
                    globePre = globePre + parseFloat(optionsArray[k].optionpremium);
                }else{
                    console.log("Invalid input");
                }
            }
        }
        
        if(optionsArray.length === 0){
            // do nothing
        }else{
            for(var j = 0; j < optionsArray.length; j++){
                if(optionsArray[j].position === "Long" && optionsArray[j].type === "Call"){
                    lc(optionsArray[j].strikeprice, optionsArray[j].contracts);
                }else if(optionsArray[j].position === "Long" && optionsArray[j].type === "Put"){
                    lp(optionsArray[j].strikeprice, optionsArray[j].contracts);
                }else if(optionsArray[j].position === "Short" && optionsArray[j].type === "Call"){
                    sc(optionsArray[j].strikeprice, optionsArray[j].contracts);
                }else if(optionsArray[j].position === "Short" && optionsArray[j].type === "Put"){
                    sp(optionsArray[j].strikeprice, optionsArray[j].contracts);
                }else{
                    console.log("Invalid input");
                }
            }
        }

        if(optionsArray.length !== 0){
            let data = {x: 0, y: 0};
            arr.push(data);
            for(var i = 0; i < funcs.length; i++){
                
                if (i === 0){
                    data = {x: parseFloat(funcs[0][0]) || 0, y: parseFloat(funcs[0][1]) || 0};
                    console.log("test", funcs[0][1]);
                }else{
                    data = {x: parseFloat(funcs[i][0]) || 0, y: parseFloat(funcs[i - 1][1]) || 0};
                    console.log("test", funcs[i - 1][1]);
                }
                arr.push(data);
            }
        }
        console.log(funcs);
        funcs = [];
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
                data: arr
              }
        ]
    };
    
    generate();
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