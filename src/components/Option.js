import React from 'react';

const Option = ({num, handleChange}) => {
    return (
        <div className="form">
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
                Strike Price:  
                <input type="number" name="strikeprice"  onChange={(event) => {handleChange(event,num)}} placeholder={0}/>
            </label>

            <label>
                Option Premium:  
                <input type="number" name="optionpremium"  onChange={(event) => {handleChange(event,num)}} placeholder={0}/>
            </label>

            <label>
                Contracts:  
                <input type="number" name="contracts"  onChange={(event) => {handleChange(event,num)}} placeholder={0}/>
            </label>

            <button className="remove">X</button>
        </div>
    )
}

export default Option