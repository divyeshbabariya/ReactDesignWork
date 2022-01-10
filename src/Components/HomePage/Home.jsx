import React, { Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import Header from "./Header";
import HomeSec from "./HomeSec";

// import { BrowserRouter as Router, Routes, Route, Navlink } from 'react-router-dom';


const Home = () => {
  return (
    <Fragment>

      <div className="home pb-5">
      <Header />
      <HomeSec />
   </div>


    </Fragment> 
  );
};

export default Home;
