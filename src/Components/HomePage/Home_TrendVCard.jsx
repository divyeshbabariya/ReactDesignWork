import React, { Fragment } from "react";
import "./Home_TrendVCard.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";  

const Home_TrendVCard = () => {
  const trendvdata = [
    {
      title: "ShorMovie",
      name: "Tracy",
      view: 250000,
      image: "./images/vtrend1.png",
    },
    {
      title: "Dance Movie",
      name: "Jasper Klass",
      view: 240000,
      image: "./images/vtrend2.png",
    },
    {
      title: "Sad Song",
      name: "Willium Ford",
      view: 200000,
      image: "./images/vtrend3.png",
    },
    {
      title: "Ballaet",
      name: "Dance Group",
      view: 190000,
      image: "./images/vtrend4.png",
    },
    {
      title: "The Wood",
      name: "Movie Chennel",
      view: 200000,
      image: "./images/vtrend5.png",
    },
  ];

  return (
      <Fragment>
          
      {trendvdata.map((data) => {
        return (
          <div className="line mt-3 px-4">
            <div className="left">
              <img src={data.image} alt="vimage" />
              <div className="names">
                <h6>{data.title}</h6>
                <p>{data.name}</p>
              </div>
            </div>
            <div className="right">
              <i class="fas fa-eye"></i> <p>{data.view}</p>
            </div>
          </div>
        );
      })};
          <p className="text-center bottom">See All <i class="fas fa-angle-double-right"></i></p>
    </Fragment>
  );
};

export default Home_TrendVCard;
