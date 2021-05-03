import React from 'react';
import CanvChart from './components/CanvChart';
import './App.css'
import OptionForm from './components/OptionForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    let initialOption = {
      name: 1,
      type: "Call",
      position: "Long",
      shareprice: 0,
      strikeprice: 0,
      optionpremium: 0
    };
    this.state = {
      options: [initialOption],
    };
  }

  getOptionData = (options) => {
    this.setState({options: options});
    // console.log(this.state.options);
  }

  render() {
    return(
      <div className="main">
        <h1 className="title">Options Visualizer</h1>
        <CanvChart optionsArray={this.state.options}/>
        <OptionForm updateData={this.getOptionData}/>
        <footer>
          <p>2021 🚀🚀🚀</p>
        </footer>
      </div>
    );
  }
}

export default App