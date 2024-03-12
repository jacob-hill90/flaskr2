import React from "react";
import splash from "../assets/splashImage.jpg";

function SplashImage() {
  return (
    <div className="bg-image">
      <div className="splash-top"></div>
      <img src={splash} className="img-fluid" alt="splash" />
      <div className="splash-bottom"></div>
      <div className="about">
        <h1 className="about-head">Fish smarter with Fishtories</h1>
        <div className="about-points">
          <h5>
            Whether you're a novice angler or an experienced pro, Fishtories
            equips you with the essential tools and information to elevate your
            performance every time you venture onto the water. Explore the
            crowd-sourced catch map to discover the latest catches in your area,
            gaining valuable insights from fellow anglers. Join us today to
            enhance your fishing prowess and maximize your potential for a
            successful day on the water.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SplashImage;
