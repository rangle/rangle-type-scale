import React, { Component } from 'react';
import { connect } from "react-redux";
import Specimen from './Specimen';
import styled from 'styled-components';

const StyledList = styled.div`
  color: ${props => props.theme.black};
  list-style: none;
  margin: 0;
  padding: 0;
`;

class SpecimenList extends Component {
  render() {
    const {
      baseSize,
      fontFamily, 
      numberOfSpecimens,
      previewText,
      typeScaleSize,
      weight
    } = this.props;
    const specimens = [1];
    for (let i = 2; i <= numberOfSpecimens; i++) {
      specimens.unshift(Math.pow(typeScaleSize, i));
      specimens.push(Math.pow(typeScaleSize, -i));
    }

    return (
      <StyledList>
        {specimens.sort().reverse().map((specimen, i) => (
          <li key={`specimen-${i}`}>
            <Specimen
              baseSize={baseSize}
              fontFamily={fontFamily}
              previewText={previewText}
              typeScaleSize={typeScaleSize}
              typeScaleValue={specimen}
              weight={weight}
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
  numberOfSpecimens: state.numberOfSpecimens,
  previewText: state.previewText,
  typeScaleSize: state.typeScaleValues[state.typeScaleSelected].value,
  weight: state.weight
});

export default connect(
  mapStateToProps,
)(SpecimenList);