import React from 'react';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  CustomExpansionPanelSummary,
  CustomExpansionPanel,
  CustomExpansionPanelDetails
} from "./CustomExpansionPanel.style";

export const MyCustomExpansionPanel = (props) => {
  const [expanded, setExpanded] = React.useState(props.expanded);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded((newExpanded = !expanded));
  };

  return (
    <CustomExpansionPanel
      expanded={expanded}
      onChange={handleChange("panel")}
    >
      <CustomExpansionPanelSummary
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls={`${props.panelName}-content`}
        id={`${props.panelName}-header`}
        classes={{ root: "custom-expansion-panel-summary" }}
      >
        {props.summaryHeading}
      </CustomExpansionPanelSummary>
      <CustomExpansionPanelDetails
        classes={{ root: "custom-expansion-panel-details" }}
      >
        {props.children}
      </CustomExpansionPanelDetails>
    </CustomExpansionPanel>
  );
};

export default MyCustomExpansionPanel;