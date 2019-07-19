import React from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';

const StyledLabel = styled.label`
  display: block;
  font-sampleWeight: bold;
  margin-bottom: 5px;
`;

const Label = ({ name, text }) => {
  return (
    <FormLabel htmlFor={name}>{text}</FormLabel>
  );
};

export default Label;