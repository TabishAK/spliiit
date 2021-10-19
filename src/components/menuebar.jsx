import React, { Component } from "react";
import Blocks from "./../components/svg-components/blocks";
import Shoping from "../components/svg-components/shoping";
import Gift from "./../components/svg-components/gift";
import logo from "../images/logo-spliiit.png";
import DropDown from "./dropDown";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class MenueBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">
          <img src={logo} className="logo-spliiit" />
        </Link>
        <center>
          <ul className="makeLine">
            <li>
              <Link to="/dashboard">
                {" "}
                <Blocks />
              </Link>
            </li>
            <li>
              <Link to="/searchpage">
                <Shoping />
              </Link>
            </li>
            <li>
              <DropDown />
            </li>
            <li>
              <Link to="/sponsorship">
                <Gift />
              </Link>
            </li>
          </ul>
        </center>
      </React.Fragment>
    );
  }
}

export default MenueBar;
