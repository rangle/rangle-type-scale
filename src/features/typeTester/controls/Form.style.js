import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

export const labelTypeStyles = css`
  color: ${props => props.theme.labelColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: 1rem;
  letter-spacing: 0.4px;
  line-height: 20px;
  text-transform: uppercase;
`;

export const CustomTextField = styled(TextField)`
  & > label {
    ${labelTypeStyles}
  }

  & [class*="icon"] {
    color: ${props => props.theme.typeColor};
  }

  & [class*="input"] {
    color: ${props => props.theme.typeColor};
  }

  & [class*="underline"]:before {
    border-bottom-color: ${props => props.theme.labelColor};
  }
`;

export const CustomFormControlLabel = styled(FormControlLabel)`
  & > span {
    ${labelTypeStyles}
    font-size: .75em;
    margin-bottom: 0;
  }

  & span[class*="checked"] {
    color: ${props => props.theme.typeColor};
  }

  &.control-label-top {
    line-height: 2.5;
    margin: 15px 0 0;
  }
`;

export const CustomFormLabel = styled(FormLabel)`
  &.label-legend {
    ${labelTypeStyles}
    font-size: .75em;
    margin: 15px 0 10px;
  }
`;