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
  margin: 0 0 30px;

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

function BreakpointUp(props) {
  const [show, setShow] = useState(false);
  const { width } = props;

  return (
    <div>
      <div>
        <Hidden smUp>
          <InvisibleButton type="button" onClick={() => setShow(!show)}>
            <CustomHeading>
              <span className="icon">
                {
                  show ? 
                  <BackIcon /> :
                  <SettingsIcon />
                }
              </span>
              {customHeadingText}
            </CustomHeading>
          </InvisibleButton>
        </Hidden>
        <Hidden smDown={show === false}>
          <Hidden smDown={show === true}>
            <CustomHeading>
              {customHeadingText}
            </CustomHeading>
          </Hidden>
          <Sidebar />
        </Hidden>
        <Main />
      </div>
    </div>
  );
}

export default withWidth()(BreakpointUp);
