import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeadingForm from './HeadingForm';
import {
  changeHeadlineFont,
  changeWeight,
  changePreviewHeadline,
} from './HeadingForm.actions';

class HeadingFormContainer extends Component {
  render() {
    const { 
      fontFamily,
      fontFamilies,
      previewHeadline, 
      sampleWeight, 
      changeHeadlineFont,
      changeWeight,
      changePreviewHeadline } = this.props;

    return (
      <div>
        <HeadingForm 
          fontFamily={fontFamily}
          fontFamilies={fontFamilies}
          previewHeadline={previewHeadline}
          sampleWeight={sampleWeight}
          changeHeadlineFont={changeHeadlineFont}
          changeWeight={changeWeight}
          changePreviewHeadline={changePreviewHeadline}
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
  sampleWeight: state.sampleWeight
});

const mapDispatchToProps = {
  changeHeadlineFont,
  changeWeight,
  changePreviewHeadline,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadingFormContainer);