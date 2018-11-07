import React, { Component } from 'react';
import './App.css';
import ListView from './components/listView'
import DetailView from './components/detailView'
let frameworks = [{
  name: 'React',
  description: 'A library'
},
{
  name: 'Angular',
  description: 'A framework'
}, {
  name: 'VUE',
  description: 'A framework'
}, {
  name: 'AngularJS',
  description: 'A framework'
}, {
  name: 'Ember',
  description: 'A framework'
}, {
  name: 'jQuery',
  description: 'hmmm'
}]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: frameworks[0]
    }
    this.FrameworkList = ListView()
  }
  updateSelectedItem = (id) => {
    //this.state.selectedItem = frameworks[id]
    this.setState({ selectedItem: frameworks[id] })
  }
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-row">
          <div className="w-25">
            <this.FrameworkList frameworks={frameworks} updateSelectedItem={this.updateSelectedItem} />
          </div>
          <div className="w-75">
            <DetailView {...this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
