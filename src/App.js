import React from 'react';
import CanvChart from './components/CanvChart';
import './App.css'
import OptionForm from './components/OptionForm';

class App extends React.Component {

  retriveForm = (formData) => {
    console.log(formData);
  }

  render() {
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
}

export default App