import React, { Component } from 'react';
import { connect } from "react-redux";
import Specimen from './Specimen';

class SpecimenList extends Component {
  render() {
    const { baseSize, numberOfSpecimens, previewText, typeScaleSize } = this.props;
    const specimens = [];
    for (let i = 1; i <= numberOfSpecimens; i++) {
      if (i === 1) {
        specimens.push(i);
      } else {
        specimens.push(Math.pow(typeScaleSize, i));
      }
    }

    return (
      <ul>
        {specimens.map((specimen, i) => (
        <Specimen
          baseSize={baseSize}
          previewText={previewText}
          typeScaleSize={typeScaleSize}
          typeScaleValue={specimen}
          key={`specimen-${i}`}
        />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  numberOfSpecimens: state.numberOfSpecimens,
  previewText: state.previewText,
  typeScaleSize: state.typeScale.value,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpecimenList);