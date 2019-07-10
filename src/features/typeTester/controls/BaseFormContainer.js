import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseForm from './BaseForm';
import {
  changeBaseSize, 
  changeTheme,
  changeTypeScale,
  toggleRounding
} from '../actions/Controls.actions';
import { typeScaleValue, labelColor, typeColor } from '../../../store/selectors';

class BaseFormContainer extends Component {
  render() {
    const { 
      baseSize, 
      labelColor,
      roundFontSizes,
      themes,
      themeSelected,
      typeColor,
      typeScaleSelected,
      typeScaleSize, 
      typeScaleValues, 
      changeBaseSize, 
      changeTheme,
      changeTypeScale,
      toggleRounding 
    } = this.props;

    return (
      <div>
        <BaseForm 
          baseSize={baseSize}
          labelColor={labelColor}
          roundFontSizes={roundFontSizes}
          themes={themes}
          themeSelected={themeSelected}
          typeColor={typeColor}
          typeScaleSize={typeScaleSize}
          typeScaleValues={typeScaleValues}
          typeScaleSelected={typeScaleSelected}
          changeBaseSize={changeBaseSize}
          changeTheme={changeTheme}
          changeTypeScale={changeTypeScale}
          toggleRounding={toggleRounding}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseSize: state.baseSize,
  labelColor: labelColor(state),
  roundFontSizes: state.roundFontSizes,
  themes: state.themes,
  themeSelected: state.themeSelected,
  typeColor: typeColor(state),
  typeScaleSize: typeScaleValue(state),
  typeScaleSelected: state.typeScaleSelected,
  typeScaleValues: state.typeScaleValues,
});

const mapDispatchToProps = {
  changeBaseSize,
  changeTheme,
  changeTypeScale,
  toggleRounding
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseFormContainer);