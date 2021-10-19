import react, { useState } from "react";
import "./paymentMethod.css";
import TransparentButton from "./../transparentButton";

export default function () {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginBottom: "10rem",
      }}
    >
      <div className="profileContentBodyContainer">
        <h3 className="profileContentBodyHeading">Payment method</h3>
        <p className="payment-info-text">
          By adding a card, you will be redirected to a payment page, for an
          amount of 0.1 €. This is a pre-authorization, the amount is
          immediately canceled.
        </p>
        <center>
          <TransparentButton />
        </center>
      </div>

      <div className="profileContentBodyContainer">
        <div className="payment-history">
          <h4 className="payment-history-heading">Payment History</h4>

          <div className="date-counter mr-3">
            <button class="btn btn-arrow mr-2">
              <i class="fa fa-arrow-left"></i>
            </button>
            <span style={{ fontWeight: 600 }}>November 2020</span>
            <button class="btn btn-arrow ml-2">
              <i class="fa fa-arrow-right "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
