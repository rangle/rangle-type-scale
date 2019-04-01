import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import Sidebar from './components/Sidebar';
import styled from "styled-components";
import Main from './components/Main';

const theme = {
  black: "#333333",
  lightGray: "#858585",
}

const StyledApp = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: 350px 1fr;
  margin: 0 30px;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <aside>
            <Sidebar />
          </aside>
          <Main />
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;