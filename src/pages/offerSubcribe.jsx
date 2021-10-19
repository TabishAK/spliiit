import React, { Component } from "react";
import Navbar from "./../components/navbar";
import "../css/offersubcribe.css";
import BorderedInformation from "./../components/borderdInformation";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class OfferSubcribe extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content-offer-subcribe">
          <h2 className="ask">What do you want to do ?</h2>

          <center>
            <div className="btn-div container">
              <Link to="/countrySelect">
                <button className="btn-md btn-offer"> Offer </button>
              </Link>
              <Link to="/signup">
                <button className="btn-md btn-subscribe"> Subscribe </button>
              </Link>
            </div>
          </center>

          <BorderedInformation />
        </div>
      </React.Fragment>
    );
  }
}

export default OfferSubcribe;
