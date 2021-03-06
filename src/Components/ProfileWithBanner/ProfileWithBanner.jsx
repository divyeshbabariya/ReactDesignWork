import React, { Fragment } from "react";
import "./ProfileWithBanner.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ProfileWithBanner = () => {
  const videodata = [
    {
      id: 1,
      imgdata: "./images/v1.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
    {
      id: 1,
      imgdata: "./images/v2.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
    {
      id: 1,
      imgdata: "./images/v3.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
    {
      id: 1,
      imgdata: "./images/v4.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
    {
      id: 1,
      imgdata: "./images/v5.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
    {
      id: 1,
      imgdata: "./images/v6.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
    {
      id: 1,
      imgdata: "./images/v7.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
    {
      id: 1,
      imgdata: "./images/v8.jpg",
      title: "Your Video Title - Your Subheading Here",
      text: "Verified Creator",
      view: "357M",
      likes: "4M",
      upload: "4 Months ago",
    },
  ];

  return (
    <Fragment>
      {/* <div className="profilewbanner">
        <div class="container-fluid header max-1500">
          <a href="#" class="logo">
            <img src="./images/logo.png" />
          </a>
          <div class="right_menu">
            <div class="search_box">
              <input type="text" placeholder="Search All" />
              <span class="head_select">
                All <img src="./images/header_select.png" />
              </span>
            </div>
            <ul class="db_head_list">
              <li>
                <a href="#">
                  <img src="./images/home_icon.svg" />
                </a>
              </li>
              <li class="plus_btn">
                <a href="#">
                  <img src="./images/cinema.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/search.svg" />
                </a>
              </li>
              <li class="live_btn">
                <a href="#">
                  <img src="./images/plus.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/cinema_single.svg" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/message.svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/group_icon.svg" />
                </a>
              </li>
              <li class="dp">
                <a href="#">
                  <img src="./images/ellipse_1.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="container-fluid prowithbansec">
        <div className="row">
          <div className="col-lg-3 py-3 pt-4 pro-left">
            <div className="row">
              <div className="col propic">
                <img
                  src="./images/ellipse_3.png"
                  class="dp_img justify-center"
                  style={{ maxWidth: "95px" }}
                />
                <h6 className="text-light m-0 p-0">John Smith</h6>
                <p className="text-light my-1 p-0 postname">Art Director</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2 countdata">
                <div className="proffan">
                  <p>28.1k</p>
                  <span>Fans</span>
                </div>
                <div className="proflike">
                  <p>1M</p>
                  <span>Likes</span>
                </div>
                <div className="profpost">
                  <p>20</p>
                  <span>Post</span>
                </div>
                <div className="profvideo">
                  <p>
                    10<i class="fas fa-video"></i>
                  </p>
                  <span>Videos</span>
                </div>
              </div>
              <div className="row">
                <div className="col my-3">
                  <ul class="fans_btn_list">
                    <li class="selected">
                      <a href="#">Become A Fan</a>
                    </li>
                    <li>
                      <a href="#">Message</a>
                    </li>
                    <li>
                      <a href="#">Email</a>
                    </li>
                  </ul>
                </div>
                <div className="row px-5">
                  <div className="col">
                    <p className="location_text p-0 m-0" style={{color:"#A8A8A8"}}>
                      <img src="./images/map_locator.png" />
                      New York, USA
                    </p>
                  </div>
                </div>
                <div class="profile_block px-5">
                  <h2 class="prof_title">
                    About John Smith
                    <a href="#">
                      <img src="./images/dots_icon.png" />
                    </a>
                  </h2>
                  <p className="pb-1 ptext" style={{color:"#A8A8A8"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                  </p>
                  <ul class="prof_list m-0 p-0">
                    <li>
                      <h3>Joined 13k13</h3>
                      <p className="ptext">September 28th, 2021</p>
                    </li>
                    <li>
                      <h3>Category</h3>
                      <p className="ptext">Photography</p>
                    </li>
                    <li>
                      <h3>Skills</h3>
                      <p className="ptext">Photography</p>
                    </li>
                    <li>
                      <h3>Contact</h3>
                      <p className="ptext">johnsmith@yourmail.com</p>
                    </li>
                    <li>
                      <h3>Website</h3>
                      <p className="ptext">www.johnsmith.com</p>
                    </li>
                  </ul>
                </div>
                <div className="profile_block px-5">
                  <h2 className="prof_title">
                    Social Networks
                    <a href="#">
                      <img src="./images/dots_icon.png" />
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row px-4">
              <div className="col">
                <a href="">
                  <div className="facebook social mb-4">
                    <div className="content">
                      <i className="fab fa-facebook-f"></i>
                      <p>Facebook</p>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="twitter social my-4">
                    <div className="content">
                      <i class="fab fa-twitter"></i>
                      <p>Twitter</p>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="instagram social my-4">
                    <div className="content">
                      <i class="fab fa-instagram"></i>
                      <p>Instagram</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-9 py-2 px-5">
            <div className="row">
              <div className="col-12 mt-4 pro-r">
                <img src="./images/profile_banner_img.png" />

                <div className="profile_sec mt-3">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#videos">
                        Videos
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#network">
                        My Network
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#tagged">
                        Tagged
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#events">
                        Events
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#timeline">
                        Timeline
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#suggested">
                        Suggested
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="video_sec container-fluid">
                  <div className="row">
                    <div className="col-12 p-3 d-flex justify-content-end align-items-center sorting">
                     <div className="sortbtn d-flex justify-content-end align-items-center"> <h6 className="text-align-right m-0 mx-2 sortingtext">SORT BY</h6><img src="./images/sort_icon.png" className="sortimg" style={{height:"15px",width:"20px"}} /></div>
                    </div>
                  </div>
                  <div className="row" id="videolist">
                    {videodata.map((ele, i) => {
                      return (
                        <div className="vcard col-lg-3 col-md-4 mb-5 col-sm-6">
                          <div className="image m-0 p-0">
                            <img src={ele.imgdata} alt="vimage" />
                            <div className="name">
                              <p>Video#1</p>
                            </div>
                            <div className="time">
                              <p>40:01</p>
                            </div>
                          </div>
                          <div className="vcontent  my-2">
                            <p className="title">{ele.title}</p>
                            <p className="text text-left">{ele.text}</p>
                            <div className="bottomline d-flex">
                              <div className="like">
                                <div className="view">
                                  <i class="fas fa-eye"></i>
                                  <p>{ele.view}</p>
                                </div>
                                <div className="view">
                                  <i class="far fa-thumbs-up"></i>
                                  <p>{ele.likes}</p>
                                </div>
                              </div>
                              <p className="upload">{ele.upload}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0 p-0">
              <div className="col load text-center">
                <i class="fas fa-redo"></i> <p>Load More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProfileWithBanner;
