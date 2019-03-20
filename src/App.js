import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SpecimenList from './components/SpecimenList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Type scale
          </p>
          <Sidebar></Sidebar>
          <SpecimenList></SpecimenList>
        </header>
      </div>
    );
  }
}

export default App;
