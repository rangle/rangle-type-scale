import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import {
  changeBaseSize, 
  changeWeight,
  changePreviewText
} from './InputFormContainer.actions';

class InputFormContainer extends Component {
  render() {
    const { baseSize, previewText, typeScaleSize, weight, changeBaseSize, changeWeight,
      changePreviewText } = this.props;

    return (
      <div>
        <InputForm 
          baseSize={baseSize}
          previewText={previewText}
          typeScaleSize={typeScaleSize}
          weight={weight}
          changeBaseSize={changeBaseSize}
          changeWeight={changeWeight}
          changePreviewText={changePreviewText}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  previewText: state.previewText,
  typeScaleSize: state.typeScale.value,
  weight: state.weight
});

const mapDispatchToProps = {
  changeBaseSize,
  changeWeight,
  changePreviewText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormContainer);