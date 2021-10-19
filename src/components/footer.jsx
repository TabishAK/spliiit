import "../css/footer.css";
import FooterCurve from "../components/svg-components/footerCurve";

export default function () {
  const RenderManus = ({ heading, items, width, type }) => {
    if (type == "menu") {
      return (
        <div style={{ width: width }}>
          <h3 className="menuHeading">{heading}</h3>
          {items.map((res, i) => {
            return (
              <div className="menuItem" key={i}>
                {res}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div style={{ width: width, textAlign: "center" }}>
          <h3 className="menuHeading">{heading}</h3>
          <div style={{ width: 260, margin: "auto" }} className="menuItem">
            Open Monday to Friday 10 a.m. to 7 p.m. +33 1 80 88 37 50 or{" "}
            <strong style={{ color: "#fff", cursor: "pointer" }}>
              by chat
            </strong>
          </div>
          <p className="customerText">4,9/5 average on Trustpilot !</p>
        </div>
      );
    }
  };
  const FlagStrip = () => {
    return (
      <div className="flagContainer">
        {[1, 2, 3, 4, 5, 6].map((res, i) => {
          return (
            <div className="flagCircle">
              <img
                style={{ width: "70%", height: "70%" }}
                src="https://www.spliiit.com/img/flag-fr.png"
                alt="fr"
                title="fr"
              />
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="footer2">
        <FooterCurve />
        <div className="footerContainer">
          <div className="menuContainer">
            <RenderManus
              type={"menu"}
              width={"30%"}
              heading="ABOUT"
              items={["FAQs", "The Spliiit Blog", "Prices", "Contact Us"]}
            />

            <RenderManus
              type={"menu"}
              width={"30%"}
              heading="LEGAL"
              items={[
                "Spliiit T&C",
                "Lemonway T&C",
                "Legal notices",
                "Privacy",
              ]}
            />

            <RenderManus
              type={"logo"}
              width={"40%"}
              heading="CUSTOMER SERVICE"
              items={["FAQs", "The Spliiit Blog", "Prices", "Contact Us"]}
            />
          </div>
          {/* <Curve /> */}

          <FlagStrip />
          <div className="companiesContainer">
            <div className="logoContainer">
              <img
                className="companyImage"
                src="https://www.spliiit.com/img/visa.png"
                alt="Logo Visa png"
                title="Logo Visa png"
              />
              <img
                className="companyImage"
                src="https://www.spliiit.com/img/mastercard.png"
                alt="Logo Visa png"
                title="Logo Visa png"
              />
              <img
                className="companyImage"
                src="https://www.spliiit.com/img/lemonway.png"
                alt="Logo Visa png"
                title="Logo Visa png"
              />
            </div>
            <p className="copyText">
              Copyright 2019 SPLIIIT SAS - All rights reserved
              <br />
              Spliiit is a partner of Lemonway, a payment institution certified
              by the ACPR in France on 12/24/2012 under number 16568J.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
