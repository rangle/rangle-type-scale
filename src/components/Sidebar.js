import React, { Component } from 'react';
import SampleFormContainer from './SampleFormContainer';
import BodyFormContainer from './BodyFormContainer';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  margin: 0 15px;
`;

class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <SampleFormContainer />
        <BodyFormContainer />
      </StyledSidebar>
    );
  }
}

export default Sidebar;