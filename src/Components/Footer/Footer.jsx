import { Col, Row } from "react-bootstrap";
import logo from '../../../public/Image/sanar-care-logo.png';
import youTube from '../../../public/Image/youtube_1384060 1.png';
import Fb from '../../../public/Image/Fbicon.png';
import phone from '../../../public/Image/phoneIcon.png';
import mail from '../../../public/Image/mail.png';


import './Footer.css'
 

export default function Footer(){
    return(
        <>
        <Row style={{boxShadow: "0px 15px 20px 10px #00000040"}} className="d-flex justify-content-center align-items-center pt-3 pb-2">
        <Col md={10}>
        <nav className="footer-nav">
        <ul className="d-flex justify-content-between  align-items-center">
        <li><img src={logo} alt=""  className="img-fluid" style={{ height: "50px" }}/></li>
        <li>QUICK LINKS</li>
        <li style={{marginRight:"100px",position:"relative"}}>GET IN TOUCH</li>
        </ul>
        </nav>
   
        
        </Col>
        </Row>
        <Row style={{backgroundColor:"#46A4D9"}}  className="d-flex justify-content-center align-items-center py-3">
        <Col md={10} className="d-flex justify-content-between">
        <div className="col-md-4">
        <p className="para text-white text-left">Sanar Care is a premier provider of radiology 
        services dedicated to delivering precise 
        diagnostics and compassionate care. With 
        state-of-the-art technology and a team of 
        experienced professionals, we ensure 
        accurate and timely results for our patients. 
        Our commitment extends beyond imaging; 
        we prioritize patient comfort and well-being 
        throughout their healthcare journey. 
        Whether it's X-rays, CT scans, MRI scans, or 
        ultrasound, Sanar Care offers comprehensive 
        radiology services tailored to meet the 
        individual needs of each patient, ensuring 
        peace of mind and optimal outcomes.</p>
        </div>
        <div className="col-md-3">
        <p className="para text-white text-left">Metropolis  delhi <br />
        Mahajan Diagnostic Gurgaon <br />
        Mahajan Diagnostic Delhi <br />
        Rubik Imaging And Diagnostics <br />
        Indigo <br />
        Verizone <br />
        Nueclear</p>
        <div>
        <h4 className="hed4 text-white">FOLLOW US</h4>
        <div className="d-flex  gap-3">
        <img src= {Fb} alt="" className="img-fluid" />
        <img src= {youTube} alt="" className="img-fluid" />
        </div>
       
        </div>
        </div>
        <div className="col-md-3" >
        <p className="text-white text-left para">
       <span className="d-flex gap-1 text-center  align-items-center pb-1">
       <img src={phone} alt=""  className="img-fluid"/>7042148149 (Delhi NCR)</span>
       <span className="d-flex gap-1 text-center  align-items-center pb-1">  <img src={phone} alt=""    className="img-fluid"/>73031 99700 (Jaipur)</span>
       <span className="d-flex gap-1 text-center  align-items-center">
       <img src={mail} alt=""  className="img-fluid"/> info@sanarcare.in</span></p>
        <p className=" fw-bold text-white text-left para ">Locate Sanar Care</p>
        <p className="text-white text-left para">962, First Floor, Sector 7,  
        Gurgaon, Haryana 122001 
        Ground Times square 
        Building, near Huda City  
        Metro Station, Sushant Lok  
        Phase I, Sector 43
        Gurugram, Haryana 122002
        165 P, Rd No D-13 A, Ardee
        City, Block D, Sector 52, 
        Gurugram, Haryana 122003</p>
        </div>
        
        </Col>
        </Row>
        <Row style={{backgroundColor:"#46A4D9"}}  className="d-flex justify-content-center align-items-center   pb-3">
        <Col className="d-flex justify-content-center align-items-center pt-3" style={{borderTop:"1px solid white",borderBottom:"1px solid white"}}>
        <p className="para text-white">Copyright 2023 | Sanar Care</p>
        </Col>
        </Row>
        
        </>
    )
}