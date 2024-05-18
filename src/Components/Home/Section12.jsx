import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bgImg from '../../../public/Image/group.png';
import firstImg from '../../../public/Image/Sectw.png';
import secondImg from '../../../public/Image/Sectw4.png';
import thirdImg from '../../../public/Image/Sectw3.png';
import fourthImg from '../../../public/Image/Sectw2.png';

const TestBooking = () => {
  return (
    <Row className="test-booking py-5 justify-content-center align-items-center" style={{backgroundColor:"#DEF0FF"}}>
      <h1 className="hed1 text-center pb-5">How to Book Your Tests</h1>
      <Col md={10} style={{position:"relative"}}>
        <div>
          <img src={bgImg} alt="" className="img-fluid" />
        </div>
        <Row className="d-flex justify-content-center align-items-center" >
        <Col md={3} className="step-column" style={{ position: "absolute", top: "90%", left: "52%", transform: "translate(-20%, -80%)" }}>
        <div className="step">
          <div className="step-icon d-flex flex-column">
            <img src={thirdImg} alt="" className="img-fluid" />
            <div className="hed4 text-center pt-2" style={{ color: '#2FAED4' }}>
                Click on Submit
                </div>

           
          </div>
         
        </div>
      </Col>
          <Col md={3} className="step-column" style={{ position: "absolute", top: "90%", left: "26%", transform: "translate(-115%, -80%)" }}> 
            <div className="step">
              <div className="step-icon d-flex flex-column">
                <img src={firstImg} alt="" className="img-fluid" />
                <div className="hed4" style={{ color: '#9ACE59' }}>
                <p>Click on Book <br /> 
                appointment <br/> button</p>
              </div>
              </div>
             
            </div>
          </Col>
          <Col md={3} className="step-column" style={{ position: "absolute", top: "95%", left: "51%", transform: "translate(-115%, -85%)" }}>
            <div className="step">
              <div className="step-icon d-flex flex-column" >
                <img src={fourthImg} alt="" className="img-fluid" />
                <div className="hed4 text-center pt-2" style={{ color: '#EA8238' }}>
                Fill enquiry form
                </div>
                
              </div>
             
            </div>
          </Col>
          <Col md={3} className="step-column" 
          style={{ position: "absolute", top: "100%",right: "-25.5%", transform: "translate(-115%, -90%)" }}>
            <div className="step">
              <div className="step-icon d-flex flex-column" >
                <img src={secondImg} alt="" className="img-fluid" />
              <div className="hed4 " style={{ color: '#D4458B' }}>
                <p>
                Sanar Care will call  <br />to book your test.</p>
                </div>
              </div>
            
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TestBooking;