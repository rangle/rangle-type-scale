export const TYPESCALE_ACTIONS = {
  CHANGE_BASE_SIZE: 'CHANGE_BASE_SIZE',
  CHANGE_PREVIEW_TEXT: 'CHANGE_PREVIEW_TEXT',
  CHANGE_NUMBER_OF_SPECIMENS: 'CHANGE_NUMBER_OF_SPECIMENS',
  CHANGE_WEIGHT: 'CHANGE_WEIGHT'
};

export const INITIAL_STATE = {
  baseSize: 16,
  numberOfSpecimens: 5,
  previewText: "A Visual Type Scale",
  typeScale: {
    value: 1.2,
    name: "Minor Third"
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
    case (TYPESCALE_ACTIONS.CHANGE_NUMBER_OF_SPECIMENS): {
      return {
        ...state,
        numberOfSpecimens: action.payload
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
