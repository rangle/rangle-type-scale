import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseForm from './BaseForm';
import {
  changeBaseSize, 
  changeTheme,
  changeTypeScale,
  toggleRounding,
  toggleUnits
} from '../actions/Controls.actions';
import { typeScaleValue, labelColor, typeColor } from '../../../store/selectors';

class BaseFormContainer extends Component {
  render() {
    const { 
      baseSize, 
      baseUnit,
      labelColor,
      roundFontSizes,
      themes,
      themeSelected,
      typeColor,
      typeScaleSelected,
      typeScaleSize, 
      typeScaleValues, 
      typeUnits,
      changeBaseSize, 
      changeTheme,
      changeTypeScale,
      toggleRounding,
      toggleUnits
    } = this.props;

    return (
      <div>
        <BaseForm 
          baseSize={baseSize}
          baseUnit={baseUnit}
          labelColor={labelColor}
          roundFontSizes={roundFontSizes}
          themes={themes}
          themeSelected={themeSelected}
          typeColor={typeColor}
          typeScaleSize={typeScaleSize}
          typeScaleValues={typeScaleValues}
          typeScaleSelected={typeScaleSelected}
          typeUnits={typeUnits}
          changeBaseSize={changeBaseSize}
          changeTheme={changeTheme}
          changeTypeScale={changeTypeScale}
          toggleRounding={toggleRounding}
          toggleUnits={toggleUnits}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  baseUnit: state.baseUnit,
  labelColor: labelColor(state),
  roundFontSizes: state.roundFontSizes,
  themes: state.themes,
  themeSelected: state.themeSelected,
  typeColor: typeColor(state),
  typeScaleSize: typeScaleValue(state),
  typeScaleSelected: state.typeScaleSelected,
  typeScaleValues: state.typeScaleValues,
  typeUnits: state.typeUnits
});

const mapDispatchToProps = {
  changeBaseSize,
  changeTheme,
  changeTypeScale,
  toggleRounding,
  toggleUnits
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseFormContainer);