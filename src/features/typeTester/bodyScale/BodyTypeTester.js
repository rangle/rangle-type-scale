import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from './Heading';
import Paragraph from './Paragraph';
import { bodyFontName, headingFontName, typeScaleValue, typeColor } from '../../../store/selectors';

const levels = [...Array(6).keys()].map(level => level + 1);

class BodyTypeTester extends Component {
  render() {
    const { 
      baseSize,
      bodyFont,
      bodyLineHeight,
      bodyWeight,
      headingFont,
      headingLineHeight,
      headingWeight,
      previewParagraph, 
      previewHeadline,
      typeColor,
      typeScaleSize
    } = this.props;

    return (
      <div className="body-type-tester">
        {levels.map((level, i, levels) => (
          <div key={i}>
            <Heading 
              baseSize={baseSize}
              typeColor={typeColor}
              fontFamily={headingFont}
              fontWeight={headingWeight}
              level={level}
              lineHeight={headingLineHeight}
              multiplier={(levels.length - i) - 1}
              text={previewHeadline}
              typeScaleSize={typeScaleSize} 
            />
            <Paragraph 
              typeColor={typeColor}
              fontFamily={bodyFont}
              fontWeight={bodyWeight}
              lineHeight={bodyLineHeight}
              text={previewParagraph}
            />  
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  bodyTypeColor: state.bodyTypeColor,
  bodyFont: bodyFontName(state),
  bodyLineHeight: state.bodyLineHeight,
  bodyWeight: state.bodyWeightSelected,
  headingFont: headingFontName(state),
  headingLineHeight: state.headingLineHeight,
  headingWeight: state.headingWeightSelected,
  previewParagraph: state.previewParagraph,
  previewHeadline: state.previewHeadline,
  typeColor: typeColor(state),
  typeScaleSize: typeScaleValue(state)
});

export default connect(
  mapStateToProps,
)(BodyTypeTester);