import { createSelector } from 'reselect';

const fontValues = state => state.fonts;
const headingFontSelected = state => state.headingFontSelected;
const bodyFontSelected = state => state.bodyFontSelected;
const typeScaleValues = state => state.typeScaleValues;
const typeScaleSelected = state => state.typeScaleSelected;

const getFontName = (fontArray, index) => fontArray[index].name;

export const headingFontName = createSelector(fontValues, headingFontSelected, (fonts, headingFontIndex) => getFontName(fonts, headingFontIndex));

export const bodyFontName = createSelector(fontValues, bodyFontSelected, (fonts, bodyFontIndex) => getFontName(fonts, bodyFontIndex));

export const typeScaleValue = createSelector(typeScaleValues, typeScaleSelected, (typeScales, selectedIndex) => typeScales[selectedIndex]);








