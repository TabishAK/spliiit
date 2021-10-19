import React from 'react';
import {Col, Container,Row,Button} from 'react-bootstrap'
import Image from '../images/005.png'

function Slider() {
  return (
    <div  className="slider">
<Container>
        <Row >
            <Col sm={12} lg={8}>
            <Row className="Slider-title-one">
                Spend Less,
            </Row>
            <Row className="Slider-title-two">
                enjoy more !
            </Row>
            <Row className="Slider-title-three">
                Enjoy and have fun peace out!
            </Row>
            <Row className="Slider-title-three">
                <Button className="Start-btn">Start!</Button>
            </Row>
            </Col>
            <Col sm={12} lg={4}>
            <img src={Image} alt="image1" className="Image" />

            </Col>
        </Row>
</Container>
    </div>
  );
}

export default Slider;
