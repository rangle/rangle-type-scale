import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const DifferentFont = css`
  color: ${props => props.theme.darkGray};
  font-family: ${props => props.theme.fontFamily};
  font-size: 1rem;
  letter-spacing: 0.4px;
  line-height: 20px;
  text-transform: uppercase;
`;

export const CustomTextField = styled(TextField)`
  & > label {
    ${DifferentFont}
  }

  & [class*="icon"] {
    color: ${props => props.theme.black};
  }
`;

export const CustomFormControlLabel = styled(FormControlLabel)`
  & > span {
    ${DifferentFont}
    font-size: .75em;
    margin-bottom: 0;
  }

  & span[class*="checked"] {
    color: ${props => props.theme.black};
  }

  &.control-label-top {
    line-height: 2.5;
    margin: 15px 0 0;
  }
`;

export const CustomFormLabel = styled(FormLabel)`
  &.label-legend {
    ${DifferentFont}
    font-size: .75em;
    margin: 15px 0 10px;
  }
`;