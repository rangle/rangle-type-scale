import styled, {createGlobalStyle, css} from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const DifferentFont = css`
  font-family: "Rangle Riforma";
  text-transform: uppercase;
  font-weight: 300;
  color: #737373;
`;

export const CustomTextField = styled(TextField)`
  & > label {
    ${DifferentFont}
  }
`;

export const CustomFormControlLabel = styled(FormControlLabel)`
  & span {
    ${DifferentFont}
  }
`;