import React from 'react';
import { Line } from 'react-chartjs-2';
import { startNode } from './OptionForm';
import { lastNode } from './OptionForm';

var tmp1 = startNode;
var tmp2 = lastNode;
var diff = lastNode - startNode;
const seg = 10;
var xArr = [];

if(diff < 100){
    // increase start and end by 10
    while (tmp1 % 10 !== 0){
        tmp1 -= 1;
    }
    if(tmp1 >= 10){
        tmp1 -= 10;
    }
    while (tmp2 % 10 !== 0){
        tmp2 += 1;
    }
    tmp2 += 10;
}else if(diff >= 100){
    // increase start and end by 100
    while (tmp1 % 10 !== 0){
        tmp1 -= 1;
    }
    if(tmp1 >= 100){
        tmp1 -= 100;
    }
    while (tmp2 % 10 !== 0){
        tmp2 += 1;
    }
    tmp2 += 100;
}

var div = (tmp2 - tmp1) / seg;

while(tmp1 <= tmp2){
    xArr.push(tmp1);
    tmp1 = tmp1 + div;
}

var points = [ {x: 0, y:0}];

const CanvChart = () => {
    return (

        <div>
            <Line

                data = {{
                    labels: xArr,
                    datasets: [{
                      label: "Value Diagram",
                      data: points,
                      fill: false,
                      spanGaps: true,
                      pointRadius: 10,
                      lineTension: 0,
                      borderColor: 'orange',
                      
                    }]
                }}
                height = {400}
                width = {600}

                options = {{
                    title: {
                        display: true,
                        text: 'VALUE DIAGRAM',
                        fontColor: "rgba(255, 255, 255, 1)",
                        fontFamily: 'Courier New',
                        fontSize: 20,
                    },
                    scales: {
                        xAxes: [{
                            // position: {
                            //     y: 0
                            // },
                            ticks: {
                                callback: function(value, index, values){
                                    return value;
                                }
                            },
                            gridLines:{
                                color: "rgba(255, 255, 255, 0.3)",
                                drawOnChartArea: true
                            },
                        }],
                        yAxes: [{
                            gridLines:{
                                color: "rgba(255, 255, 255, 0.3)",
                                drawOnChartArea: true,
                                zeroLineColor: "rgba(255, 255, 255, 1)",
                            },
                        }]
                    },
                    legend: false,
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}

export default CanvChart