import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  background-color: #F0F4F6;
  color: ${props => props.theme.black};
  display: inline-block;
  font-size: 0.875em;
  padding: 3px 0;
  text-align: center;
  width: 70px;
`;

const UnitLabel = ({ 
  text
 }) => {
  return (
    <Label>
      {text}
    </Label>
  );
};

export default UnitLabel;