import React, { useState } from 'react';
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { CustomTextField, labelTypeStyles } from "../controls/Form.style";
import styled from 'styled-components';

const ScaleControlSet = styled.div`
  align-items: center;
  display: flex;

  .icon-button {
    color: ${props => props.theme.typeColor};
    transition: opacity 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }

    &:disabled {
      path {
        color: rgba(101, 101, 101, 0.15);
      }
    }
  }

  .label {
    ${labelTypeStyles};
    font-size: 0.75em;
  }
`;

const ScaleControl = ({incrementCounter, decrementCounter, incrementLabel, decrementLabel}) => {
  const [count, setCount] = useState(1);

  return (
    <ScaleControlSet>
      <label className="label" htmlFor="incrementCounter">
        Scale
      </label>
      <IconButton
        aria-label={incrementLabel}
        onClick={() => incrementCounter(count)}
        disabled={count < 1}
        classes={{ root: "icon-button" }}
      >
        <AddBox />
      </IconButton>
      <CustomTextField
        type="number"
        id="incrementCounter"
        value={count}
        onChange={e => setCount(parseInt(e.target.value))}
        style={{ width: 40 }}
        margin="dense"
        inputProps={{
          min: 0,
          max: 5
        }}
      />
      <IconButton
        aria-label={decrementLabel}
        onClick={() => decrementCounter(count)}
        className="icon-button"
        disabled={count < 1}
      >
        <IndeterminateCheckBox />
      </IconButton>
    </ScaleControlSet>
  );
};

export default ScaleControl;