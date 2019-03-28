import React from "react"; 
import MediaQuery from "react-responsive";

const MediaQueryTest = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery minDeviceWidth={700}>
      {(matches) => {
        if (matches) {
          return <div>Media query matches!</div>;
        } else {
          return <div>Media query does not match!</div>;
        }
      }}
    </MediaQuery>  
  </div>
);

export default MediaQueryTest;