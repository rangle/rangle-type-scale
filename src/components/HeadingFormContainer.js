import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeadingForm from './HeadingForm';
import {
  changeHeadingFont,
  changeHeadingWeight,
  changePreviewHeadline,
} from './HeadingForm.actions';

class HeadingFormContainer extends Component {
  render() {
    const { 
      fontFamily,
      fontFamilies,
      fonts,
      headingFontSelected,
      headingWeightSelected,
      previewHeadline, 
      changeHeadingFont,
      changeHeadingWeight,
      changePreviewHeadline } = this.props;

    return (
      <div>
        <HeadingForm 
          fontFamily={fontFamily}
          fontFamilies={fontFamilies}
          fonts={fonts}
          headingFontSelected={headingFontSelected}
          headingWeightSelected={headingWeightSelected}
          previewHeadline={previewHeadline}
          changeHeadingFont={changeHeadingFont}
          changeHeadingWeight={changeHeadingWeight}
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
  fonts: state.fonts,
  headingFontSelected: state.headingFontSelected,
  headingWeightSelected: state.headingWeightSelected,
  previewHeadline: state.previewHeadline,
});

const mapDispatchToProps = {
  changeHeadingFont,
  changeHeadingWeight,
  changePreviewHeadline,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadingFormContainer);