import React from "react";
import { Col, Container } from "react-bootstrap";
import SearchBox from "../images/SearchBox.png";
function SeacrhBar() {
  return (
    <div className="SeacrhBar">
      <img src={SearchBox} alt="SearchBox" className="SearchBox" />
      <Container className="search" fluid="sm">
        <Col xs={6}>
          <input
            placeholder="Search a subscription..."
            className="input"
            type="text"
          ></input>
        </Col>
      </Container>
    </div>
  );
}

export default SeacrhBar;
