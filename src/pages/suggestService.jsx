import React from "react";
import "../css/suggestService.css";

const SuggestService = () => {
  return (
    <div class="popup-info-cagnotte width-suggest-service">
      <div class="myaccount verif-acpr">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 86.6 95"
          style={{ enableBackground: "new 0 0 86.6 95" }}
          xmlSpace="preserve"
        >
          <g id="Calque_2"></g>
          <g id="Calque_1">
            <g>
              <path
                d="M86.6,60.1L77.5,35c-0.4-1-1.3-1.7-2.4-1.7H63.5V2.5C63.5,1.1,62.4,0,61,0H25.6c-1.4,0-2.5,1.1-2.5,2.5v30.8H11.5
                        c-1.1,0-2,0.7-2.4,1.7L0,60.1c-0.1,0.3-0.2,0.6-0.2,0.9v31.5c0,1.4,1.1,2.5,2.5,2.5H84c1.4,0,2.5-1.1,2.5-2.5V61
                        C86.7,60.7,86.7,60.4,86.6,60.1z M58.4,5.1v40.8H28.2V5.1H58.4z M13.3,38.4h9.8v7.5h-2.9c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5
                        h46.2c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5h-2.9v-7.5h9.8l7.2,20H6L13.3,38.4z M5,89.9V63.5h76.7v26.4H5z"
              ></path>
              <path
                d="M39.3,31.8c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.3,1.8-0.7l9.2-9.2c1-1,1-2.6,0-3.6s-2.6-1-3.6,0l-7.4,7.4l-3-3
                        c-1-1-2.6-1-3.6,0s-1,2.6,0,3.6L39.3,31.8z"
              ></path>
            </g>
          </g>
        </svg>
        <h1>Suggest a service</h1>
        <div class="warning_subscriber">
          <div class="circle-warning">!</div>
          We analyze each service to verify if it is compliant and available for
          sharing. Please send us the information below.{" "}
        </div>
        <form enctype="multipart/form-data" method="post">
          <ul>
            <li>
              <p class="infos-account">Service name :</p>

              <div class="data-account">
                <div class="form-user profile-form">
                  <input
                    class="service-suggestion-form-name"
                    name="name"
                    type="text"
                    placeholder="Ex : Netflix"
                    required=""
                  />
                </div>
              </div>
            </li>
            <li>
              <p class="infos-account">Service URL :</p>
              <div class="data-account">
                <div class="form-user profile-form">
                  <input
                    class="service-suggestion-form-service_url"
                    name="service_url"
                    type="url"
                    placeholder="Ex : www.netflix.com"
                    required=""
                  />
                </div>
              </div>
            </li>
            <li>
              <p class="infos-account">Offer page :</p>
              <div class="data-account">
                <div class="form-user profile-form">
                  <input
                    class="service-suggestion-form-offer_url"
                    name="offer_url"
                    type="url"
                    placeholder="Ex : www.netflix.com/offres"
                    required=""
                  />
                  <input type="hidden" />
                </div>
              </div>
            </li>
            <li class="d-none">
              <p class="infos-account">Your email :</p>
              <div class="data-account">
                <div class="form-user profile-form">
                  <input
                    class="service-suggestion-form-email"
                    name="email"
                    type="email"
                    value="12ahsanali34@gmail.com"
                    placeholder="myEmail@gmail.com"
                    required=""
                  />
                  <input type="hidden" />
                </div>
              </div>
            </li>
          </ul>
          <div class="line-valid-info">
            <button class="service-suggestion-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuggestService;
