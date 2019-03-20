import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import Sidebar from './components/Sidebar';
import SpecimenList from './components/SpecimenList';

const theme = {
  black: "#333333",
  lightGray: "#858585",
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <aside>
            <Sidebar></Sidebar>
          </aside>
          <main>
            <SpecimenList></SpecimenList>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
