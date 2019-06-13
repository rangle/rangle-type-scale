import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BaseFormContainer from './BaseFormContainer';
import BodyFormContainer from './BodyFormContainer';
import HeadingFormContainer from './HeadingFormContainer';

const Sidebar = () => {
  return (
    <div>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Modular Scale
          </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <BaseFormContainer />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          Heading
          </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <HeadingFormContainer />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >Body
          </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <BodyFormContainer />
        </ExpansionPanelDetails>

      </ExpansionPanel>
    </div>
  );
};

export default Sidebar;