import React, { Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./HomeSec.css";
import Home_TrendVCard from "./Home_TrendVCard";
import Home_Chennels from "./Home_Chennels";
import Home_Mid from "./Home_Mid";
import Home_Comment from "./Home_Comment";

const HomeSec = () => {
  return (
    <Fragment>
      <h2 class="text-center m-0 py-4" id="midline">Login to show the world your talents</h2>
      <div className="container-fluid pb-5" id="homesec">
      <div class="container-fluid max-1500 boxh py-4" id="mainscreen">
        <div className="row d-flex" id="homescreen">
          <div className="col-lg-3">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <h3>Trending Videos</h3>
                  <img src="./images/video_trend.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Home_TrendVCard />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="title mt-4">
                  <h3>Discover Channels</h3>
                  <img src="./images/discover.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 chennelbox">
                <Home_Chennels />
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="row">
              <div className="col-12">
                <div className="middle">
                <Home_Mid />
               </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="row">
              <div className="col-12">
              <Home_Comment />      
        
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default HomeSec;
