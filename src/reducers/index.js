export const TYPESCALE_ACTIONS = {
  CHANGE_BASE_SIZE: 'CHANGE_BASE_SIZE',
  CHANGE_PREVIEW_TEXT: 'CHANGE_PREVIEW_TEXT',
  CHANGE_NUMBER_OF_SPECIMENS: 'CHANGE_NUMBER_OF_SPECIMENS',
  CHANGE_WEIGHT: 'CHANGE_WEIGHT',
  CHANGE_TYPESCALE: 'CHANGE_TYPESCALE'
};

export const INITIAL_STATE = {
  baseSize: 16,
  numberOfSpecimens: 5,
  previewText: "A Visual Type Scale",
  typeScale: {
    value: 1.2,
    name: "Minor Third"
  },
  weight: 400,
  typeScaleSelected: 2,
  typeScaleValues: [
    {
      value: 1.067,
      name: "Minor Second"
    },
    {
      value: 1.125,
      name: "Major Second"
    },
    {
      value: 1.2,
      name: "Minor Third"
    },
    {
      value: 1.250,
      name: "Major Third"
    },
    {
      value: 1.333,
      name: "Perfect Fourth"
    },
    {
      value: 1.414,
      name: "Augmented Fourth"
    },
    {
      value: 1.500,
      name: "Perfect Fifth"
    },
    {
      value: 1.618,
      name: "Golden Ratio"
    }
  ]
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
    case (TYPESCALE_ACTIONS.CHANGE_TYPESCALE): {
      return {
        ...state,
        typeScaleSelected: action.payload
      }
    }
    default:
      return state;
  }
};
