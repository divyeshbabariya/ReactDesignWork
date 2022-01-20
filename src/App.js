import React, { Fragment } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/dist/carousel";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileWithBanner from "./Components/ProfileWithBanner/ProfileWithBanner";
import Overlay from "./Components/Overlay/Overlay";
import HomeSec from "./Components/HomePage/HomeSec";
import Dashboard from "./Components/Dashboard/Dashboard";
import Upload from "./Components/Upload/Upload";
import ProfileNoBanner from "./Components/ProfileWithNoBanner/ProfileNoBanner";

function App() {
  return (
    <Fragment>
      <div className="content">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomeSec />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/upload" element={<Upload />}></Route>
            <Route
              path="/ProfileWithBanner"
              element={<ProfileWithBanner />}
            ></Route>
            <Route
              path="/profileNoBanner"
              element={<ProfileNoBanner />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
