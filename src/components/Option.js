import React from 'react';

const Option = ({name, num, handleChange, remove}) => {
    const isValidNum = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()

    return (console.log('num is', num),
        <div className="form">
            <div>
                <label className="optionName">{name}:</label>
                <select  name="position" onChange={(event) => {handleChange(event, num)}}>
                    <option name="long">Long</option>
                    <option name="short">Short</option>
                </select>

                <select name="type" onChange={(event) => {handleChange(event, num)}}>
                    <option name="call">Call</option>
                    <option name="put">Put</option>
                </select>
            </div>

            <label>
                Strike Price:  
                <input type="number"
                    className="textField"
                    name="strikeprice" 
                    onChange={(event) => {handleChange(event, num)}} 
                    placeholder={0}
                    min={0}
                    onKeyDown={isValidNum}
                    />
            </label>

            <label>
                Option Premium:  
                <input type="number"
                    className="textField"
                    name="optionpremium"
                    onChange={(event) => {handleChange(event, num)}}
                    placeholder={0}
                    onKeyDown={isValidNum}
                    />
            </label>

            <label>
                Contracts:  
                <input type="number"
                    className="textField"
                    name="contracts"
                    onChange={(event) => {handleChange(event, num)}}
                    placeholder={0}
                    onKeyDown={isValidNum}
                    />
            </label>

            <button className="remove" onClick={() => {remove(name)}}>X</button>
        </div>
    )
}

export default Option