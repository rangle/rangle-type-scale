import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';

class InputFormContainer extends Component {
  render() {
    return (
      <div>
        <InputForm></InputForm>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  previewText: state.previewText,
  typeScaleSize: state.typeScale.value
});

export default connect(
  mapStateToProps,
)(InputFormContainer);