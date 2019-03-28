import React from 'react';
import styled from 'styled-components';
import SampleFormContainer from './SampleType/SampleFormContainer';
import SampleList from './SampleType/SampleList';
import BodyTypeTester from './BodyType/BodyTypeTester';
import BodyFormContainer from './BodyType/BodyFormContainer';

const StyledApp = styled.main`
  margin: 15px;
`;

const StackedLayout = () => {
  return (
    <StyledApp>
      <div className="form sample-form">
        <SampleFormContainer />
        <SampleList />
      </div>
      <div className="form body-form">
        <BodyFormContainer />
        <BodyTypeTester />
      </div>
    </StyledApp>
  );
};

export default StackedLayout;