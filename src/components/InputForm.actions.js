import { TYPESCALE_ACTIONS } from '../reducers';

export const changeBaseSize = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BASE_SIZE,
  payload: e.target.value
});

export const changeWeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_WEIGHT,
  payload: e.target.value
});

export const changePreviewText = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_PREVIEW_TEXT,
  payload: e.target.value
});

export const changeTypeScale = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_TYPESCALE,
  payload: e.target.value
})

export const changeFont = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_FONT,
  payload: e.target.value
});
