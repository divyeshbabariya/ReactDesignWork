import React, { Fragment } from "react";


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Overlay.css";
import Home_Login from "../HomePage/Home_Login";


const Overlay = () => {
  return (
    <Fragment>   
          <div id="overlay1">
          <Home_Login />
          </div>
          
    
    </Fragment>
  );
};

export default Overlay;
