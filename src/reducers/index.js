export const TYPESCALE_ACTIONS = {
  CHANGE_BASE_SIZE: 'CHANGE_BASE_SIZE',
  CHANGE_PREVIEW_HEADLINE: 'CHANGE_PREVIEW_HEADLINE',
  CHANGE_HEADLINE_FONT: 'CHANGE_HEADLINE_FONT',
  CHANGE_NUMBER_OF_SPECIMENS: 'CHANGE_NUMBER_OF_SPECIMENS',
  CHANGE_SAMPLE_WEIGHT: 'CHANGE_SAMPLE_WEIGHT',
  CHANGE_TYPESCALE: 'CHANGE_TYPESCALE',
  CHANGE_BODY_WEIGHT: 'CHANGE_BODY_WEIGHT',
  CHANGE_BODY_FONT: 'CHANGE_BODY_FONT',
  CHANGE_LINE_HEIGHT: 'CHANGE_LINE_HEIGHT',
  CHANGE_BACKGROUND_COLOR: 'CHANGE_BACKGROUND_COLOR',
  CHANGE_FONT_COLOR: 'CHANGE_FONT_COLOR',
  CHANGE_PREVIEW_PARAGRAPH: 'CHANGE_PREVIEW_PARAGRAPH'   
};

export const INITIAL_STATE = {
  /* body text */
  backgroundColor: "#ffffff",
  lineHeight: 1.5,
  bodyWeight: 400,
  bodyFontColor: "#333333",
  bodyFont: "Rangle Riforma",
  previewParagraph: "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
  
  /* type sample */
  numberOfSamples: 5,
  sampleWeight: 400,
  
  /* both */
  baseSize: 16,
  fontFamily: "Rangle Riforma",
  fontFamilies: ["Rangle Riforma", "Rangle Riforma Light"],
  previewHeadline: "A Visual Type Scale",
  typeScale: {
    value: 1.2,
    name: "Minor Third"
  },
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
        numberOfSamples: action.payload
      }
    }
    case(TYPESCALE_ACTIONS.CHANGE_PREVIEW_HEADLINE): {
      return {
        ...state,
        previewHeadline: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_SAMPLE_WEIGHT): {
      return {
        ...state,
        sampleWeight: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_TYPESCALE): {
      return {
        ...state,
        typeScaleSelected: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_HEADLINE_FONT): {
      return {
        ...state,
        fontFamily: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_BODY_WEIGHT): {
      return {
        ...state,
        bodyWeight: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_BODY_FONT): {
      return {
        ...state,
        bodyFont: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_FONT_COLOR): {
      return {
        ...state,
        bodyFontColor: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_LINE_HEIGHT): {
      return {
        ...state,
        lineHeight: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_BACKGROUND_COLOR): {
      return {
        ...state,
        backgroundColor: action.payload
      }
    }
    case (TYPESCALE_ACTIONS.CHANGE_PREVIEW_PARAGRAPH): {
      return {
        ...state,
        previewParagraph: action.payload
      }
    }
    default:
      return state;
  }
};
