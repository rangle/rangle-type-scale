import React, { Component } from 'react';
import SampleFormContainer from './SampleFormContainer';
import BodyFormContainer from './BodyFormContainer';

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