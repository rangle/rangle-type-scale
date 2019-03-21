import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import {
  changeBaseSize, 
  changeFont,
  changeWeight,
  changePreviewText,
  changeTypeScale
} from './InputForm.actions';

class InputFormContainer extends Component {
  render() {
    const { 
      baseSize, 
      fontFamily,
      fontFamilies,
      previewText, 
      typeScaleSelected,
      typeScaleSize, 
      typeScaleValues, 
      weight, 
      changeBaseSize, 
      changeFont,
      changeWeight,
      changePreviewText, 
      changeTypeScale } = this.props;

    return (
      <div>
        <InputForm 
          baseSize={baseSize}
          fontFamily={fontFamily}
          fontFamilies={fontFamilies}
          previewText={previewText}
          typeScaleSize={typeScaleSize}
          typeScaleValues={typeScaleValues}
          typeScaleSelected={typeScaleSelected}
          weight={weight}
          changeBaseSize={changeBaseSize}
          changeFont={changeFont}
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
  fontFamily: state.fontFamily,
  fontFamilies: state.fontFamilies,
  previewText: state.previewText,
  typeScaleSize: state.typeScale.value,
  typeScaleSelected: state.typeScaleSelected,
  typeScaleValues: state.typeScaleValues,
  weight: state.weight
});

const mapDispatchToProps = {
  changeBaseSize,
  changeFont,
  changeWeight,
  changePreviewText,
  changeTypeScale
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormContainer);