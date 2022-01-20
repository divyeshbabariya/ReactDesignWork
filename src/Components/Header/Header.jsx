import React, { Fragment, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Header.css";

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import ProfileWithBanner from '../ProfileWithBanner/ProfileWithBanner';
import Overlay from "../Overlay/Overlay";
import HomeSec from "../HomePage/HomeSec";
import Dashboard from "../Dashboard/Dashboard";
import Upload from "../Upload/Upload";
import ProfileNoBanner from '../ProfileWithNoBanner/ProfileNoBanner'; 
import { useDispatch, useSelector } from 'react-redux'


const Header = () => {
  const [overl, setOverl] = useState(false);
  const overlay = () => {
    setOverl(true);
    console.log("clicked");
  };

  return (
    <Fragment>
      {overl && <Overlay />}

      <div className="container-fluid header px-0 overflow-hidden">
        <div className="max-1500">
          <NavLink to="/" className="logo">
            <img src="./images/logo.png" />
          </NavLink>
          <div className="right_menu">
            <div class="search_box">
              <input type="text" placeholder="Search All" className="text-light searchbox" />
              <span className="head_select">
                All <img src="./images/header_select.png" />
              </span>
            </div>
            <ul>
            <li className="home_btn">
                <NavLink to="/">
                  <img src="./images/home.png" style={{width:32}} className="m-0 p-0" />
                </NavLink>
              </li>
              <li className="plus_btn">
                <NavLink to="/upload">
                  <img src="./images/cinema.svg" />
                </NavLink>
              </li>
              <li className="live_btn">
                <NavLink to="/ProfileWithBanner">
                  <img src="./images/plus.svg" />
                </NavLink>
              </li>
              <li className="cinema">
                <NavLink to="/dashboard">
                  <img src="./images/live.svg" />
                </NavLink>
              </li>
              <li>
                <a
                  onClick={overlay}
                  href="#"
                  className="custom_btn"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Login
                </a>
              </li>
              <li>
                <NavLink to="/profileNoBanner">
                  <i className="fas fa-bars"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>




    </Fragment>
  );
};

export default Header;
