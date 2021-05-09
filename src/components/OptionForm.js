import React, { useState } from 'react';
import Option from './Option';

const OptionForm = ({ changeOptions }) => {
    const [ optionsArray, setOptionsArray ] = useState([])
    const [ optionName, setOptionsName ] = useState('')

    const addOptionForm = (event) => {
        event.preventDefault()
        if (optionName === '' || optionsArray.find((x) => x.name === optionName)) {
            alert('Enter a name or name already exists')
            return
        }
        
        const newOption = {
            name: optionName,
            type: "Call",
            position: "Long",
            strikeprice: "0",
            optionpremium: "0",
            contracts: "0"
          }
        const newOptionsArray = optionsArray.concat(newOption)
        setOptionsArray(newOptionsArray)
        changeOptions(newOptionsArray)
    }

    const removeOptionForm = (name) => {
        console.log('remove', name, optionsArray)
        const newOptionsArray = optionsArray.filter(x => x.name !== name)
        setOptionsArray(newOptionsArray)
        changeOptions(newOptionsArray)
    }

    const changeOptionForm = (event, num) => {
        console.log(num,event.target.name, event.target.value)
        let newOptionsArray = optionsArray.concat()
        newOptionsArray[num][event.target.name] = event.target.value
        setOptionsArray(newOptionsArray)
        changeOptions(newOptionsArray)
    }

    const handleOptionChange = (event) => {
        setOptionsName(event.target.value)
    }

    if (optionsArray.length === 0) {
        return (
            <div className="noOption" style={{textAlign: 'center'}}>
                <h2>No Options present. Go add one!</h2>
                <form className="addOption" onSubmit={addOptionForm}>
                    <input className="inputOptionName" type="text" onChange={(event) => {handleOptionChange(event)}}/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }

    return (
        <div className="option">
                {optionsArray.map((opt, i) => (
                            <Option key={i} name={opt.name} num={i} handleChange={changeOptionForm} remove={removeOptionForm}/>
                        ))}
                <form className="addOption" onSubmit={addOptionForm}>
                    <input className="inputOptionName" type="text" onChange={(event) => {handleOptionChange(event)}}/>
                    <button>Add Option</button>
                </form>
        </div>
    )
}

export default OptionForm