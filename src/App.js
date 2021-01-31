import React from 'react';
import CanvChart from './components/CanvChart';
import './App.css'

const App = () => {
  return(
    <div className="main">
      <h1 className="title">Options Visualizer</h1>
      <CanvChart />

      <footer>
        <p>2021 🚀🚀🚀</p>
      </footer>
    </div>
  );
}

export default App