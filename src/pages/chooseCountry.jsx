import React from "react";
import Navbar from "./../components/navbar";
import "../css/choosecountry.css";
import flag_be from "../images/flags/flag-be.png";
import flag_br from "../images/flags/flag-br.png";
import flag_ca from "../images/flags/flag-ca.png";
import flag_ch from "../images/flags/flag-ch.png";
import flag_de from "../images/flags/flag-de.png";
import flag_en from "../images/flags/flag-en.png";
import flag_es from "../images/flags/flag-es.png";
import flag_fr from "../images/flags/flag-fr.png";
import flag_gb from "../images/flags/flag-gb.png";
import flag_it from "../images/flags/flag-it.png";
import flag_pt from "../images/flags/flag-pt.png";
import flag_us from "../images/flags/flag-us.png";

const ChooseCountry = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="content-box-countries">
        <div class="register-steps text-center">
          <center>
            <div class="select-country-modal view">
              <h1>Choose your country</h1>
              <div class="list-country">
                <li>
                  <div data-id="18" class="bloc-country">
                    <img src={flag_be} />
                    Belgique
                  </div>
                </li>
                <li>
                  <div data-id="25" class="bloc-country">
                    <img src={flag_br} />
                    Brasil
                  </div>
                </li>{" "}
                <li>
                  <div data-id="37" class="bloc-country">
                    <img src={flag_ca} />
                    Canada
                  </div>
                </li>
                <li>
                  <div data-id="84" class="bloc-country">
                    <img src={flag_ch} />
                    Deutschland
                  </div>
                </li>{" "}
                <li>
                  <div data-id="203" class="bloc-country">
                    <img src={flag_de} />
                    España
                  </div>
                </li>{" "}
                <li>
                  <div data-id="75" class="bloc-country">
                    <img src={flag_en} />
                    France
                  </div>
                </li>{" "}
                <li>
                  <div data-id="109" class="bloc-country">
                    <img src={flag_es} />
                    Italia
                  </div>
                </li>
                <li>
                  <div data-id="175" class="bloc-country">
                    <img src={flag_fr} />
                    Portugal
                  </div>
                </li>{" "}
                <li>
                  <div data-id="210" class="bloc-country">
                    <img src={flag_pt} />
                    Suisse
                  </div>
                </li>
                <li>
                  <div data-id="228" class="bloc-country">
                    <img src={flag_it} />
                    United Kingdom
                  </div>
                </li>
                <li>
                  <div data-id="231" class="bloc-country">
                    <img src={flag_us} />
                    United States
                  </div>
                </li>
              </div>
            </div>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChooseCountry;
