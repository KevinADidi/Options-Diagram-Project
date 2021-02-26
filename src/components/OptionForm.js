import React from 'react';

var startNode = 0;
var lastNode = 70;
export { lastNode };
export { startNode };

class OptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "Call",
            position: "Long",
            shareprice: 0,
            strikeprice: 0,
            optionpremium: 0,
        };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };

     showStuff() {
         console.log(this.state);
     }

    render() {
        return (
            
            <div>
                <form>
                    <label>
                        Number of Options:  
                        <input type="number" name="numOfOptions"  onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>Option 1:</label>

                    <select  name="position" onChange={this.handleChange}>
                        <option name="long">Long</option>
                        <option name="short">Short</option>
                    </select>

                    <select name="type" onChange={this.handleChange}>
                        <option name="call">Call</option>
                        <option name="put">Put</option>
                    </select>

                    <label>
                        Share Price:  
                        <input type="number" name="shareprice"  onChange={this.handleChange}/>
                    </label>

                    <label>
                        Strike Price:  
                        <input type="number" name="strikeprice"  onChange={this.handleChange}/>
                    </label>

                    <label>
                        Option Premium:  
                        <input type="number" name="optionpremium"  onChange={this.handleChange}/>
                    </label>
                    
                </form>
            </div>
        )
    }
}

export default OptionForm