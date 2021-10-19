import React from "react";
import "../css/wallet.css";
import Navbar2 from "./../components/navbar2";
import Footer from "./../components/footer";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <React.Fragment>
      <Navbar2 />
      <div className="hidden-responsive mt-5">
        <section className="container-3">
          <div className="bloc-dashboard">
            <div className="accroche-dash">
              <h2>My money pot</h2>
            </div>
            <div className="create-myspliiit">
              <Link to="/searchPage/wallet/cagnote">
                <div
                  className="btn-add-offer modal-trigger"
                  data-modal="buy-giftcard"
                >
                  <div className="add-fund-cagnotte">+</div>
                  Refill my money pot{" "}
                </div>
              </Link>
            </div>
          </div>
          <div id="cagnotte" className="cagnotte-container">
            <div className="width50 bloc-white info-paiement">
              <div className="bloc-info-delais waiting-cagnotte">
                <p>Account balance</p>
                <h3>
                  0<span className="euro-color">€</span>
                </h3>
              </div>
            </div>
            <div className="width50 bloc-white info-paiement bloc-blue">
              <div className="coin-spliiit2">
                <img src="https://www.spliiit.com/img/coin-spliiit2.png" />
              </div>
              <div className="coin-spliiit">
                <img src="https://www.spliiit.com/img/coin-spliiit.png" />
              </div>
              <p>Validated funds</p>
              <h3>
                0<span className="euro-color-white">€</span>
              </h3>
            </div>
          </div>
          <div className="history-paiements bloc-white">
            <h3>Payment history</h3>
            <div className="annual-virement">
              <div
                className="prev-annual fetch-withdraws annual-none"
                data-year=""
              ></div>
              <span className="current-year">2020</span>
              <div
                className="next-annual fetch-withdraws annual-none"
                data-year=""
              ></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Wallet;
