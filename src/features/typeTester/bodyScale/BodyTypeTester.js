import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Heading from './Heading';
import Paragraph from './Paragraph';
import { bodyFontName, headingFontName, typeScaleValue, typeColor } from '../../../store/selectors';
import UnitLabel from '../../../components/UnitLabel';

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

          const styles = {
            marginTop: `${3.5 * multiplier}px`
          }

          return (
            <BodyTypeSample key={i}>
              <div className="label-container" style={styles}>
                <UnitLabel
                  baseSize={baseSize}
                  baseUnit={baseUnit}
                  roundFontSizes={roundFontSizes}
                  typeScaleValue={typeScaleValue}
                />
              </div>
              <div>
                <Heading
                  baseSize={baseSize}
                  typeColor={typeColor}
                  fontFamily={headingFont}
                  fontWeight={headingWeight}
                  level={level}
                  lineHeight={headingLineHeight}
                  multiplier={multiplier}
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
            </BodyTypeSample>
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