
import { TYPESCALE_ACTIONS } from '../../../reducers/index';

export const addLargeSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.ADD_LARGE_SAMPLE,
  payload: quantity
});

export const addSmallSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.ADD_SMALL_SAMPLE,
  payload: quantity
});

export const changeBaseSize = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BASE_SIZE,
  payload: e.target.value
});    

export const changeBodyWeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BODY_WEIGHT,
  payload: e.target.value
});

export const changeBodyFont = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BODY_FONT,
  payload: e.target.value
});

export const changeHeadingFont = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_HEADING_FONT,
  payload: e.target.value
});

export const changeHeadingLineHeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_HEADING_LINE_HEIGHT,
  payload: e.target.value
});

export const changeHeadingWeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_HEADING_WEIGHT,
  payload: e.target.value
});

export const changeLineHeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_LINE_HEIGHT,
  payload: e.target.value
});

export const changeBackgroundColor = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BACKGROUND_COLOR,
  payload: e
});

export const changeTypeColor = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_FONT_COLOR,
  payload: e
});

export const changePreviewHeadline = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_PREVIEW_HEADLINE,
  payload: e.target.value
});

export const changePreviewParagraph = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_PREVIEW_PARAGRAPH,
  payload: e.target.value
});

export const changeTheme = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_THEME,
  payload: e.target.value
});

export const changeTypeScale = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_TYPESCALE,
  payload: parseInt(e.target.value)
});

export const removeLargeSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.REMOVE_LARGE_SAMPLE,
  payload: quantity
});

export const removeSmallSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.REMOVE_SMALL_SAMPLE,
  payload: quantity
});

export const toggleFocusMode = () => ({
  type: TYPESCALE_ACTIONS.TOGGLE_FOCUS_MODE
});

export const toggleRounding = () => ({
  type: TYPESCALE_ACTIONS.TOGGLE_ROUNDING
});

export const toggleUnits = e => ({
  type: TYPESCALE_ACTIONS.TOGGLE_UNITS,
  payload: e.target.value
});



