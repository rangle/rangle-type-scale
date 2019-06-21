import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from './Heading';
import Paragraph from './Paragraph';

const levels = [...Array(6).keys()].map(level => level + 1);

class BodyTypeTester extends Component {
  render() {
    const { 
      baseSize,
      bodyFontColor,
      bodyFontSelected,
      bodyLineHeight,
      bodyWeightSelected,
      fonts,
      headingFontSelected,
      headingWeightSelected,
      previewParagraph, 
      previewHeadline,
      typeScaleSize
    } = this.props;
    const bodyFontValue = `${fonts[bodyFontSelected].name}`;
    const headingFontValue = `${fonts[headingFontSelected].name}`;

    return (
      <div>
        {levels.map((level, i, levels) => (
          <div key={i}>
            <Heading 
              baseSize={baseSize}
              fontFamily={headingFontValue}
              headingWeightSelected={headingWeightSelected}
              level={level}
              multiplier={(levels.length - i) - 1}
              text={previewHeadline}
              typeScaleSize={typeScaleSize} 
            />
            <Paragraph 
              text={previewParagraph}
              bodyLineHeight={bodyLineHeight}
              bodyFont={bodyFontValue}
              bodyFontColor={bodyFontColor}
              bodyWeightSelected={bodyWeightSelected}
            />  
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  bodyFont: state.bodyFont,
  bodyFontColor: state.bodyFontColor,
  bodyFontSelected: state.bodyFontSelected,
  bodyWeightSelected: state.bodyWeightSelected,
  fontFamily: state.fonts[state.bodyFontSelected].name,
  fonts: state.fonts,
  headingFontSelected: state.headingFontSelected,
  headingWeightSelected: state.headingWeightSelected,
  bodyLineHeight: state.bodyLineHeight,
  previewParagraph: state.previewParagraph,
  previewHeadline: state.previewHeadline,
  typeScaleSize: state.typeScaleValues[state.typeScaleSelected].value
});

export default connect(
  mapStateToProps,
)(BodyTypeTester);