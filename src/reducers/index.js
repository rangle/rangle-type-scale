export const TYPESCALE_ACTIONS = {
  CHANGE_BASE_SIZE: 'CHANGE_BASE_SIZE',
  CHANGE_PREVIEW_TEXT: 'CHANGE_PREVIEW_TEXT',
  CHANGE_WEIGHT: 'CHANGE_WEIGHT'
};

export const INITIAL_STATE = {
  baseSize: 16,
  previewText: "A Visual Type Scale",
  typeScale: {
    value: 1.067,
    name: "Minor Second"
  },
  weight: 400
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case(TYPESCALE_ACTIONS.CHANGE_BASE_SIZE): {
      return {
        ...state,
        baseSize: action.payload
      }
    }
    case(TYPESCALE_ACTIONS.CHANGE_PREVIEW_TEXT): {
      return {
        ...state,
        previewText: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_WEIGHT): {
      return {
        ...state,
        weight: action.payload
      }
    }
    default:
      return state;
  }
};
