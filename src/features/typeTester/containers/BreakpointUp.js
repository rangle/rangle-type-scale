import React, { useState } from "react";
import styled from 'styled-components';
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import SettingsIcon from '@material-ui/icons/Settings';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import Sidebar from './Sidebar';
import Main from './Main';

const CustomHeading = styled.h2`
  color: ${props => props.theme.typeColor};
  font-family: "Rangle Riforma";
  font-size: 2em;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 40px;

  .icon {
    display: inline-block;
    margin-right: 15px;
  }
`;
const customHeadingText = "Type Settings";

const InvisibleButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
`;

const GridContainer = styled.div`
  margin-top: 80px;

  .wrapper.grid {
    display: grid;
    grid-column-gap: 100px;
    grid-template-columns: 300px 1fr;
  }

  .focus {
    display: flex;
    justify-content: center;

    .body-type-tester {
      max-width: 800px;
    }
  }
`;

function SidebarBreakpointUp(props) {
  const [controlsVisible, setControlVisibility] = useState(false);
  const { width } = props;
  const baseClass = "wrapper";
  const classList = (base) => {
    if (props.focusMode) {
      return `${base} focus`
    } else if (width !== "sm" && width !== "xs" && !props.focusMode) {
      return `${base} grid`;
    }
    return base;
  };

  return (
    <GridContainer>
      <div className="wrapper">
        <Hidden smUp>
          <InvisibleButton 
            type="button" 
            onClick={() => setControlVisibility(!controlsVisible)}>
            <CustomHeading>
              <span className="icon">
                {
                  controlsVisible ? 
                  <BackIcon /> :
                  <SettingsIcon />
                }
              </span>
              {customHeadingText}
            </CustomHeading>
          </InvisibleButton>
        </Hidden>
      </div>
      <div className={classList(baseClass)}>
        <Hidden smDown={controlsVisible === false} smUp={props.focusMode}>
          <div>
            <Hidden smDown={controlsVisible === true}>
              <CustomHeading>
                {customHeadingText}
              </CustomHeading>
            </Hidden>
            <Sidebar />
          </div>
        </Hidden>
        <Hidden smDown={controlsVisible}>
          <Main />
        </Hidden>
      </div>
    </GridContainer>
  );
}

export default withWidth()(SidebarBreakpointUp);
