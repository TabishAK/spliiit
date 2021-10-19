import React from 'react';
import {Col, Container,Row,Button} from 'react-bootstrap'
import Image from '../images/006.png'




function DetailBox() {
  return (
    <div  className="slider">
<Container>
        <Row >
            
            <Col xs={6} md={6} sm={12}>
                <img src={Image} alt="image1" className="Image" />
            </Col>
            <Col className="text-left"> 
                <Row className="Detail-box-1">
                    Are you
                </Row>
                <Row className="Detail-box-2">
                    Owner ?
                </Row>
                <Row className="Detail-box-3">
                    Share your subcription fees and save money !
                </Row>
                <Row className="Detail-box-4">
                    Share your remaining slot on the platform and find co-subscribes bers to split the cost of your subcirption ....
                </Row>
                <Row className="Slider-title-three">
                    <Button className="Start-btn">Suggest a subcription!</Button>
                </Row>
            </Col>
        </Row>
</Container>
    </div>
  );
}

export default DetailBox;
