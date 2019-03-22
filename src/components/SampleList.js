import React, { Component } from 'react';
import { connect } from "react-redux";
import Sample from './Sample';
import styled from 'styled-components';

const StyledList = styled.div`
  color: ${props => props.theme.black};
  list-style: none;
  margin: 0;
  padding: 0;
`;

class SampleList extends Component {
  render() {
    const {
      baseSize,
      fontFamily, 
      numberOfSamples,
      previewHeadline,
      typeScaleSize,
      sampleWeight
    } = this.props;
    const samples = [1];
    for (let i = 2; i <= numberOfSamples; i++) {
      samples.unshift(Math.pow(typeScaleSize, i));
      samples.push(Math.pow(typeScaleSize, -i));
    }

    return (
      <StyledList>
        {samples.sort().reverse().map((sample, i) => (
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
      </StyledList>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  fontFamily: state.fontFamily,
  numberOfSamples: state.numberOfSamples,
  previewHeadline: state.previewHeadline,
  typeScaleSize: state.typeScaleValues[state.typeScaleSelected].value,
  sampleWeight: state.sampleWeight
});

export default connect(
  mapStateToProps,
)(SampleList);