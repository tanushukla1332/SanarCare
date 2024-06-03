import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bgImg from '../../../public/Image/group.png';
import firstImg from '../../../public/Image/Sectw.png';
import secondImg from '../../../public/Image/Sectw4.png';
import thirdImg from '../../../public/Image/Sectw3.png';
import fourthImg from '../../../public/Image/Sectw2.png';

const TestBooking = () => {
  return (
    <Row className="d-xl-flex d-none py-xl-5 py-md-5 py-lg-5  py-0 justify-content-center align-items-center" style={{ backgroundColor: "#DEF0FF" }}>
      <h1 className="hed1 text-center pb-4">How to Book Your Tests</h1>
      <Col md={10} xl={10} lg={12}   style={{ position: "relative" }}>
          <img src={bgImg} alt="" className="img-fluid " />
      
        <Row className="d-lg-flex d-none  justify-content-center align-items-center" >

          <Col md={3} >
            <div className="step-column">
              <img src={firstImg} alt="" className="img-fluid" />
              <div className="hed4" >
                Book Click on <br /> Button
              </div>


            </div>
          </Col>
          <Col md={3}>
            <div className="step-column">

              <img src={thirdImg} alt="" className="img-fluid" />
              <div className="hed4 " >
                Click On  Submit
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="step-column">
              <img src={fourthImg} alt="" className="img-fluid" />
              <div className="hed4 " >
                Fill enquiry form
              </div>

            </div>


          </Col>
          <Col md={3}
          >
            <div className="step-column">
              <img src={secondImg} alt="" className="img-fluid" />
              <div className="hed4" >
                Sanar Care  booking
              </div>
            </div>

          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TestBooking;