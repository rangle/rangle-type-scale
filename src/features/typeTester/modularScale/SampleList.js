import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { addLargeSample, addSmallSample, removeLargeSample, removeSmallSample } from '../actions/Controls.actions';
import { headingFontName, typeScaleValue, typeColor } from '../../../store/selectors';
import Sample from './Sample';
import ScaleControl from './ScaleControl';
 
const StyledList = styled.div`
  border-bottom: 1px solid #D8D8D8;
  color: ${props => props.theme.black};
  padding: 0 0 30px;

  .sample-container {
    margin: 30px 0;
  }
`;

class SampleList extends Component {
  constructor(props) {
    super(props);
      this.state = {
      sampleList: []
    }  
  }

  componentDidMount() {
    this.generateSamples();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.largeSamples !== prevProps.largeSamples) || 
        (this.props.smallSamples !== prevProps.smallSamples) ||
        (this.props.typeScaleSize !== prevProps.typeScaleSize)
        ) 
        { this.generateSamples(); }
  }

  generateSamples() {
    const { largeSamples, smallSamples, typeScaleSize } = this.props;
    const newSampleList = [1];

    for (let i = 1; i <= largeSamples; i++) {
      newSampleList.unshift(Math.pow(typeScaleSize, i));
    }
    for (let i = 1; i <= smallSamples; i++) {
      newSampleList.push(Math.pow(typeScaleSize, -i));
    }
    
    this.setState({
      sampleList: newSampleList
    })
  }

  render() {
    const {
      addLargeSample,
      addSmallSample,
      baseSize,
      baseUnit,
      fontWeight,
      fontFamily,
      previewHeadline,
      lineHeight,
      removeLargeSample,
      removeSmallSample,
      roundFontSizes,
      typeColor
    } = this.props;
    const { sampleList } = this.state;

    return (
        <StyledList>
          <ScaleControl 
            incrementLabel="Add a large sample"
            incrementCounter={addLargeSample}
            decrementLabel="Remove a large sample"
            decrementCounter={removeLargeSample}
        />
        <div className="sample-container">
          {sampleList
            .map((sample, i) => (
              <div key={`sample-${i}`}>
                <Sample
                  baseSize={baseSize}
                  baseUnit={baseUnit}
                  typeColor={typeColor}
                  fontFamily={fontFamily}
                  fontWeight={fontWeight}
                  previewHeadline={previewHeadline}
                  lineHeight={lineHeight}
                  roundFontSizes={roundFontSizes}
                  typeScaleValue={sample}
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
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  baseUnit: state.baseUnit,
  fontFamily: headingFontName(state),
  fontWeight: state.headingWeightSelected,
  largeSamples: state.largeSamples,
  lineHeight: state.headingLineHeight,
  previewHeadline: state.previewHeadline,
  roundFontSizes: state.roundFontSizes,
  smallSamples: state.smallSamples,
  typeColor: typeColor(state),
  typeScaleSize: typeScaleValue(state),
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