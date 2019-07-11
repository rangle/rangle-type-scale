import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Colors } from './utilities/Colors';
import Sidebar from './features/typeTester/containers/Sidebar';
import Main from './features/typeTester/containers/Main';
import Header from './components/Header';
import SampleList from './features/typeTester/modularScale/SampleList';
import { backgroundColor, labelColor, typeColor } from './store/selectors';


const StyledApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  margin-bottom: 50px;

  header {
    border-bottom: 1px solid transparent;
    margin-bottom: 80px;
  }

  &.dark-mode {
    header {
      border-bottom: 1px solid ${props => props.theme.lightGray};
    }
  }

  .wrapper.body {
    display: grid;
    grid-column-gap: 100px;
    grid-template-columns: 300px 1fr;
  }

  .focus {
    display: flex;
    justify-content: center;
  }
`;

class App extends Component {

  render() {
    const {
      backgroundColor,
      focusMode,
      labelColor,
      themeSelected,
      typeColor
    } = this.props;

  const rangleTypescaleTheme = {
    black: Colors.black,
    darkGray: Colors.darkGray,
    fontFamily: "'Rangle Riforma', Helvetica, Arial",
    lightGray: Colors.lightGray,
    white: Colors.white,
    backgroundColor,
    labelColor,
    typeColor
  };

    return (
      <ThemeProvider theme={rangleTypescaleTheme}>
        <StyledApp className={themeSelected + "-mode"}>
          <>
            <Header />
            {focusMode ? (
              <div className="focus">
                <SampleList />
              </div>
            ) : (
              <div className="wrapper body">
                <Sidebar />
                <Main />
              </div>
            )}
          </>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  backgroundColor: backgroundColor(state),
  focusMode: state.focusMode,
  labelColor: labelColor(state),
  typeColor: typeColor(state),
  themeSelected: state.themeSelected
});

export default connect(
  mapStateToProps,
)(App);