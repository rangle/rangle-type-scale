import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Sidebar from './Sidebar';
import Main from './Main';


function BreakpointUp(props) {
  const [show, setShow] = useState(false);
  const { width } = props;

  return (
    <div>
      <h1>
        Current width: {width} | Show: {show ? "true" : "false"}
      </h1>

      <div>
        <Hidden smUp>
          <button type="button" onClick={() => setShow(!show)}>
            Toggle
          </button>
        </Hidden>
        <Hidden smDown={show === false}>
          <Sidebar />
        </Hidden>
        <Main />
      </div>
    </div>
  );
}

export default withWidth()(BreakpointUp);
