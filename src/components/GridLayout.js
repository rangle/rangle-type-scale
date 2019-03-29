import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Main from './Main';

const StyledApp = styled.main`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 250px 1fr;
  margin: 0 15px;

  @media (min-width: 1100px) {
    grid-column-gap: 50px;
    grid-template-columns: 350px 1fr;
  }
`;

const GridLayout = () => {
  return (
    <StyledApp>
      <div>
        <Sidebar />
      </div>
      <Main />
    </StyledApp>
  );
};

export default GridLayout;