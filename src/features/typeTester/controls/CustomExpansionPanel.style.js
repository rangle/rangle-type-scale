import styled, { css } from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

const CustomPadding = css`
  padding: 0;
`;

export const CustomExpansionPanelSummary = styled(ExpansionPanelSummary)`
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.250em;
  font-weight: 700;
  line-height: 1.5;

  &.custom-expansion-panel-summary {
    ${CustomPadding}
  }

  & [class*="expandIcon"] {
    color: ${props => props.theme.black};
    right: 0;
  }

  & [class*="content"] {
    margin: 20px 0;
  }

  & [class*="MuiIconButton"] {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const CustomExpansionPanel = styled(ExpansionPanel)`
  &[class*="MuiPaper-elevation"] {
    background-color: transparent;
    box-shadow: none;
  }
`;

export const CustomExpansionPanelDetails = styled(ExpansionPanelDetails)`
  &.custom-expansion-panel-details {
    ${CustomPadding}
  }
`;