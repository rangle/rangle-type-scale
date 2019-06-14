import React, { Component } from 'react';
import { connect } from "react-redux";
import Sample from './Sample';
import styled from 'styled-components';
import { addLargeSample, addSmallSample, removeLargeSample, removeSmallSample } from './BaseForm.actions';
import ScaleControl from './ScaleControl'
 
const StyledList = styled.div`
  color: ${props => props.theme.black};

  .sample-container {
    margin: 30px 0;
  }
`;

class SampleList extends Component {
  render() {
    const {
      addLargeSample,
      addSmallSample,
      baseSize,
      baseUnit,
      fontFamily,
      fonts,
      headingFontSelected,
      headingWeightSelected,
      headingLineHeight,
      largeSamples,
      smallSamples,
      previewHeadline,
      removeLargeSample,
      removeSmallSample,
      roundFontSizes,
      typeScaleSize,
      sampleWeight
    } = this.props;
    const samples = [1];
    for (let i = 1; i <= largeSamples; i++) {
      samples.unshift(Math.pow(typeScaleSize, i));
    }
    for (let i = 1; i <= smallSamples; i++) {
      samples.push(Math.pow(typeScaleSize, -i));
    }

    return (
      <div>
        <StyledList>
          <ScaleControl 
            incrementLabel="Add a large sample"
            incrementCounter={addLargeSample}
            decrementLabel="Remove a large sample"
            decrementCounter={removeLargeSample}
        />
        <div className="sample-container">
          {samples
            .map((sample, i) => (
              <div key={`sample-${i}`}>
                <Sample
                  baseSize={baseSize}
                  baseUnit={baseUnit}
                  fontFamily={fontFamily}
                  fonts={fonts}
                  headingFontSelected={headingFontSelected}
                  headingWeightSelected={headingWeightSelected}
                  headingLineHeight={headingLineHeight}
                  previewHeadline={previewHeadline}
                  roundFontSizes={roundFontSizes}
                  typeScaleSize={typeScaleSize}
                  typeScaleValue={sample}
                  sampleWeight={sampleWeight}
                />
              </div>
            ))}
        </div>
        <ScaleControl
          incrementLabel="Add a small sample"
          incrementCounter={addSmallSample}
          decrementLabel="Remove a small sample"
          decrementCounter={removeSmallSample}
        />
        </StyledList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  baseUnit: state.baseUnit,
  fonts: state.fonts,
  headingFontSelected: state.headingFontSelected,
  headingWeightSelected: state.headingWeightSelected,
  headingLineHeight: state.headingLineHeight,
  fontFamily: state.fontFamily,
  largeSamples: state.largeSamples,
  smallSamples: state.smallSamples,
  previewHeadline: state.previewHeadline,
  roundFontSizes: state.roundFontSizes,
  typeScaleSize: state.typeScaleValues[state.typeScaleSelected].value,
  sampleWeight: state.sampleWeight
});

const mapDispatchToProps = {
  addLargeSample,
  addSmallSample,
  removeLargeSample,
  removeSmallSample,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleList);