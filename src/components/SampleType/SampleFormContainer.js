import React, { Component } from 'react';
import { connect } from 'react-redux';
import SampleForm from './SampleForm';
import {
  changeBaseSize, 
  changeHeadlineFont,
  changeWeight,
  changePreviewHeadline,
  changeTypeScale
} from './SampleForm.actions';

class SampleFormContainer extends Component {
  render() {
    const { 
      baseSize, 
      fontFamily,
      fontFamilies,
      previewHeadline, 
      typeScaleSelected,
      typeScaleSize, 
      typeScaleValues, 
      sampleWeight, 
      changeBaseSize, 
      changeHeadlineFont,
      changeWeight,
      changePreviewHeadline, 
      changeTypeScale } = this.props;

    return (
      <div>
        <SampleForm 
          baseSize={baseSize}
          fontFamily={fontFamily}
          fontFamilies={fontFamilies}
          previewHeadline={previewHeadline}
          typeScaleSize={typeScaleSize}
          typeScaleValues={typeScaleValues}
          typeScaleSelected={typeScaleSelected}
          sampleWeight={sampleWeight}
          changeBaseSize={changeBaseSize}
          changeHeadlineFont={changeHeadlineFont}
          changeWeight={changeWeight}
          changePreviewHeadline={changePreviewHeadline}
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
  previewHeadline: state.previewHeadline,
  typeScaleSize: state.typeScale.value,
  typeScaleSelected: state.typeScaleSelected,
  typeScaleValues: state.typeScaleValues,
  sampleWeight: state.sampleWeight
});

const mapDispatchToProps = {
  changeBaseSize,
  changeHeadlineFont,
  changeWeight,
  changePreviewHeadline,
  changeTypeScale
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleFormContainer);