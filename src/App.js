import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Header from './components/Header';

const theme = {
  black: "#262626",
  lightGray: "#858585",
}

const StyledApp = styled.div`
  header {
    margin-bottom: 80px;
  }

  .wrapper.body {
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: 350px 1fr;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <>
          <Header />
          <div className="wrapper body">
            <Sidebar />
            <Main />
          </div>
          </>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
