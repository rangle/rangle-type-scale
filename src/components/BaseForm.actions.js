import { TYPESCALE_ACTIONS } from '../reducers';

export const changeBaseSize = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BASE_SIZE,
  payload: e.target.value
});

export const changeTypeScale = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_TYPESCALE,
  payload: e.target.value
})

export const addLargeSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.ADD_LARGE_SAMPLE,
  payload: quantity
});

export const addSmallSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.ADD_SMALL_SAMPLE,
  payload: quantity
});

export const removeLargeSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.REMOVE_LARGE_SAMPLE,
  payload: quantity
});

export const removeSmallSample = (quantity) => ({
  type: TYPESCALE_ACTIONS.REMOVE_SMALL_SAMPLE,
  payload: quantity
});

export const toggleRounding = () => ({
  type: TYPESCALE_ACTIONS.TOGGLE_ROUNDING
});
