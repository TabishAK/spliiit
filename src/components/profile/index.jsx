import react, { useState } from "react";
import PersonalInfo from "./personalInfo";
import PaymentMathod from "./paymentMathod";
import Navbar2 from "../navbar2";
import Footer from "../footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

export default function (props) {
  let location = useLocation();
  console.log(location.pathname);
  const [isPersonal, setIsPersonal] = useState(
    location.pathname == "/personal_info" ? 0 : 1
  );

  return (
    <>
      <Navbar2 />
      <div className="profileBody">
        <div className="headingAndButtonContainer">
          <h1 className="profileHeading">My account</h1>
          <div className="profileSignoutButton contentCenter">Sign out</div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="selectionDivContainer">
            <div
              onClick={() => setIsPersonal(0)}
              className={
                isPersonal == 0
                  ? "selectionDivChild bg-blue"
                  : "selectionDivChild"
              }
            >
              <p className="selectionDivChildText">Personal informations</p>
              <FontAwesomeIcon
                style={{ position: "initial", margin: 0 }}
                color="white"
                icon={faChevronRight}
              />
            </div>
            <div
              onClick={() => setIsPersonal(1)}
              className={
                isPersonal == 1
                  ? "selectionDivChild bg-blue"
                  : "selectionDivChild"
              }
            >
              <p className="selectionDivChildText">Payment method</p>
              <FontAwesomeIcon
                style={{ position: "initial", margin: 0 }}
                color="white"
                icon={faChevronRight}
              />
            </div>
          </div>
          {isPersonal ? <PaymentMathod /> : <PersonalInfo />}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
