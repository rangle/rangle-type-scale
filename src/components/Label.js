import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-sampleWeight: bold;
  margin-bottom: 5px;
`;

const Label = ({ name, text }) => {
  return (
    <StyledLabel htmlFor={name}>{text}</StyledLabel>
  );
};

export default Label;