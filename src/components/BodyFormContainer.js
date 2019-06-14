import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyForm from './BodyForm';
import {
  changeBodyWeight,
  changeBodyFont,
  changeLineHeight,
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
      bodyLineHeight,
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
        bodyLineHeight={bodyLineHeight}
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
  bodyLineHeight: state.bodyLineHeight,
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