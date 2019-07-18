import React from "react";
import { MyCustomExpansionPanel } from "../controls/CustomExpansionPanel";
import BaseFormContainer from "../controls/BaseFormContainer";
import HeadingFormContainer from "../controls/HeadingFormContainer";
import BodyFormContainer from "../controls/BodyFormContainer";

const Sidebar = () => {
  return (
    <div>
      <MyCustomExpansionPanel
        panelName="baseForm"
        expanded={true}
        summaryHeading="Modular Scale"
      >
        <BaseFormContainer />
      </MyCustomExpansionPanel>
      <MyCustomExpansionPanel
        panelName="headingForm"
        expanded={true}
        summaryHeading="Heading"
      >
        <HeadingFormContainer />
      </MyCustomExpansionPanel>
      <MyCustomExpansionPanel
        panelName="bodyForm"
        expanded={false}
        summaryHeading="Body"
      >
        <BodyFormContainer />
      </MyCustomExpansionPanel>
    </div>
  );
};

export default Sidebar;
