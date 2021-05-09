import React, { useState } from 'react';
import CanvChart from './components/CanvChart';
import './App.css'
import OptionForm from './components/OptionForm';

const App = () => {
  const [ options, setOptions ] = useState([])

  const updateOption = (optionsArray) => {
    setOptions(optionsArray)
    console.log('from App', optionsArray)
  }

  return(
    <div className="main">
      <h1 className="title">Options Visualizer</h1>
      <CanvChart optionsArray={options} className="chart"/>
      <OptionForm changeOptions={updateOption}/>
      <footer>
        <p>2021 🚀🚀🚀</p>
      </footer>
    </div>
  );
}

export default App