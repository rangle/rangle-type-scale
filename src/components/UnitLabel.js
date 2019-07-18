import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  align-self: ${props => props.alignLabel};
  background-color: #F0F4F6;
  color: ${props => props.theme.black};
  display: inline-block;
  font-size: 0.875em;
  margin: ${props => props.labelMargin};
  padding: 3px 0;
  text-align: center;
  width: 70px;
`;

const UnitLabel = ({ 
  alignLabel = "center",
  labelMargin = 0,
  text
 }) => {
  return (
    <Label 
      alignLabel={alignLabel}
      labelMargin={labelMargin}
    >
      {text}
    </Label>
  );
};

export default UnitLabel;