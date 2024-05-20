import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bgImg from '../../../public/Image/group.png';
import firstImg from '../../../public/Image/Sectw.png';
import secondImg from '../../../public/Image/Sectw4.png';
import thirdImg from '../../../public/Image/Sectw3.png';
import fourthImg from '../../../public/Image/Sectw2.png';

const TestBooking = () => {
  return (
    <Row className="d-lg-flex d-none py-5 justify-content-center align-items-center" style={{backgroundColor:"#DEF0FF"}}>
      <h1 className="hed1 text-center pb-5">How to Book Your Tests</h1>
      <Col md={10} style={{position:"relative"}}>
        <div>
          <img src={bgImg} alt="" className="img-fluid" />
        </div>
        <Row className="d-lg-flex d-none  justify-content-center align-items-center" >
        
          <Col md={3} > 
            <div className="step-column1">
              <div className="step-icon">
                <img src={firstImg} alt="" className="img-fluid" />
                <div className="hed4" style={{ color: '#9ACE59' }}>
                Book Click on <br/> Button
              </div>
              </div>
             
            </div>
          </Col>
          <Col md={3}>
        <div className="step-column2">
          <div className="step-icon ">
            <img src={thirdImg} alt="" className="img-fluid" />
            <div className="hed4 " style={{ color: '#2FAED4' }}>
                Click On  Submit
                </div>

           
          </div>
         
        </div>
      </Col>
          <Col md={3}>
            <div className="step-column3">
              <div className="step-icon" >
                <img src={fourthImg} alt="" className="img-fluid" />
                <div className="hed4 " style={{ color: '#EA8238' }}>
                Fill enquiry form
                </div>
                
              </div>
             
            </div>
          </Col>
          <Col md={3} 
          >
            <div className="step-column4">
              <div className="step-icon " >
                <img src={secondImg} alt="" className="img-fluid" />
              <div className="hed4 " style={{ color: '#D4458B' }}>
                 Sanar Care will call  <br />to book your test.
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