import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bodyFontName, headingFontName, typeScaleValue, typeColor } from '../../../store/selectors';
import { calculateTypeSize, calculateFontSizePx, calculateFontSizeEms } from '../../../helpers';
import Heading from './Heading';
import Paragraph from './Paragraph';
import SampleItem from '../../../components/SampleItem';

const BodyTypeSample = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  margin: 30px 0;
`;

const levels = [...Array(6).keys()].map(level => level + 1);

class BodyTypeTester extends Component {
  render() {
    const { 
      baseSize,
      baseUnit,
      bodyFont,
      bodyLineHeight,
      bodyWeight,
      focusState,
      headingFont,
      headingLineHeight,
      headingWeight,
      previewParagraph, 
      previewHeadline,
      roundFontSizes,
      typeColor,
      typeScaleSize
    } = this.props;

    return (
      <div className="body-type-tester">
        {levels.map((level, i, levels) => {
          const multiplier = (levels.length - i) - 1;
          const typeScaleValue = Math.pow(typeScaleSize, multiplier);
          const fontSize = calculateTypeSize(baseSize, typeScaleValue);
          const fontSizePx = calculateFontSizePx(fontSize, 2, roundFontSizes);
          const fontSizeEms = calculateFontSizeEms(typeScaleValue, 3, false);
          const marginTop = `${3.5 * multiplier}px`;

          return (
            <SampleItem
              alignLabel="start"
              labelMargin={`${marginTop} 0 0`}
              key={i}
              focusState={focusState} 
              text={baseUnit === "px" ? fontSizePx : fontSizeEms}  
            >
               <Heading
                  fontFamily={headingFont}
                  fontSize={`${fontSize}px`}
                  fontWeight={headingWeight}
                  level={level}
                  lineHeight={headingLineHeight}
                  text={previewHeadline}
                  typeColor={typeColor}
                />
                <Paragraph
                  fontFamily={bodyFont}
                  fontWeight={bodyWeight}
                  lineHeight={bodyLineHeight}
                  text={previewParagraph}
                  typeColor={typeColor}
                />
            </SampleItem>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  baseUnit: state.baseUnit,
  bodyTypeColor: state.bodyTypeColor,
  bodyFont: bodyFontName(state),
  bodyLineHeight: state.bodyLineHeight,
  bodyWeight: state.bodyWeightSelected,
  focusState: state.focusMode,
  headingFont: headingFontName(state),
  headingLineHeight: state.headingLineHeight,
  headingWeight: state.headingWeightSelected,
  previewParagraph: state.previewParagraph,
  previewHeadline: state.previewHeadline,
  roundFontSizes: state.roundFontSizes,
  typeColor: typeColor(state),
  typeScaleSize: typeScaleValue(state)
});

export default connect(
  mapStateToProps,
)(BodyTypeTester);