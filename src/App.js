import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import MediaQuery from 'react-responsive';
import GridLayout from './components/GridLayout';
import StackedLayout from './components/StackedLayout';

const theme = {
  black: "#333333",
  lightGray: "#858585",
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MediaQuery minDeviceWidth={700}>
          {(matches) => {
            if (matches) {
              return (
                <GridLayout />
              )
            } else {
              return (
                <StackedLayout />
              );
            }
          }}
        </MediaQuery>
      </ThemeProvider>
    );
  }
}

export default App;
