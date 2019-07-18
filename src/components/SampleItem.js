import React from 'react';
import styled from "styled-components";
import '../fonts/fonts.css';
import UnitLabel from './UnitLabel';

const SampleBody = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  margin-bottom: 30px;
`;

const SampleItem = ({
  alignLabel,
  children,
  focusState,
  labelMargin,
  text
}) => {

  return (
    <SampleBody>
      {!focusState &&
        <UnitLabel
          alignLabel={alignLabel}
          labelMargin={labelMargin}
          text={text}
        />
      }
      <div>
        {children}
      </div>
    </SampleBody>
  );
};

export default SampleItem;