import { TYPESCALE_ACTIONS } from '../reducers';

export const changeBaseSize = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_BASE_SIZE,
  payload: e.target.value
});

export const changeTypeScale = e => ({
  type: TYPESCALE_ACTIONS.CHANGE_TYPESCALE,
  payload: e.target.value
})

export const addLargeSample = () => ({
  type: TYPESCALE_ACTIONS.ADD_LARGE_SAMPLE
});

export const addSmallSample = () => ({
  type: TYPESCALE_ACTIONS.ADD_SMALL_SAMPLE
});

export const toggleRounding = () => ({
  type: TYPESCALE_ACTIONS.TOGGLE_ROUNDING
});
