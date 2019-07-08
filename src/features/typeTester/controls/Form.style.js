import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const DifferentFont = css`
  color: ${props => props.theme.darkGray};
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
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
  }

  & span[class*="checked"] {
    color: ${props => props.theme.black};
  }
`;