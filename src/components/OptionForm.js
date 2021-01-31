import React from 'react';

class OptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'initialize the form',
        };
    }

    handleSubmit() {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Number of Options:  
                    <input type="number" name="numOfOptions"/>
                </label>
                <br/>
                <label>Option 1:</label>
                <select>
                    <option value="call">Call</option>
                    <option value="put">Put</option>
                </select>

                <select>
                    <option value="long">Long</option>
                    <option value="short">Short</option>
                </select>

                <label>
                    Share Price:  
                    <input type="number" name="shareprice"/>
                </label>

                <label>
                    Strike Price:  
                    <input type="number" name="strikeprice"/>
                </label>

                <label>
                    Option Premium:  
                    <input type="number" name="optionpremium"/>
                </label>
                
            </form>
        )
    }
}

export default OptionForm