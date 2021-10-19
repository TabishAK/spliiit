import React, { Component } from "react";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import Card from "../components/subscriptionCard";
import "../css/subscription.css";
import OfferSubcribe from "./offerSubcribe";
import { Link } from "react-router-dom";

class Subscription extends Component {
  state = {
    data: [{}],
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#f6f7f8" }}>
          <Navbar2 />
          <div className="container-fluid subscripton-panel">
            <div className="bloc-dashboard">
              <div className="accroche-dash">
                <h2>
                  Subscriptions <span className="count">(0)</span>
                </h2>
              </div>
              <div className="create-myspliiit">
                <a
                  href="#"
                  className="btn-add-offer add-offer btn-create-spliiit"
                  data-action="switch-add-subscription"
                >
                  Add a subscription{" "}
                </a>
              </div>
            </div>
          </div>

          {this.state.data.map((data) => {
            return (
              <div className="ml-5 container center-list width50">
                <Card />
              </div>
            );
          })}

          <Link to="/offerSubscribe">
            <div className="ml-5 container center-list width50">
              <div
                className="abo-none bloc-abo-dash add-offer"
                data-action="switch-add-subscription"
              >
                <div className="add-btn-abo">+</div>
                <p>Add a subscription</p>
              </div>
            </div>
          </Link>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Subscription;
