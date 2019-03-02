import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedModels } from './actions/selectedModels'
import ModelDetailsContainer from './components/ModelDetailsContainer';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {

  state = { selected: "" }

  updateSelection = (e) => {
    this.setState({
      selected: e.target.value
    })
  }

  addToArray = () => {
    if (this.state.selected !== "") {
      this.props.selectedModels(data[this.state.selected], this.state.selected)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Homework week 3</h1>
        </header>
        <main>
          <select value={this.state.selected} onChange={this.updateSelection}>
            <option value="">-- pick a model --</option>
            {Object.keys(data).map((model) => {
              return <option key={model} value={model}>{`${model} (${data[model].year})`}</option>
            })}
          </select>
          <button onClick={this.addToArray}>Add this model</button>
          <ModelDetailsContainer model={this.props.models} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    models: state.selectedModels
  }
}

export default connect(mapStateToProps, { selectedModels })(App)
