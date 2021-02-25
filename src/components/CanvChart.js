import React from 'react';
import { Line } from 'react-chartjs-2';
import { lastNode } from './OptionForm';

const CanvChart = () => {
    return (

        <div>
            <Line

                data = {{
                    labels: [0, lastNode],
                    datasets: [{
                      label: "Value Diagram",
                    //   data: [
                    //             {
                    //                 x: 10,
                    //                 y: 20
                    //             }, {
                    //                 x: 15,
                    //                 y: 10
                    //             }, {
                    //                 x: 20,
                    //                 y: 15
                    //             }, {
                    //                 x: 25,
                    //                 y: 30
                    //             }
                    //         ],
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
                            ticks: {
                                callback: function(value, index, values){
                                    return '$' + value;
                                }
                            },
                            gridLines:{
                                color: "rgba(255, 255, 255, 0.3)"
                            }
                        }],
                        yAxes: [{
                            gridLines:{
                                color: "rgba(255, 255, 255, 0.3)"
                            }
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