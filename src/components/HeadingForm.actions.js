import { TYPESCALE_ACTIONS } from '../reducers';

export const changeWeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_SAMPLE_WEIGHT,
  payload: e.target.value
});

export const changePreviewHeadline = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_PREVIEW_HEADLINE,
  payload: e.target.value
});

export const changeHeadlineFont = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_HEADLINE_FONT,
  payload: e.target.value
});