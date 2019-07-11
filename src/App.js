import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Colors } from './utilities/Colors';
import Sidebar from './features/typeTester/containers/Sidebar';
import Main from './features/typeTester/containers/Main';
import Header from './components/Header';
import { backgroundColor, labelColor, typeColor } from './store/selectors';


const StyledApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};

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
`;

class App extends Component {

  render() {
    const {
      backgroundColor,
      labelColor,
      themeSelected,
      typeColor
    } = this.props;
  const currentTheme = {
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
      <ThemeProvider theme={currentTheme}>
        <StyledApp className={themeSelected + "-mode"}>
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
  backgroundColor: backgroundColor(state),
  labelColor: labelColor(state),
  typeColor: typeColor(state),
  themeSelected: state.themeSelected
});

export default connect(
  mapStateToProps,
)(App);