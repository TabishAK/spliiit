import React from "react";
import fb_logo from "../images/li-icons/facebook-connect.png";
import google_logo from "../images/li-icons/google-connect.png";
import twitter_logo from "../images/li-icons/twitter-connect.png";
import apple_logo from "../images/li-icons/apple-connect.png";
import "../css/signupList.css";
import "font-awesome/css/font-awesome.min.css";

const SignupList = (props) => {
  const icon = <i className="fa fa-chevron-right" />;
  return (
    <div className={props.classs}>
      <ul>
        <li data-action="email_password" className="signin-signup-choice">
          <a href="#/signup/who" class="signin-signup-choice">
            <strong>With my email address</strong>
          </a>
          {icon}
        </li>
        <li data-action="facebook" class="signin-signup-choice">
          <a id="button-px-fb">
            <strong>With Facebook</strong>
            <img src={fb_logo} />
          </a>
          {icon}
        </li>
        <li data-action="google" class="signin-signup-choice">
          <a id="button-px-fb">
            <strong>With Google</strong>
            <img src={google_logo} />
          </a>
          {icon}
        </li>
        <li data-action="twitter" class="signin-signup-choice">
          <a id="button-px-fb">
            <strong>With Twitter</strong>
            <img src={twitter_logo} />
          </a>
          {icon}
        </li>
        <li data-action="apple" class="signin-signup-choice">
          <a id="button-px-fb">
            <strong>With Apple</strong>
            <img src={apple_logo} />
          </a>
          {icon}
        </li>
      </ul>
    </div>
  );
};

export default SignupList;
