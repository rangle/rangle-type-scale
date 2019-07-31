import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Colors } from './utilities/Colors';
import { backgroundColor, labelColor, typeColor } from './store/selectors';
import Header from './components/Header';
import BreakpointUp from './features/typeTester/containers/BreakpointUp';

import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';


const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
  productionPrefix: 'c'
});

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
      <JssProvider generateClassName={ generateClassName }>
        <ThemeProvider theme={rangleTypescaleTheme}>
          <div className={themeSelected + "-mode"}>
            <>
              <Header />
              <BreakpointUp 
                focusMode={focusMode}
                themeSelected={themeSelected}
              />
            </>
          </div>
        </ThemeProvider>
      </JssProvider>
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