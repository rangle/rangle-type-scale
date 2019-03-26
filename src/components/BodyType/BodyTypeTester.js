import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const levels = [...Array(6).keys()].map(level => level + 1);

class BodyTypeTester extends Component {
  render() {
    const { 
      backgroundColor,
      baseSize,
      bodyFont,
      bodyFontColor,
      bodyWeight,
      fontFamily, 
      lineHeight,
      previewParagraph, 
      previewHeadline,
      sampleWeight,
      typeScaleSize
    } = this.props;
    const styles = {
      backgroundColor: `${backgroundColor}`,
      color: `${bodyFontColor}`,
      fontFamily: `${bodyFont}`,
    }
    return (
      <div style={styles}>
        {levels.map((level, i, levels) => (
          <div key={i}>
            <Heading 
              baseSize={baseSize}
              fontFamily={fontFamily}
              sampleWeight={sampleWeight}
              level={level}
              multiplier={(levels.length - i) - 1}
              text={previewHeadline}
              typeScaleSize={typeScaleSize} />
            <Paragraph 
              text={previewParagraph}
              lineHeight={lineHeight}
              bodyFont={bodyFont}
              bodyFontColor={bodyFontColor}
              bodyWeight={bodyWeight}
            />  
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  backgroundColor: state.backgroundColor,
  baseSize: state.baseSize,
  bodyFont: state.bodyFont,
  bodyWeight: state.bodyWeight,
  bodyFontColor: state.bodyFontColor,
  fontFamily: state.fontFamily,
  sampleWeight: state.sampleWeight,
  lineHeight: state.lineHeight,
  previewParagraph: state.previewParagraph,
  previewHeadline: state.previewHeadline,
  typeScaleSize: state.typeScaleValues[state.typeScaleSelected].value
});

export default connect(
  mapStateToProps,
)(BodyTypeTester);