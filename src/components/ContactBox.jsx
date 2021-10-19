import { Col, Container, Row, Button } from "react-bootstrap";
import Image1 from "../images/002.png";
import Image2 from "../images/003.png";
import Image3 from "../images/004.png";
import Layer from "../images/Layer.png";

function ContactBox() {
  return (
    <div>
      <img src={Layer} alt="Layer" className="layer" />

      <div className="ContactBox">
        <Container>
          <Row>
            <Col className="icon">
              <Row className="justify-content-md-center">
                <img src={Image1} alt="image" className="twitter" />

                <img src={Image2} alt="image" className="instagram" />

                <img src={Image3} alt="image" className="facebook" />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="Contact-header">Contact</div>
              <p className="Contact-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
            </Col>
            <Col md={4}>
              <div className="Contact-header">Office</div>
              <p className="Contact-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
            </Col>
            <Col md={4}>
              <div className="Contact-header">Location</div>
              <p className="Contact-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactBox;
