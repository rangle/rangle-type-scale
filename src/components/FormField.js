import React from 'react';
import Label from './Label';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

const StyledFormField = styled.div`
  margin-bottom: 10px;
`;

const FormField = (props) => {
  return (
    <FormControl
      fullWidth={props.fullWidth ? props.fullWidth : true}
    >
      <Label 
        name={props.name}
        text={props.text}
      />
      {props.children}
    </FormControl>
  );
};

export default FormField;