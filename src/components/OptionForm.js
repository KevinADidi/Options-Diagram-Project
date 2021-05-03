import React, { useState } from 'react';
import Option from './Option';

const OptionForm= ({ addOption }) => {
    const [ optionsArray, setOptionsArray ] = useState([])

    const addOptionForm = () => {
        const newOption = {
            name: optionsArray.length+1,
            type: "Call",
            position: "Long",
            shareprice: 0,
            strikeprice: 0,
            optionpremium: 0
          }
          const newOptionsArray = optionsArray.concat(newOption)
        setOptionsArray(newOptionsArray)
        addOption(newOptionsArray)
    }

    const changeOptionForm = (event, num) => {
        console.log(num,event.target.name, event.target.value)
        let newOptionsArray = optionsArray.concat()
        newOptionsArray[num-1][event.target.name] = event.target.value
        setOptionsArray(newOptionsArray)
        addOption(newOptionsArray)
    }

    if (optionsArray.length === 0) {
        return (
            <div className="noOption" style={{textAlign: 'center'}}>
                <h2>No Options present. Go add one!</h2>
                <div className="addOption">
                    <button onClick={() => {addOptionForm()}}>Add Option</button>
                </div>
            </div>
            
        )
    }

    return (
        <div className="option">
                {optionsArray.map((opt, i) => (
                            <Option key={i} num={opt.name} handleChange={changeOptionForm}/>
                        ))}
                <div className="addOption">
                    <button onClick={() => {addOptionForm()}}>Add Option</button>
                </div>
            </div>
    )
}

export default OptionForm