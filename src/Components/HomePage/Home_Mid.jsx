import React, { Fragment } from "react";
import "./Home_Mid.css";
import "../../../node_modules/bootstrap/js/src/carousel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";



const Home_Mid = () => {
  const slidedata = [
    {
      image: "./images/girl.jpg",
    },
    {
      image: "./images/girl.jpg",
    },
  ];
  return (
    <Fragment>
      <div className="profile">
        <div className="namebox">
          <img src="./images/proper.png" alt="" />
          <div className="name">
            <h4>Tracy</h4>
            <p>Short Movie</p>
          </div>
        </div>
        <div class="col-lg-4">
          <a href="#" class="custom_btn">
            Become a Fan
          </a>
        </div>
      </div>
      <div className="slidetitle">
        <h3 class="movie_title mb-3 mt-3 text-center">
          <img src="./images/song_icon.png" />
          <h5>Song : Lorem Ipsum - Lorem Ipsum.</h5>
        </h3>
      </div>

{/* 
.........Video Slider............... */}
      
<Slider />
                    
{/* 
.........Video Slider....end........... */}



      <div className="option">
        <ul class="cat_view_list mb-5">
          <li>
            <img src="./images/yellow_eye_icon.png" />
            380000
          </li>
          <li>
            <img src="./images/yellow_fav_icon.png" />
            100000
          </li>
          <li>
            <img src="./images/yellow_share_icon.png" />
            Share
          </li>
        </ul>
      </div>
      <div class="cat_select mt-0">
        <p>Choose Your Category: </p>
        <select className="p-1">
          <option>Random</option>
        </select>
      </div>
    </Fragment>
  );
};

export default Home_Mid;
