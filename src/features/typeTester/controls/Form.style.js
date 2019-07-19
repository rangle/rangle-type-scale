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

  & > label[class*="focused"] {
    color: ${props => props.theme.typeColor};
    font-weight: 700;
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

  & [class*="underline"]:after {
    border-bottom-color: ${props => props.theme.typeColor};
  }
`;

export const CustomFormControlLabel = styled(FormControlLabel)`
  & > span {
    ${labelTypeStyles}
    font-size: .75em;
    margin-bottom: 0;
  }

  & [class*="bar"] {
    background-color: #1FC028;
    opacity: 1;
  }

  & span[class*="Checkbox-checked"] {
    color: ${props => props.theme.typeColor};
  }

  & span[class*="Switch-iconChecked"] {
    color: #fafafa;
  }

  & [class*="checked"][class*="colorSecondary"] + [class*="bar"] {
      background-color: #D44527;
      opacity: 1;
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