import React from "react";
import styled from 'styled-components';
import { MyCustomExpansionPanel } from "../controls/CustomExpansionPanel";
import BaseFormContainer from "../controls/BaseFormContainer";
import HeadingFormContainer from "../controls/HeadingFormContainer";
import BodyFormContainer from "../controls/BodyFormContainer";

const CustomHeading = styled.h2`
  color: ${props => props.theme.typeColor};
  font-family: "Rangle Riforma";
  font-size: 2em;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 40px;
`;

const Sidebar = () => {
  return (
    <div>
      <CustomHeading>Type Settings</CustomHeading>
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
