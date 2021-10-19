import React from "react";
import "../css/borderedinformation.css";

const BorderedInformation = () => {
  return (
    <div class="bloc-facile">
      <h3>Easy !</h3>
      <p style={{ marginTop: "20px", fontFamily: "gilroyregular" }}>
        <strong>Offer a subscription :</strong> <br /> I am the owner of a
        subscription and I want to share it.
      </p>
      <p>
        <strong>Subscribe:</strong> <br />I am looking for a subscription and
        wish to subscribe to it.
      </p>
    </div>
  );
};

export default BorderedInformation;
