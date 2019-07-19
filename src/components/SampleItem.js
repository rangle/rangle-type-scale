import React from 'react';
import styled from "styled-components";
// import '../fonts/fonts.css';
import UnitLabel from './UnitLabel';

const SampleBody = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto 1fr;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    grid-auto-flow: row;
    grid-column-gap: 0;
    grid-row-gap: 5px;
    grid-template-columns: 1fr;
  }
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