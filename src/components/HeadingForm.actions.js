import { TYPESCALE_ACTIONS } from '../reducers';

export const changePreviewHeadline = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_PREVIEW_HEADLINE,
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