import React, { useState } from "react";
import Cross from "../components/cross";
import "../css/cagnote.css";
const Cagnote = () => {
  const [count, setCount] = useState(10);

  const onIncrease = () => {
    setCount(count + 5);
  };

  const onDecrease = () => {
    if (count > 5) {
      setCount(count - 5);
    }
  };

  return (
    <React.Fragment>
      <Cross />
      <div
        tabindex="-1"
        role="dialog"
        className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front dialog-buy-giftcard"
        aria-describedby="dialog-buy-giftcard"
        aria-labelledby="ui-id-4"
        style={{
          height: "auto",
          width: "800px",
          top: "0px",
          left: "300.5px",
          zIndex: 101,
        }}
      >
        <div
          id="dialog-buy-giftcard"
          className="giftcard-modal ui-dialog-content rui-widget-content"
          style={{
            display: "block",
            width: "auto",
            minHeight: "130px",
            maxHeight: "none",
            height: "auto",
          }}
        >
          <h1>Recharge and gift card</h1>
          <p>Do you want to top up your money pot or offer a gift card ?</p>
          <img
            src="https://www.spliiit.com/img/bonhomme-netflix.png"
            className="gift-bonhomme1"
          />
          <img
            src="https://www.spliiit.com/img/bonhomme-netflix2.png"
            className="gift-bonhomme2"
          />
          <div className="amount-giftcard">
            <h3>Amount to be credited :</h3>
            <div className="range-chiffre">
              <div className="line-suscribe flex">
                <div
                  data-action="decrease"
                  className="btn-range"
                  style={{ lineHeight: "40px" }}
                  onClick={onDecrease}
                >
                  -
                </div>
                <div className="tarif-range">
                  <input
                    type="text"
                    maxlength="4"
                    value={count}
                    readonly=""
                    name="amount"
                    required="required"
                    className="input-range"
                  />
                  <div className="signe-euro">€</div>
                </div>
                <div
                  data-action="increase"
                  className="btn-range"
                  onClick={onIncrease}
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div className="offer-friend">
            <h3>Would you like to offer a gift card ?</h3>
            <div className="statut-paiement-cagnotte">
              <span
                style={{
                  top: "12px",
                  position: "relative",
                  right: "42px",
                }}
              >
                No
              </span>
              <div className="card">
                <label for="tooffer-switch">
                  <input type="checkbox" id="tooffer-switch" />
                  <span className="switch"></span>
                  <span className="toggle"> </span>
                </label>
              </div>
              <span
                style={{
                  position: "relative",
                  top: "12px",
                }}
              >
                Yes
              </span>
            </div>
            <div className="mail-friend d-none">
              Who do you want to send it to ?
              <input
                placeholder="E-mail du bénéficiaire"
                type="email"
                id="friend-mail"
              />
            </div>
          </div>
          <div className="payment-giftcard">
            <h3>Select the payment method* :</h3>
            <div className="choice-payment">
              <div
                className="cagnotte-giftcard paiement-method d-none"
                data-method="wallet"
              >
                <img src="https://www.spliiit.com/img/logo.png" />
                <span>My money pot (0€)</span>
              </div>
              <div className="cb-giftcard paiement-method" data-method="card">
                <img src="https://www.spliiit.com/img/visa-mastercard.png" />
                <span>Credit card</span>
              </div>
              <div
                className="paypal-giftcard paiement-method"
                data-method="paypal"
              >
                <img src="https://www.spliiit.com/img/paypal-blanc.png" />
                <span>Paypal**</span>
              </div>
            </div>
            <small>* Added funds and gift cards cannot be refunded.</small>
            <small>** Paypal payment with commission of 2.9% + 0.35 €</small>
          </div>
          <form
            action="https://www.spliiit.com/checkout-giftcard/prepare"
            method="post"
            id="default-form"
          >
            <input
              type="hidden"
              name="_token"
              value="D5V9IsiuodRYd3pycWVzSzI95hLq8dwy53RW71xv"
            />
            <input type="hidden" name="amount" />
            <input type="hidden" name="dest" value="" />
            <input type="hidden" name="payment_method" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cagnote;
