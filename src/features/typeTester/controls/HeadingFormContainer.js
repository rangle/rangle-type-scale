import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeadingForm from './HeadingForm';
import {
  changeHeadingFont,
  changeHeadingLineHeight,
  changeHeadingWeight,
  changePreviewHeadline,
} from '../actions/Controls.actions';

class HeadingFormContainer extends Component {
  render() {
    const { 
      fonts,
      headingFontSelected,
      headingLineHeight,
      headingWeightSelected,
      previewHeadline, 
      changeHeadingFont,
      changeHeadingLineHeight,
      changeHeadingWeight,
      changePreviewHeadline
    } = this.props;
    return (
      <div>
        <HeadingForm 
          fonts={fonts}
          headingFontSelected={headingFontSelected}
          headingLineHeight={headingLineHeight}
          headingWeightSelected={headingWeightSelected}
          previewHeadline={previewHeadline}
          changeHeadingFont={changeHeadingFont}
          changeHeadingWeight={changeHeadingWeight}
          changePreviewHeadline={changePreviewHeadline}
          changeHeadingLineHeight={  changeHeadingLineHeight}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  fonts: state.fonts,
  headingFontSelected: state.headingFontSelected,
  headingLineHeight: state.headingLineHeight,
  headingWeightSelected: state.headingWeightSelected,
  previewHeadline: state.previewHeadline,
});

const mapDispatchToProps = {
  changeHeadingFont,
  changeHeadingLineHeight,
  changeHeadingWeight,
  changePreviewHeadline,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadingFormContainer);