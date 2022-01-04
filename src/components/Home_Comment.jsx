import React, { Fragment } from "react";
import "./Home_Comment.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home_Comment = () => {
  return (
    <Fragment>
      <div className="border-left max_460">
        <div className="inner_wrap">
          <div className="text-center mb-4">
            <img
              src="./images/comment_img.png"
              style={{ maxWidth: "50px", marginBottom: "30px" }}
            />
          </div>
        </div>
      </div>
      <div className="commentcard">
        <div className="comment_box">
          <div class="img">
            <img src="./images/comment_img1.png" />
          </div>
          <div className="text">
            <div className="head">
              <h3>JaneDoe</h3>
              <span>1 day ago</span>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                possimus harum excepturi, iure recusandae magnam corrupti vitae
                aliquid odio fugit!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="addcom">
        <img src="./images/comment_img2.png" />
        <form>
          <textarea placeholder="Write your comment..."></textarea>
        </form>
      </div>
    </Fragment>
  );
};

export default Home_Comment;
