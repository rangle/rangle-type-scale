import React, { Component } from 'react';
import { connect } from 'react-redux';
import SampleList from "./SampleList";
import BodyTypeTester from "./BodyTypeTester";

class Main extends Component {
  render() {
    const {
      backgroundColor
    } = this.props;

    const styles = {
      backgroundColor: `${backgroundColor}`
    } 
    return (
      <main style={styles}>
        <SampleList />
        <BodyTypeTester />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  backgroundColor: state.backgroundColor
});

export default connect(
  mapStateToProps,
)(Main);