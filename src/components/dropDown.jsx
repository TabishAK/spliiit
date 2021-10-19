import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import Notification from "./../components/svg-components/notification";
import "../css/dropdown.css";

class DropDown extends Component {
  state = {
    notifications: [
      {
        id: 1,
        message: "You read it all!",
        icon: "https://www.spliiit.com/img/bravo.png",
        userIcon: "",
      },
    ],
  };
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
          }}
          id="dropdown-basic"
        >
          <Notification />
        </Dropdown.Toggle>
        <Dropdown.Menu className="hello">
          <div id="block-notif" className=" postit-content block-notif show">
            <h3
              style={{
                right: "97px",
                fontSize: "16px",
                position: "relative ",
                top: "10px",
              }}
            >
              Notifications
            </h3>{" "}
            <hr
              style={{
                marginLeft: "-122px",
                minWidth: "337%",
              }}
            />
            <div
              style={{
                marginTop: "-20px",
                marginBottom: "-5px",
                marginLeft: "-120px",
              }}
              className="d-flex align-items-center justify-content-center w-100 notif-emoji"
            >
              <span>{this.state.notifications[0].message}</span>
              <img
                src={this.state.notifications[0].icon}
                className="notification-emoji"
              />
            </div>
            <a
              className="goto-notifs"
              href="https://www.spliiit.com/myspliiit/notifications"
            >
              View all notifications
            </a>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropDown;
