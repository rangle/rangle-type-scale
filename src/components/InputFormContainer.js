import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import {
  changeBaseSize, 
  changeWeight,
  changePreviewText,
  changeTypeScale
} from './InputFormContainer.actions';

class InputFormContainer extends Component {
  render() {
    const { 
      baseSize, 
      previewText, 
      typeScaleSelected,
      typeScaleSize, 
      typeScaleValues, 
      weight, 
      changeBaseSize, 
      changeWeight,
      changePreviewText, 
      changeTypeScale } = this.props;

    return (
      <div>
        <InputForm 
          baseSize={baseSize}
          previewText={previewText}
          typeScaleSize={typeScaleSize}
          typeScaleValues={typeScaleValues}
          typeScaleSelected={typeScaleSelected}
          weight={weight}
          changeBaseSize={changeBaseSize}
          changeWeight={changeWeight}
          changePreviewText={changePreviewText}
          changeTypeScale={changeTypeScale}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  previewText: state.previewText,
  typeScaleSize: state.typeScale.value,
  typeScaleSelected: state.typeScaleSelected,
  typeScaleValues: state.typeScaleValues,
  weight: state.weight
});

const mapDispatchToProps = {
  changeBaseSize,
  changeWeight,
  changePreviewText,
  changeTypeScale
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormContainer);