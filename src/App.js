import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  &.dark-mode {
    background-color: ${props => props.theme.black};
    color: white;
  }

  &.light-mode {
    background-color: white;
    color: ${props => props.theme.black};
  }

  .wrapper.body {
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: 350px 1fr;
  }
`;

class App extends Component {
  render() {
    const {
      lightMode
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <StyledApp className={lightMode ? "light-mode" : "dark-mode"}>
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

const mapStateToProps = state => ({
  lightMode: state.lightMode
});

export default connect(
  mapStateToProps,
)(App);