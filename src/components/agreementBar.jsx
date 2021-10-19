import React, { Component } from "react";
import "../css/agreementbar.css";
class AgreementBar extends Component {
  render() {
    return (
      <div className="purple-bar cgu-suscribe cgu-bloc-subscribe d-flex justify-content-center">
        <h3 className="agreement">
          <label for="use-condition" className="radio term-radio">
            <input
              id="use-condition"
              type="checkbox"
              name="use-condition"
              value="1"
              className="use_condition hidden"
            />
            <span onClick={this.props.blurContent} className="label"></span>
            <span className="content-txt font-size-cgu">
              I have read the
              <a
                style={{ color: "#00cdd0" }}
                href="https://www.spliiit.com/en/terms-conditions"
                target="_BLANK"
              >
                {" "}
                Terms
              </a>
            </span>
          </label>
        </h3>
      </div>
    );
  }
}

export default AgreementBar;
