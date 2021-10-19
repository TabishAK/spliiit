import React from "react";
import "../css/socialMediabar.css";
import "font-awesome/css/font-awesome.min.css";

const SocialMediaBar = () => {
  return (
    <center>
      <div className="socialmedia">
        <a target="_blank">
          <i className="fa fa-facebook"></i>
        </a>
        <a target="_blank">
          <i className="fa fa-google"></i>
        </a>

        <a target="_blank">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>

        <a target="_blank">
          <i className="fa fa-apple"></i>
        </a>
      </div>
    </center>
  );
};

export default SocialMediaBar;
