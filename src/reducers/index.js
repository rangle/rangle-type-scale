import { Colors } from '../utilities/Colors';

export const TYPESCALE_ACTIONS = {
  ADD_LARGE_SAMPLE: 'ADD_LARGE_SAMPLE',
  ADD_SMALL_SAMPLE: 'ADD_SMALL_SAMPLE',
  CHANGE_BACKGROUND_COLOR: 'CHANGE_BACKGROUND_COLOR',
  CHANGE_BASE_SIZE: 'CHANGE_BASE_SIZE',
  CHANGE_BODY_WEIGHT: 'CHANGE_BODY_WEIGHT',
  CHANGE_BODY_FONT: 'CHANGE_BODY_FONT',
  CHANGE_FONT_COLOR: 'CHANGE_FONT_COLOR',
  CHANGE_HEADING_FONT: 'CHANGE_HEADING_FONT',
  CHANGE_HEADING_LINE_HEIGHT: 'CHANGE_HEADING_LINE_HEIGHT',
  CHANGE_HEADING_WEIGHT: 'CHANGE_HEADING_WEIGHT',
  CHANGE_LINE_HEIGHT: 'CHANGE_LINE_HEIGHT',
  CHANGE_NUMBER_OF_SPECIMENS: 'CHANGE_NUMBER_OF_SPECIMENS',
  CHANGE_PREVIEW_HEADLINE: 'CHANGE_PREVIEW_HEADLINE',
  CHANGE_PREVIEW_PARAGRAPH: 'CHANGE_PREVIEW_PARAGRAPH',
  CHANGE_SAMPLE_WEIGHT: 'CHANGE_SAMPLE_WEIGHT',
  CHANGE_THEME: 'CHANGE_THEME',
  CHANGE_TYPESCALE: 'CHANGE_TYPESCALE',
  REMOVE_LARGE_SAMPLE: 'REMOVE_LARGE_SAMPLE',
  REMOVE_SMALL_SAMPLE: 'REMOVE_SMALL_SAMPLE',
  TOGGLE_ROUNDING: 'TOGGLE_ROUNDING'
};

export const INITIAL_STATE = {
  
  /* body text */
  bodyLineHeight: 1.5,
  bodyTypeColor: "#333333",
  bodyFont: "Rangle Riforma",
  bodyFontSelected: 0,
  bodyWeightSelected: 400,
  previewParagraph: "Guesswork isn’t in our toolkit. Through discovery, empathy, and relentless curiosity, we partner with clients to identify, frame, and build the right thing.",
  
  /* type samples */
  largeSamples: 5,
  smallSamples: 5,

  /* heading fonts */
  headingTypeColor: "#ffffff",
  headingFontSelected: 0,
  headingLineHeight: 1.5,
  headingWeightSelected: 400,
  
  /* base */
  backgroundColor: "#ffffff",
  baseSize: 16,
  baseUnit: "px",
  lightMode: true,
  fonts: [
    {
      name: "Rangle Riforma",
      weights: [300, 400, 500, 700, 900]
    },
    {
      name: "Georgia",
      weights: [300, 400, 500, 700, 900]
    }
  ],
  previewHeadline: "Making things that matter",
  roundFontSizes: true,
  themes: [
    {
      themeName: "light",
      colorValue: Colors.white,
      themeColors: {
        background: Colors.white,
        labels: Colors.darkGray,
        type: Colors.black,
      }
    },
    {
      themeName: "dark",
      colorValue: Colors.black,
      themeColors: {
        background: Colors.black,
        labels: Colors.lightGray,
        type: Colors.white,
      }
    }
  ],
  themeSelected: "light",
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
    case TYPESCALE_ACTIONS.ADD_LARGE_SAMPLE: {
      return {
        ...state,
        largeSamples: (state.largeSamples += action.payload)
      };
    }
    case TYPESCALE_ACTIONS.ADD_SMALL_SAMPLE: {
      return {
        ...state,
        smallSamples: (state.smallSamples += action.payload)
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_BACKGROUND_COLOR: {
      return {
        ...state,
        backgroundColor: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_BASE_SIZE: {
      return {
        ...state,
        baseSize: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_HEADING_WEIGHT: {
      return {
        ...state,
        headingWeightSelected: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_HEADING_FONT: {
      return {
        ...state,
        headingFontSelected: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_BODY_FONT: {
      return {
        ...state,
        bodyFontSelected: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_BODY_WEIGHT: {
      return {
        ...state,
        bodyWeightSelected: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_FONT_COLOR: {
      return {
        ...state,
        bodyTypeColor: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_LINE_HEIGHT: {
      return {
        ...state,
        bodyLineHeight: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_HEADING_LINE_HEIGHT: {
      return {
        ...state,
        headingLineHeight: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_NUMBER_OF_SPECIMENS: {
      return {
        ...state,
        numberOfSamples: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_PREVIEW_HEADLINE: {
      return {
        ...state,
        previewHeadline: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_PREVIEW_PARAGRAPH: {
      return {
        ...state,
        previewParagraph: action.payload
      };
    }
    case TYPESCALE_ACTIONS.CHANGE_THEME: {
      return {
        ...state,
        themeSelected: action.payload
      }
    }
    case TYPESCALE_ACTIONS.CHANGE_TYPESCALE: {
      return {
        ...state,
        typeScaleSelected: action.payload
      };
    }
    case TYPESCALE_ACTIONS.REMOVE_LARGE_SAMPLE: {
      return {
        ...state,
        largeSamples: (state.largeSamples -= action.payload)
      };
    }
    case TYPESCALE_ACTIONS.REMOVE_SMALL_SAMPLE: {
      return {
        ...state,
        smallSamples: (state.smallSamples -= action.payload)
      };
    }
    case TYPESCALE_ACTIONS.TOGGLE_ROUNDING: {
      return {
        ...state,
        roundFontSizes: !state.roundFontSizes
      };
    }
    default:
      return state;
  }
};
