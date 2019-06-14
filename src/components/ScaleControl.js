import React, { useState } from 'react';
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import styled from 'styled-components';

const ScaleControlSet = styled.div`
  align-items: center;
  display: flex;

  .icon-button {
    transition: opacity 0.5s ease-in-out;

    path {
      color: black;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  .label {
    color: #737373;
    font-size: 0.750em;
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }
`

const ScaleControl = ({incrementCounter, decrementCounter, incrementLabel, decrementLabel}) => {
  const [count, setCount] = useState(1);

  return (
    <ScaleControlSet>
      <label class="label" for="incrementCounter">
        Scale
      </label>
      <IconButton
        aria-label={incrementLabel}
        onClick={() => incrementCounter(count)} className="icon-button">
        <AddBox />
      </IconButton>
      <TextField 
        type="number"
        id="incrementCounter"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        style={{ width: 40 }}
        margin="dense"
      />
      <IconButton
        aria-label={decrementLabel}
        onClick={() => decrementCounter(count)} className="icon-button">
        <IndeterminateCheckBox />
      </IconButton>  
    </ScaleControlSet>
  );
};

export default ScaleControl;