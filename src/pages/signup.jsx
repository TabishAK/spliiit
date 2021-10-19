import React, { Component } from "react";
import "../css/signup.css";
import Navbar from "../components/navbar";
import AgreementBar from "../components/agreementBar";
import SignupList from "../components/signupList";

class SignUp extends Component {
  state = {
    classOfSpan: "choice-suscribe hide",
  };

  blurContent = () => {
    console.log("Hello");
    let classOfSpan = this.state.classOfSpan;
    if (classOfSpan === "choice-suscribe hide") {
      classOfSpan = "choice-suscribe un-hide";
    } else {
      classOfSpan = "choice-suscribe hide";
    }
    this.setState({ classOfSpan });
  };

  renderHeading() {
    return <h1 className="head">I create my account</h1>;
  }

  renderText() {
    return (
      <p style={{ fontWeight: "630" }}>
        Already a member ?{" "}
        <a href="#" style={{ color: "#e51c5c" }}>
          Login
        </a>
      </p>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="signup-component mt-5">
          {this.renderHeading()}
          <center>
            <AgreementBar blurContent={this.blurContent} />
            <SignupList classs={this.state.classOfSpan} />
            {this.renderText()}
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
