import React from "react";

const InputTags = () => {
  return (
    <center>
      <p className="mt-3">Or with your email</p>
      <hr className="gray-line" />

      <div className="inner-addon left-addon">
        <i className="fa fa-user"></i>
        <input
          type="text"
          className="form-control"
          placeholder="E-Mail Adress"
        />
      </div>
      <div className="inner-addon left-addon">
        <i className="fa fa-lock"></i>
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Password"
        />
      </div>
      <button className="btn-md btn-login">Login</button>
      <p className="forgot-password">
        Forgot password ? <a href="#">Click here</a>
      </p>

      <p>
        <b>
          You don't have an account ? <a href="#">Subscribe</a>
        </b>
      </p>
    </center>
  );
};

export default InputTags;
