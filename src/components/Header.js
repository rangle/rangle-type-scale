import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/modular-scale-logo.svg';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.black};
  color: white;
  padding: 20px 0;

  h1.headline {
    font-size: 1.25rem; /* 20px */
    line-height: 1.2; /* 24px */
    margin-left: 28px;
  }
  .wrapper.header {
    align-items: center;
    display: flex;
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <div className="wrapper header">
        <Logo />
        <h1 className="headline">Modular Scale</h1>
      </div>
    </StyledHeader>
  );
};

export default Header;