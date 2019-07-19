import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyForm from './BodyForm';
import {
  changeBodyWeight,
  changeBodyFont,
  changeLineHeight,
  changeTypeColor,
  changePreviewParagraph
} from "../actions/Controls.actions";

class BodyFormContainer extends Component {
  render() {
    const {
      bodyTypeColor,
      bodyFontSelected,
      bodyWeightSelected,
      fonts,
      bodyLineHeight,
      previewParagraph,
      changeBodyWeight,
      changeBodyFont,
      changeLineHeight,
      changeTypeColor,
      changePreviewParagraph
    } = this.props;
    return (
      <BodyForm
        bodyFontSelected={bodyFontSelected}
        bodyWeightSelected={bodyWeightSelected}
        bodyTypeColor={bodyTypeColor}
        fonts={fonts}
        bodyLineHeight={bodyLineHeight}
        previewParagraph={previewParagraph}
        changeBodyWeight={changeBodyWeight}
        changeBodyFont={changeBodyFont}
        changeLineHeight={changeLineHeight}
        changeTypeColor={changeTypeColor}
        changePreviewParagraph={changePreviewParagraph}
      />
    );
  }
}

const mapStateToProps = state => ({
  bodyTypeColor: state.bodyTypeColor,
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
  changeTypeColor,
  changePreviewParagraph
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyFormContainer);