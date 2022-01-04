import React, { Fragment } from 'react';
import "./Overlay.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home_Login = () => {
  function reload()  {
    window.location.reload(true); 
  }
    return (
      
        <Fragment>
               <div ClassName="modal modal-login" id="myModal">
        <div ClassName="modal-dialog modal-dialog-centered">
          <div ClassName="modal-content">
            <div ClassName="modal-header text-center" id="headerbox">
              <img src="./images/logo.png" />
              <button type="button" onClick={reload} ClassName="close" data-dismiss="modal">
                <img src="./images/close_modal.png" id="close" />
              </button>
            </div>
            <div class="modal-body">
              <h2 ClassName="text-center my-3">
                Log in to 13k13 to show your <br />
                talents to the world
              </h2>
              <ul>
                <li>
                  <a href="#">
                    <i>
                      <img src="./images/icon1.png" />
                    </i>
                    <span>Use QR Code</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <img src="./images/icon2.png" />
                    </i>
                    <span>Use phone / email / username</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <img src="./images/icon3.png" />
                    </i>
                    <span>Continue with Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <img src="./images/icon4.png" />
                    </i>
                    <span>Continue with Google</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <img src="./images/icon5.png" />
                    </i>
                    <span>Continue with Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <img src="./images/icon6.png" />
                    </i>
                    <span>Continue with Apple</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>
                      <img src="./images/icon7.png" />
                    </i>
                    <span>Continue with Instagram</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="modal-footer">
              <p>
                Don't have an account?
                <a href="#" data-toggle="modal" data-target="#myModal2">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
          </div>
        </Fragment>
    );
}

export default Home_Login;