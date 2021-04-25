import React from 'react';
import Option from './Option';

var startNode = 0;
var lastNode = 70;
export { lastNode };
export { startNode };

var lstNode = [];

var node = {
    type: "Call",
    position: "Long",
    shareprice: 0,
    strikeprice: 0,
    optionpremium: 0
};
// append the to the list of nodes everytime new options are made

export { lstNode };

function AddOption(props) {
    return <button onClick={props.onClick}>
        Add Option
    </button>
}

class OptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
 
            options: [1,2,3],
        };
    }

    handleChange = (event) => {
        console.log(event);
        this.setState({ [event.target.name]: event.target.value });
     };

     showStuff() {
         console.log(this.state);
     }

     addOption = () => {
        const options = this.state.options;
        options.push(this.state.options.length + 1);
        this.setState((state) => ({
            options: options
        }));
     }

    render() {
        const { options } = this.state;
        console.log(options);
        return (
            <div>
                {
                        options.map((opt) => (
                            <Option num={opt} handleChange={this.handleChange} />
                        ))
                    }
                <AddOption onClick={this.addOption}/>
            </div>
        )
    }
}

export default OptionForm