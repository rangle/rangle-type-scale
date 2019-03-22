import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyForm from './BodyForm';
import {
  changeBodyWeight,
  changeBodyFont,
  changeLineHeight,
  changeBackgroundColor,
  changeFontColor,
  changePreviewParagraph
} from "./BodyForm.actions";
import { truncate } from 'fs';

class BodyFormContainer extends Component {
  render() {
    const {
      backgroundColor,
      bodyWeight,
      bodyFontColor,
      bodyFont,
      fontFamilies,
      lineHeight,
      previewParagraph,
      changeBodyWeight,
      changeBodyFont,
      changeLineHeight,
      changeBackgroundColor,
      changeFontColor,
      changePreviewParagraph
    } = this.props;
    return (
      <BodyForm
        backgroundColor={backgroundColor}
        bodyFont={bodyFont}
        bodyWeight={bodyWeight}
        bodyFontColor={bodyFontColor}
        fontFamilies={fontFamilies}
        lineHeight={lineHeight}
        previewParagraph={previewParagraph}
        changeBodyWeight={changeBodyWeight}
        changeBodyFont={changeBodyFont}
        changeLineHeight={changeLineHeight}
        changeBackgroundColor={changeBackgroundColor}
        changeFontColor={changeFontColor}
        changePreviewParagraph={changePreviewParagraph}
      />
    );
  }
}

const mapStateToProps = state => ({
  backgroundColor: state.backgroundColor,
  bodyWeight: state.bodyWeight,
  bodyFontColor: state.bodyFontColor,
  bodyFont: state.bodyFont,
  fontFamilies: state.fontFamilies,
  lineHeight: state.lineHeight,
  previewParagraph: state.previewParagraph
}); 

const mapDispatchToProps = {
  changeBodyWeight,
  changeBodyFont,
  changeLineHeight,
  changeBackgroundColor,
  changeFontColor,
  changePreviewParagraph
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyFormContainer);