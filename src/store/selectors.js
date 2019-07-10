import { createSelector } from 'reselect';

const fontValues = state => state.fonts;
const headingFontSelected = state => state.headingFontSelected;
const bodyFontSelected = state => state.bodyFontSelected;
const typeScaleValues = state => state.typeScaleValues;
const typeScaleSelected = state => state.typeScaleSelected;
const themes = state => state.themes;
const themeSelected = state => state.themeSelected;

const getFontName = (fontArray, index) => fontArray[index].name;

const getTypeScaleValue = (scaleArray, index) => scaleArray[index].value; 

export const headingFontName = createSelector(fontValues, headingFontSelected, (fonts, headingFontIndex) => getFontName(fonts, headingFontIndex));

export const bodyFontName = createSelector(fontValues, bodyFontSelected, (fonts, bodyFontIndex) => getFontName(fonts, bodyFontIndex));

export const typeScaleValue = createSelector(typeScaleValues, typeScaleSelected, (typeScales, selectedIndex) => getTypeScaleValue(typeScales, selectedIndex));

export const theme = createSelector(themes, themeSelected, (themeValues, activeTheme) => themeValues.find(theme => theme.themeName === activeTheme));

export const typeColor = createSelector(theme, (theme => theme.themeColors.type));

export const labelColor = createSelector(theme, (theme => theme.themeColors.labels));

export const backgroundColor = createSelector(theme, (theme => theme.themeColors.background));






