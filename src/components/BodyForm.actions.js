import { TYPESCALE_ACTIONS } from "../reducers";

export const changeBodyWeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BODY_WEIGHT,
  payload: e.target.value
});

export const changeBodyFont = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BODY_FONT,
  payload: e.target.value
});

export const changeLineHeight = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_LINE_HEIGHT,
  payload: e.target.value
});

export const changebackgroundColor = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BACKGROUND_COLOR,
  payload: e
});

export const changeFontColor = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_FONT_COLOR,
  payload: e
});

export const changePreviewParagraph = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_PREVIEW_PARAGRAPH,
  payload: e.target.value
})


