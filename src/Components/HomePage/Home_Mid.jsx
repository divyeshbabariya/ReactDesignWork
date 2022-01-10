import React, { Fragment } from "react";
import "./Home_Mid.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home_Mid = () => {

  const slidedata = [
    {
      image:"./images/girl.jpg"
    },
    {
      image: "./images/girl.jpg"
    }
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
        <h3 class="movie_title mb-3 mt-3 pl-5 ml-5">
          <img src="./images/song_icon.png" class="mr-5" />
          <h4>Song : Lorem Ipsum - Lorem Ipsum.</h4>
        </h3>
      </div>
      <div className="slider py-3 m-auto">
        <i class="fas fa-chevron-left left position-absolute"></i>
        <div className="slider_screen p-4 m-auto">
          
</div>

        <i class="fas fa-chevron-right right position-absolute"></i>      
      </div>
      <div className="slidename mt-3">
        <h4 class="cat_type pt-3 mb-3">Category : Movie</h4>
      </div>
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
