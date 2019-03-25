import React, { Component } from 'react';
import { connect } from "react-redux";
import Sample from './Sample';
import styled from 'styled-components';
import { addLargeSample, addSmallSample } from './SampleForm.actions';
import { AddCircle } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
 
const StyledList = styled.div`
  color: ${props => props.theme.black};
  list-style: none;
  margin: 0;
  padding: 0;

  .icon-button {
    margin-left: 150px;
  }
`;

class SampleList extends Component {
  render() {
    const {
      addLargeSample,
      addSmallSample,
      baseSize,
      fontFamily,
      largeSamples,
      smallSamples,
      previewHeadline,
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
        <IconButton aria-label="Add a large sample" onClick={addLargeSample} className="icon-button">
          <AddCircle />
        </IconButton>
          {samples
            .sort()
            .reverse()
            .map((sample, i) => (
              <li key={`sample-${i}`}>
                <Sample
                  baseSize={baseSize}
                  fontFamily={fontFamily}
                  previewHeadline={previewHeadline}
                  typeScaleSize={typeScaleSize}
                  typeScaleValue={sample}
                  sampleWeight={sampleWeight}
                />
              </li>
            ))}
          <IconButton aria-label="Add a small sample" onClick={addSmallSample} className="icon-button">
            <AddCircle />
          </IconButton>
        </StyledList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  fontFamily: state.fontFamily,
  numberOfSamples: state.numberOfSamples,
  largeSamples: state.largeSamples,
  smallSamples: state.smallSamples,
  previewHeadline: state.previewHeadline,
  typeScaleSize: state.typeScaleValues[state.typeScaleSelected].value,
  sampleWeight: state.sampleWeight
});

const mapDispatchToProps = {
  addLargeSample,
  addSmallSample
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleList);