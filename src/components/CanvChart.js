import React from 'react';
import { Line } from 'react-chartjs-2';

const CanvChart = () => {
    return (

        <div>
            <Line

                data = {{
                    labels: [0, 5, 10, 15, 20, 25, 30],
                    datasets: [{
                      label: "Value Diagram",
                      data: [
                                {
                                    x: 10,
                                    y: 20
                                }, {
                                    x: 15,
                                    y: 10
                                }, {
                                    x: 20,
                                    y: 15
                                }, {
                                    x: 25,
                                    y: 30
                                }
                            ],
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
                        text: 'Alex numba one'
                    },
                    scales: {
                        ticks: {
                            beginAtZero: true,
                            autoSkip: true
                        }
                    },
                    legend: false,
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}

export default CanvChart