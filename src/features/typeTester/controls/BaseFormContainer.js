import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseForm from './BaseForm';
import {
  changeBaseSize, 
  changeTypeScale,
  toggleRounding
} from '../actions/Controls.actions';
import { typeScaleValue } from '../../../store/selectors';

class BaseFormContainer extends Component {
  render() {
    const { 
      baseSize, 
      roundFontSizes,
      typeScaleSelected,
      typeScaleSize, 
      typeScaleValues, 
      changeBaseSize, 
      changeTypeScale,
      toggleRounding 
    } = this.props;

    return (
      <div>
        <BaseForm 
          baseSize={baseSize}
          roundFontSizes={roundFontSizes}
          typeScaleSize={typeScaleSize}
          typeScaleValues={typeScaleValues}
          typeScaleSelected={typeScaleSelected}
          changeBaseSize={changeBaseSize}
          changeTypeScale={changeTypeScale}
          toggleRounding={toggleRounding}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  roundFontSizes: state.roundFontSizes,
  typeScaleSize: typeScaleValue(state),
  typeScaleSelected: state.typeScaleSelected,
  typeScaleValues: state.typeScaleValues,
});

const mapDispatchToProps = {
  changeBaseSize,
  changeTypeScale,
  toggleRounding
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseFormContainer);