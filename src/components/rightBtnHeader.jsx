import React, { useState } from "react";
import "../css/rightbtnheader.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RightBtnHeader = () => {
  const [dynClass, setClass] = useState("dropdown-content2");

  const handleDropDown = () => {
    if (dynClass == "dropdown-content2") {
      setClass("dropdown-content2" + " show");
    } else {
      setClass("dropdown-content2");
    }
  };

  return (
    <Link to="/searchPage/wallet">
      <div className="btn-header-dashboard">
        <a
          className="header-cagnotte"
          href="https://www.spliiit.com/myspliiit/cagnotte"
        >
          <div className="btn-modal-cagnotte" id="gains">
            <img
              src="https://www.spliiit.com/img/zzz.png"
              className="fund-emoji"
            />
            <p className="tarif-final-dashboard cagnotte-total">
              <span data-value="0" id="compteur" className="available-funds">
                0
              </span>
              <small>€</small>
            </p>
          </div>
        </a>

        <div id="menu-account">
          <div className="avatar" onClick={handleDropDown}>
            <div className="btn-modal-infos user-avatar">
              <img
                style={{
                  borderRadius: "50%",
                  width: "50px",
                }}
                src="https://lh3.googleusercontent.com/-szU85zpJ1IQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmMWseMiSi9MTBlDUNBP9m47M0Fiw/s96-c/photo.jpg"
              />
            </div>
          </div>

          <div className={dynClass}>
            <div className="bec-notif"></div>
            <ul>
              <Link to="/personal_info">
                <li>
                  <a
                    className="personal-info"
                    href="https://www.spliiit.com/users#personal-info"
                  >
                    <span className="makeHover"> Personal informations</span>
                  </a>
                </li>
              </Link>
              <li className="documents-form">
                <a
                  className="paiement-moyen"
                  href="https://www.spliiit.com/users#paiement-moyen"
                >
                  <span className="makeHover"> Payment method</span>
                </a>
              </li>

              <li className="documents-form">
                <a
                  className="paiement-moyen"
                  href="https://www.spliiit.com/users#paiement-moyen"
                >
                  <span className="makeHover"> Trust Score</span>
                </a>
              </li>
              <li className="documents-form">
                <a
                  className="paiement-moyen"
                  href="https://www.spliiit.com/users#paiement-moyen"
                >
                  <span className="makeHover"> Money pot validation</span>
                </a>
              </li>

              <li>
                <a
                  style={{ paddingBottom: "5px" }}
                  href="https://www.spliiit.com/auth/logout"
                >
                  <span className="makeHover"> Sign out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RightBtnHeader;
