import React from 'react';
import CanvChart from './components/CanvChart';
import './App.css'
import OptionForm from './components/OptionForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: []
    }
  }

  getOptionData = (options) => {
    this.setState({options: options});
    console.log(this.state.options);
  }

  render() {
    return(
      <div className="main">
        <h1 className="title">Options Visualizer</h1>
        <CanvChart />
        <OptionForm updateData={this.getOptionData}/>
        <footer>
          <p>2021 🚀🚀🚀</p>
        </footer>
      </div>
    );
  }
}

export default App