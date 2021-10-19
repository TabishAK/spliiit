import React, { useState } from "react";
import Navbar2 from "./../components/navbar2";
import Footer from "./../components/footer";
import "../css/shareSubscription.css";
import { Link } from "react-router-dom";

const ShareSubscription = () => {
  const [radioButtons, setRadioButtons] = useState({
    buttonsName: [
      { id: 1, name: "SVOD" },
      { id: 2, name: "Music" },
      { id: 3, name: "E-Commerce" },
      { id: 4, name: "Video Games" },
      { id: 5, name: "Software" },
      { id: 6, name: "Security" },
      { id: 7, name: "Reading" },
      { id: 8, name: "Cloud" },
      { id: 9, name: "Well-being" },
    ],

    products: [
      {
        id: 1,
        categoryName: "SVOD",
        imgSrc: "https://www.spliiit.com/img/subscription/netflix.png",
      },
      {
        id: 2,
        categoryName: "SVOD",
        imgSrc: "https://www.spliiit.com/img/subscription/disneyplus.png",
      },
      {
        id: 3,
        categoryName: "SVOD",
        imgSrc: "https://www.spliiit.com/img/subscription/youtubepremium.png",
      },
      {
        id: 4,
        categoryName: "SVOD",
        imgSrc: "https://www.spliiit.com/img/subscription/appletv.png",
      },
      {
        id: 5,
        categoryName: "SVOD",
        imgSrc: "https://www.spliiit.com/img/subscription/starzplay.png",
      },
      {
        id: 6,
        categoryName: "SVOD",
        imgSrc: "https://www.spliiit.com/img/subscription/mubi.png",
      },
      {
        id: 7,
        categoryName: "SVOD",
        imgSrc:
          "https://www.spliiit.com/storage/img/subscription/nfl-game-pass.png",
      },
    ],
  });

  return (
    <React.Fragment>
      <Navbar2 />
      <div className="register-steps text-center">
        <section
          id="registration-card2"
          className="etape-subscribe container view"
        >
          <h1>
            <span>Select the subscription to share</span>
          </h1>
          <div className="btn-subscription">
            <div className="create-myspliiit">
              <ul>
                {radioButtons.buttonsName.map((button) => (
                  <li>
                    <label className="radio">
                      <input
                        type="radio"
                        name="theme"
                        className="hidden"
                        value={button.id}
                      />
                      <span className="label"></span>
                      {button.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>{" "}
          <div>
            <div className="bloc-offers-subscribe">
              <ul className="list-offers-subscribe">
                {radioButtons.products.map((product) => (
                  <li>
                    <div
                      data-service="Netflix"
                      className="bloc-whitee etape-choix"
                    >
                      <div className="select-valid"></div>{" "}
                      <img
                        src={product.imgSrc}
                        alt="logo Netflix"
                        title="Netflix"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="add-abo-suggest">
            <p className="no-name-subscribe">
              Your subscription is not on the list?
            </p>{" "}
            <Link to="/sharesubScription/addSubscription">
              <div className="btn-greenn inline-block">
                Add your subscription
              </div>
            </Link>
            <Link to="/sharesubScription/suggestService">
              <div
                data-modal="suggest-service"
                className="btn-greenn inline-block btn-suggest modal-trigger"
              >
                Suggest a service
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ShareSubscription;
