import React, { Component } from "react";
import SocialMediaBar from "./../components/socialMediaBar";
import "font-awesome/css/font-awesome.min.css";
import "../css/signin.css";
import InputTags from "../components/inputTags";
import Cross from "./../components/cross";

class SignIn extends Component {
  returnHeading() {
    return (
      <React.Fragment>
        <div>
          <h2 className="login-heading">Login</h2>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Cross />
        {this.returnHeading()}
        <SocialMediaBar />
        <InputTags />
      </React.Fragment>
    );
  }
}

export default SignIn;
