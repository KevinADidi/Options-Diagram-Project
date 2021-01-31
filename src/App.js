import React from 'react';
import CanvChart from './components/CanvChart';
import './App.css'
import OptionForm from './components/OptionForm';

const App = () => {
  return(
    <div className="main">
      <h1 className="title">Options Visualizer</h1>
      <CanvChart />
      <OptionForm/>
      <footer>
        <p>2021 🚀🚀🚀</p>
      </footer>
    </div>
  );
}

export default App