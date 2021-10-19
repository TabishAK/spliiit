import react from "react";
import "../css/sponsorship.css";
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";

export default function () {
  return (
    <>
      <Navbar2 />
      <div className="sponsorshipContainer">
        <div className="headingAndButtonContainer">
          <h1 className="sponsorshipHeading">Referrals & gift cards</h1>
          <div className="sponsorshipSignoutButton contentCenter">Sign out</div>
        </div>

        <div className="sponsorshipBoxContainer">
          <div className="sponsorshipBox1">
            <img
              width="360"
              src="https://www.spliiit.com/img/parrain-gift.png"
            />
            <h2>Referral</h2>
            <h3>Receive €1 per active referral*</h3>
            <input
              readonly="true"
              placeholder="https://www.spliiit.com/sponsor/1684267946"
            />
            <div className="socialContainer">
              <button>Copy</button>
              <div className="socialIconDiv"></div>
              <div className="socialIconDiv"></div>
            </div>
          </div>

          <div style={{ backgroundColor: "#fff" }} className="sponsorshipBox1">
            <img width="360" src="https://www.spliiit.com/img/card-gift.png" />
            <h2>Gift card</h2>
            <h3 style={{ color: "#00cdd0" }}>
              Do you have a Spliiit gift card ?
            </h3>
            <input placeholder="Enter the code here !" />
            <div className="socialContainer">
              <button style={{ color: "#000", backgroundColor: "#fff" }}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="giftDiv">
          <img src="https://www.spliiit.com/img/gift-ico.png" />
          Do you want to offer a gift card to a friend ?
          <div className="button">Buy a gift card</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
