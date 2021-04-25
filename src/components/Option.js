import React from 'react';

class Option extends React.Component {

    render() {
        const {num, handleChange} = this.props;
        return (
            <div>
                <form>
                    Option {num}
                    <select  name="position" onChange={(event) => {handleChange(event)}}>
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

export default Option