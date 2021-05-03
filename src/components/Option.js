import React from 'react';

const Option = ({num, handleChange}) => {
    return (
        <div>
            <form className="form">
                <div>
                    Option {num}:
                    <select  name="position" onChange={(event) => {handleChange(event,num)}}>
                        <option name="long">Long</option>
                        <option name="short">Short</option>
                    </select>

                    <select name="type" onChange={(event) => {handleChange(event,num)}}>
                        <option name="call">Call</option>
                        <option name="put">Put</option>
                    </select>
                </div>

                <label>
                    Share Price:  
                    <input type="number" name="shareprice"  onChange={(event) => {handleChange(event,num)}}/>
                </label>

                <label>
                    Strike Price:  
                    <input type="number" name="strikeprice"  onChange={(event) => {handleChange(event,num)}}/>
                </label>

                <label>
                    Option Premium:  
                    <input type="number" name="optionpremium"  onChange={(event) => {handleChange(event,num)}}/>
                </label>
                <button className="remove">
                    X
                </button>
            </form>
        </div>
    )
}

export default Option