import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import Sidebar from './components/Sidebar';
import SpecimenList from './components/SpecimenList';
import styled from "styled-components";

const theme = {
  black: "#333333",
  lightGray: "#858585",
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
`;


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <SpecimenList />
          </main>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
