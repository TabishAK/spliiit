import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";

const Details = () => {
  return (
    <div
      class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front charter-owner-dialog not-social"
      aria-describedby="dialog-charter-owner"
      aria-labelledby="ui-id-10"
      style={{
        height: "auto",
        width: "600px",
        top: " 0px",
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 101,
      }}
    >
      <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix">
        <span id="ui-id-10" class="ui-dialog-title">
          Owner's charter
        </span>
      </div>
      <div
        id="dialog-charter-owner"
        class="ui-dialog-content ui-widget-content"
        style={{
          display: "block",
          width: "auto",
          minHeight: "130px",
          maxHeight: "none",
          height: "auto",
        }}
      >
        <div class="header-charter">
          <h2>Owner's charter</h2>
        </div>
        <div class="regle-chart">
          <img src="https://www.spliiit.com/img/house-owner.png" />
          <h3>Must be the owner of the proposed offer</h3>
          <p>
            We reserve the right to ask you for invoices for your subscriptions
            and to block your account if any doubt remains.
          </p>
          <img src="https://www.spliiit.com/img/search-ico.png" />
          <h3>
            Make sure that the proposed offer corresponds to the referenced
            offer
          </h3>
          <p>
            Before offering your subscription in public, please check that it
            allows simultaneous connections and that it matches the offers we
            have listed for the Marketplace.
          </p>
          <img src="https://www.spliiit.com/img/world-partage.png" />
          <h3>Offer a subscription purchased from another country</h3>
          <p>
            The subscriptions offered must respect the current prices in the
            owner's country of residence. Spliiit was created in order to save
            money by sharing costs between co-subscribers. Under no
            circumstances can you expect any compensation for sharing a
            subscription.
          </p>
          <img src="https://www.spliiit.com/img/arret-abo.png" />
          <h3>Cancel a subscription</h3>
          <p>
            The service must be provided for a minimum of 30 days to each
            co-subscriber. Stopping a subscription without notice automatically
            results in a refund of all Spliiiters with withdrawal from the
            owner's money pot.
          </p>
          <img src="https://www.spliiit.com/img/free-trial.png" />
          <h3>Use of promotional offers</h3>
          <p>
            The first free months of an offer can be offered on the Marketplace
            as long as the subscription is renewed after the trial period. The
            account will be suspended if the credentials are changed every
            month.
          </p>
        </div>
        <Link to="/">
          <button
            id="btn-close"
            class="btn-green convention-accept"
            data-type="owner"
          >
            I understood &amp; I accept!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
