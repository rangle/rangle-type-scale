import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseForm from './BaseForm';
import {
  changeBaseSize, 
  changeTypeScale
} from './BaseForm.actions';

class BaseFormContainer extends Component {
  render() {
    const { 
      baseSize, 
      typeScaleSelected,
      typeScaleSize, 
      typeScaleValues, 
      changeBaseSize, 
      changeTypeScale } = this.props;

    return (
      <div>
        <BaseForm 
          baseSize={baseSize}
          typeScaleSize={typeScaleSize}
          typeScaleValues={typeScaleValues}
          typeScaleSelected={typeScaleSelected}
          changeBaseSize={changeBaseSize}
          changeTypeScale={changeTypeScale}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  typeScaleSize: state.typeScale.value,
  typeScaleSelected: state.typeScaleSelected,
  typeScaleValues: state.typeScaleValues,
});

const mapDispatchToProps = {
  changeBaseSize,
  changeTypeScale
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseFormContainer);