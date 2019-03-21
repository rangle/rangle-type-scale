import React from 'react';
import Label from './Label';
import styled from 'styled-components';

const StyledFormField = styled.div`
  margin-bottom: 10px;
`;

const FormField = (props) => {
  return (
    <StyledFormField>
      <Label 
        name={props.name}
        text={props.text}
      />
      {props.children}
    </StyledFormField>
  );
};

export default FormField;