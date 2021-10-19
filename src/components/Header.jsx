import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import Image from "../images/uchelogo.png";
import Circle from "../images/Circle.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <div>
      <img src={Circle} alt="circle" className="circle" />
      <Container class="toCheck">
        <Row>
          <Col xs={12} sm={12} className="HeaderTitile">
            <img src={Image} alt="image1" className="Imagelogo" />
          </Col>
          <Col xs={12} sm={12} className="Btn">
            <Link to="/signup">
              <Button className="Sign-btn">Sign Up</Button>
            </Link>
            <Link to="/signin">
              <Button className="Login-btn">Log In</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
