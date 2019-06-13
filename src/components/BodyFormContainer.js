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

class BodyFormContainer extends Component {
  render() {
    const {
      bodyFontColor,
      bodyFontSelected,
      bodyWeightSelected,
      fonts,
      lineHeight,
      previewParagraph,
      changeBodyWeight,
      changeBodyFont,
      changeLineHeight,
      changeFontColor,
      changePreviewParagraph
    } = this.props;
    return (
      <BodyForm
        bodyFontSelected={bodyFontSelected}
        bodyWeightSelected={bodyWeightSelected}
        bodyFontColor={bodyFontColor}
        fonts={fonts}
        lineHeight={lineHeight}
        previewParagraph={previewParagraph}
        changeBodyWeight={changeBodyWeight}
        changeBodyFont={changeBodyFont}
        changeLineHeight={changeLineHeight}
        changeFontColor={changeFontColor}
        changePreviewParagraph={changePreviewParagraph}
      />
    );
  }
}

const mapStateToProps = state => ({
  bodyFontColor: state.bodyFontColor,
  bodyFontSelected: state.bodyFontSelected,
  bodyWeightSelected: state.bodyWeightSelected,
  fonts: state.fonts,
  lineHeight: state.lineHeight,
  previewParagraph: state.previewParagraph
}); 

const mapDispatchToProps = {
  changeBodyWeight,
  changeBodyFont,
  changeLineHeight,
  changeFontColor,
  changePreviewParagraph
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyFormContainer);