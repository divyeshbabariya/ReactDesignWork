import react, { Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";

const Dashboard = () => {
  const msgdata = [
    {
      image: "./images/per1.png",
      name: "Amanda",
      online: "green",
    },
    {
      image: "./images/per2.png",
      name: "Amy",
      online: "green",
    },
    {
      image: "./images/per3.png",
      name: "Cameron",
      online: "#6e6e6e",
    },
    {
      image: "./images/per4.png",
      name: "Baker",
      online: "#6e6e6e",
    },
  ];

  const group = [
    {
      image: "./images/per5.png",
      name: "Drawing Tips",
      icon: <i class="fas fa-bell"></i>,
      num: "1",
    },
    {
      image: "./images/per6.png",
      name: "Drawing Tips",
      icon: <i class="fas fa-bell"></i>,
      num: "1",
    },
    {
      image: "./images/per8.png",
      name: "Drawing Tips",
      icon: <i class="fas fa-bell-slash"></i>,
      num: "",
    },
  ];

  const suggested = [
    {
      image: "./images/per5.png",
      name: "Drawing Tips",
     
    },
    {
      image: "./images/per6.png",
      name: "Drawing Tips",
     
    },
    {
      image: "./images/per7.png",
      name: "Drawing Tips",
          
    },
    {
      image: "./images/per8.png",
      name: "Drawing Tips",

    },
    {
      image: "./images/per2.png",
      name: "Drawing Tips",
    }
  ];

  const activity = [
    {
      image:"./images/per1.png"
    },
    {
      image:"./images/per2.png"
    }, {
      image:"./images/per3.png"
    },
    {
      image:"./images/per4.png"
    },
    {
      image:"./images/per5.png"
    },
    {
      image:"./images/per6.png"
    }


  ];

  return (
    <Fragment>
     
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 p-4" id="dashleft">
            <div className="row" id="prodash">
              <div className="col-12" id="profilecard">
                <div className="image mt-4">
                  <img src="./images/per2.png" alt="profilepic" />
                </div>
                <h3 className="text-center name">Sara Silva</h3>
                <p className="text-center m-0">711-2880 Nulla St.</p>
                <p className="text-center m-0 mb-54">
                  Mankato Mississipipi 96522
                </p>
              </div>
              <div className="col-12 my-2 countdata py-3">
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
                <div className="col-12  px-5 pb-4" id="menus">
                  <table>
                    <tr>
                      <td>
                        <i class="fas fa-home"></i>
                      </td>
                      <td>Home</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-th-large"></i>
                      </td>
                      <td>Feed</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-bell"></i>
                      </td>
                      <td>Notification</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-search"></i>
                      </td>
                      <td>Discover</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-location-arrow"></i>
                      </td>
                      <td>Direct</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-tv"></i>
                      </td>
                      <td>IGTV</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-signal"></i>
                      </td>
                      <td>Status</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fas fa-cog"></i>
                      </td>
                      <td>Settings</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3 p-2" id="messenger">
                <h2 className="text-center">
                  Messenger <i class="fab fa-facebook-messenger"></i>
                </h2>
                {msgdata.map((ele) => {
                  return (
                    <div className="on on1">
                      <div className="prop">
                        <img src={ele.image} alt="face" />
                        <p>{ele.name}</p>
                      </div>
                      <div
                        className="c"
                        style={{ backgroundColor: ele.online }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-4 mt-3" id="groups">
                {group.map((ele) => {
                  return (
                    <div className="line my-3">
                      <img src={ele.image} alt="face" />
                      <p>{ele.name}</p>
                      <p>
                        {ele.icon}
                        {ele.num}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-4 l" id="dashmid">
            <div
              class="black_cat_box black_cat_box4 m-2 p-2 col-12"
              id="topmid"
            >
              <div class="comment_text_box">
                <div class="img">
                  <img src="./images/ellipse_1.png" />
                </div>
                <form>
                  <textarea placeholder="Make a Post..." className="nooutl"></textarea>
                </form>
              </div>
              <ul class="event_list">
                <li>
                  <img src="./images/event_icon1.png" />
                  Photos
                </li>
                <li>
                  <img src="./images/event_icon2.png" />
                  Videos
                </li>
                <li>
                  <img src="./images/event_icon3.png" />
                  Events
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-12 p-2 m-2 l-12 postimg">
                <div className="first">
                  <div className="firstl">
                    <img src="./images/ellipse_2.png" />
                    <div className="name">
                      <h3 className="m-0">Amanda</h3>
                      <p className="m-0">Yeaterday at 13:30</p>
                    </div>
                  </div>
                  <img src="./images/dots_icon.png" />
                </div>
                <div className="row">
                  <div className="col-12 mt-5 imagebox">
                    <img src="./images/social_img1.jpg" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="share">
                      <ul class="social_share_list">
                        <li>
                          <img src="./images/yellow_fav_icon.png" />
                          28.5k Likes
                        </li>
                        <li>
                          <img src="./images/yellow_comment_icon.png" />
                          33 Comments
                        </li>
                        <li>
                          <img src="./images/yellow_share_newicon.png" />
                          134 Shares
                        </li>
                        <li>
                          <img src="./images/yellow_save_icon.png" />
                          16 Saved
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="para">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A ratione totam inventore, aliquam voluptate
                        repellendus, id molestiae est nam quam expedita velit
                        sequi at autem? Aspernatur perferendis provident quis
                        eaque?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 py-4">
                    <div className="blackbox_comment_sec">
                      <div className="comment_text_box">
                        <div className="img">
                          <img src="./images/ellipse_1.png" />
                        </div>
                        <form>
                          <textarea placeholder="Write a comment..." className="text-light no-outline nooutl"></textarea>
                        </form>
                      </div>
                      <div class="comment_icons_list">
                        <a href="#">
                          <img src="./images/attachment_icon.png" />
                        </a>

                        <a href="#">
                          <img src="./images/emoji_icon.png" />
                        </a>

                        <a href="#">
                          <img src="./images/panorama_icon.png" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 l px-4" id="dashright">
            <div className="row">
              <div className="col-12 trend">
                <h3 className="text-center">Trending Feeds</h3>
                <div className="imageboxes">
                  <div className="l1 ll d-flex">
                    <img src="./images/v8.jpg" alt="" />
                    <img src="./images/v2.jpg" alt="" />
                  </div>
                  <div className="l2 ll d-flex">
                    <img src="./images/v1.jpg" alt="" />
                    <img src="./images/v3.jpg" alt="" />
                  </div>
                  <p className="text-center my-2">See All <i class="fas fa-angle-double-right"></i></p>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 suggested p-4">
                <h3>Suggested For You</h3>

                {
                  suggested.map((el) => {
                    return (
                      <div className="sug my-3">
                         <img src={el.image} alt="face" />
                        <p>{el.name}</p>
                        <button>Become A Fan</button>
                        <i class="fas fa-location-arrow"></i>

                     </div>
            
                    )
                    
                  })
                }
                 <p className="text-center my-2">See All <i class="fas fa-angle-double-right"></i></p>

              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-3 p-3 proact">
                <h3 className="text-center">Profile Activity</h3>
                <div className="proactive py-4">
                  {
                    activity.map((e, i) => {
                      return (
                        <img src={e.image} alt="prof" style={{marginLeft:{i}}} />
                      )
                    })
}
                </div>
                <p className="px-5 text-center"> <span className="num">20.2k</span> Fans</p>
                <p className="px-5 text-center">Active now on your profile</p>            
                <br />
                <p className="text-center">The perfect time for uploading</p>
                <p className="text-center">your new post <span className="link">create new post</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
