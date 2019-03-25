import React, { Component } from 'react';
import SampleFormContainer from './SampleFormContainer';
import BodyFormContainer from './BodyFormContainer';
import styled from 'styled-components';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <SampleFormContainer />
        <BodyFormContainer />
      </div>
    );
  }
}

export default Sidebar;