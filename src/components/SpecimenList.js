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
    const { baseSize, numberOfSpecimens, previewText, typeScaleSize } = this.props;
    const specimens = [1];
    for (let i = 2; i <= numberOfSpecimens; i++) {
        specimens.unshift(Math.pow(typeScaleSize, i));
        specimens.push(Math.pow(typeScaleSize, -i));
    }

    return (
      <StyledList>
        {specimens.sort().reverse().map((specimen, i) => (
          <li>
            <Specimen
              baseSize={baseSize}
              previewText={previewText}
              typeScaleSize={typeScaleSize}
              typeScaleValue={specimen}
              key={`specimen-${i}`}
            />
          </li>
        ))}
      </StyledList>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  numberOfSpecimens: state.numberOfSpecimens,
  previewText: state.previewText,
  typeScaleSize: state.typeScale.value,
});

export default connect(
  mapStateToProps,
)(SpecimenList);