import React from 'react';
import Chart from "react-apexcharts";

class CanvChart extends React.Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
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
        }

    render() {
        return (
            <div>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="100%"
                    height="400"
                />
            </div>
        );
    }

}





export default CanvChart