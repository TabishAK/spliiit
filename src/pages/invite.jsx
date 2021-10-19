import React from "react";
import "../css/invite.css";
import { useAlert } from "react-alert";
import Cross from "../components/cross";

const Invite = () => {
  let textArea = null;
  const alert = useAlert();
  const copyToClipBoard = (e) => {
    textArea.select();
    document.execCommand("copy");

    alert.show("Copied!");
  };
  return (
    <React.Fragment>
      <Cross />
      <div
        tabindex="-1"
        role="dialog"
        class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front dialog-share"
        aria-describedby="dialog-share"
        aria-labelledby="ui-id-1"
        style={{
          height: "auto",
          width: "800px",
          top: "444.444px",
          left: "349.5px",
          zIndex: "101",
        }}
      >
        <div
          id="dialog-share"
          class="ui-dialog-content ui-widget-content"
          style={{
            display: "block",
            width: "auto",
            minHeight: "150px",
            maxHeight: "none",
            height: "auto",
          }}
        >
          <div class="link-share">
            <p>
              <strong>Copy link :</strong>
            </p>

            <div class="create-myspliiit copy-share">
              <input
                ref={(textarea) => (textArea = textarea)}
                id="share-url"
                readonly="true"
                value="https://www.spliiit.com/5fc28bab29299"
              />

              <div
                onClick={copyToClipBoard}
                class="btn-copy-clipboard btn-grey"
                data-clipboard-target="#share-url"
              >
                Copy
              </div>
            </div>
          </div>
          <div class="share-social">
            <strong>
              <p>Share via social networks :</p>
            </strong>
            <div class="share-btn">
              <a
                id="facebook-btn"
                target="_BLANK"
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.spliiit.com/5fc28bab29299"
              >
                <div class="facebook-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    enable-background="new 0 0 50 50"
                  >
                    <path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path>
                  </svg>
                </div>
              </a>
              <a
                id="twitter-btn"
                target="_BLANK"
                href="https://twitter.com/intent/tweet?text=Ahsan offers to share the price of his/her subscription. Only 2 slots available, don't waste time !&amp;url=https://www.spliiit.com/5fc28bab29299&amp;original_referer=https://www.spliiit.fr/&amp;via=spliiitFR"
              >
                <div class="twitter-btn">
                  <svg
                    xmlnsDc="http://purl.org/dc/elements/1.1/"
                    xmlnsCc="http://creativecommons.org/ns#"
                    xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlnsSvg="http://www.w3.org/2000/svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="svg3626"
                    viewBox="0 0 300.00006 244.18703"
                    height="244.18703"
                    width="300.00006"
                  >
                    <defs id="defs3628"></defs>
                    <g transform="translate(-539.17946,-568.85777)" id="layer1">
                      <path
                        id="path3611"
                        style={{
                          fillOpacity: "1",
                          fillRule: "nonzero",
                          stroke: "none",
                        }}
                        d="m 633.89823,812.04479 c 112.46038,0 173.95627,-93.16765 173.95627,-173.95625 0,-2.64628 -0.0539,-5.28062 -0.1726,-7.90305 11.93799,-8.63016 22.31446,-19.39999 30.49762,-31.65984 -10.95459,4.86937 -22.74358,8.14741 -35.11071,9.62551 12.62341,-7.56929 22.31446,-19.54304 26.88583,-33.81739 -11.81284,7.00307 -24.89517,12.09297 -38.82383,14.84055 -11.15723,-11.88436 -27.04079,-19.31655 -44.62892,-19.31655 -33.76374,0 -61.14426,27.38052 -61.14426,61.13233 0,4.79784 0.5364,9.46458 1.58538,13.94057 -50.81546,-2.55686 -95.87353,-26.88582 -126.02546,-63.87991 -5.25082,9.03545 -8.27852,19.53111 -8.27852,30.73006 0,21.21186 10.79366,39.93837 27.20766,50.89296 -10.03077,-0.30992 -19.45363,-3.06348 -27.69044,-7.64676 -0.009,0.25652 -0.009,0.50661 -0.009,0.78077 0,29.60957 21.07478,54.3319 49.0513,59.93435 -5.13757,1.40062 -10.54335,2.15158 -16.12196,2.15158 -3.93364,0 -7.76596,-0.38716 -11.49099,-1.1026 7.78383,24.2932 30.35457,41.97073 57.11525,42.46543 -20.92578,16.40207 -47.28712,26.17062 -75.93712,26.17062 -4.92898,0 -9.79834,-0.28036 -14.58427,-0.84634 27.05868,17.34379 59.18936,27.46396 93.72193,27.46396"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div class="share-email">
            <p>
              <strong>Send an email :</strong>
            </p>
            <div class="create-myspliiit copy-share">
              <input
                type="email"
                name="recipients[]"
                placeholder="E-mail adress"
                autocomplete="new-password"
              />
              <div
                class="btn-greenn btn-share-sendemail"
                data-id="5fc28bab29299"
              >
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Invite;
