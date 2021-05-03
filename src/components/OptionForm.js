import React from 'react';
import Option from './Option';

var startNode = 0;
var lastNode = 70;
export { lastNode };
export { startNode };

var lstNode = [];
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
        let initialOption = {
            name: 1,
            type: "Call",
            position: "Long",
            shareprice: 0,
            strikeprice: 0,
            optionpremium: 0
        };
        this.state = {
            options: [initialOption],
        };
    }

    handleChange = (event, num) => {
        //console.log(event);
        const updatedState = this.state;
        updatedState.options[num-1][event.target.name] = event.target.value;
        this.setState(updatedState);
        this.props.updateData(this.state.options);
     };

     showStuff() {
         console.log(this.state);
     }

     addOption = () => {
        const options = this.state.options;
        const newOption = {
            name: this.state.options.length + 1,
            type: "Call",
            position: "Long",
            shareprice: 0,
            strikeprice: 0,
            optionpremium: 0
        };
        
        options.push(newOption);
        this.setState((state) => ({
            options: options
        }));
     }

    render() {
        const { options } = this.state;
        // console.log(options);
        return (
            <div className="option">
                {
                        options.map((opt) => (
                            <Option key={opt.name} num={opt.name} handleChange={this.handleChange} />
                        ))
                    }

                <div className="addOption">
                    <AddOption onClick={this.addOption}/>
                </div>
            </div>
        )
    }
}

export default OptionForm