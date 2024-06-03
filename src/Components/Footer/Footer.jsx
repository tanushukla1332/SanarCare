import { Col, Row } from "react-bootstrap";
import logo from '../../../public/Image/sanar-care-logo.png';
import youTube from '../../../public/Image/youtube_1384060 1.png';
import Fb from '../../../public/Image/Fbicon.png';
import phone from '../../../public/Image/phoneIcon.png';
import mail from '../../../public/Image/mail.png';
import instr from './../../../public/Image/instagram (1) 1.png'


import './Footer.css'

export default function Footer() {
    return (
        <>
         <Row className="d-xl-flex d-none justify-content-center align-items-center"  >
         <Col md={12} className="fotter-first ">
    <h1 className="hed3 text-center pt-3">Popular Radiology Scan's</h1>
    <div className="d-flex justify-content-center align-items-center gap-1">
        <p className="para text-left with-slash">Coronary CT Angiography In Gurugram</p>
        <p className="para text-left with-slash">X-Ray Neck Lateral View In Gurugram</p>
        <p className="para text-left with-slash">Color Doppler - Carotids In Gurugram</p>
        <p className="para text-left">Ultra Sound - Thyroid In Gurugram</p>
    </div>
</Col>


            </Row>
            <Row className=" d-none justify-content-center align-items-center py-1" 
           >
         <Col md={12}>
    <h1 className="hed3 text-center pt-3">Scan's in Gurugram</h1>
    <div className="d-flex justify-content-center align-items-center gap-1">
        <p className="para text-left with-slash">Mri Scansc In Gurugram Sector48</p>
        <p className="para text-left with-slash">CT Scans   In Gurugram Sector 55</p>
        <p className="para text-left with-slash">Pet Scans  In Gurugram Sector 49</p>
        <p className="para text-left with-slash">Dexa Scans In Gurugram Sector 7</p>
        <p className="para text-left">Ecg Test In Gurugram Sector 22</p>
    </div>
</Col>


            </Row>
            <Row  className="d-flex justify-content-center py-3 gap-5" style={{borderTop:"1px solid #c1c0c098"}}>
               <div xs={10} className="d-flex justify-content-center gap-5">
               <Col md={4} >
                    <div className="pt-2">
                        <img src={logo} alt="" className="img-fluid" style={{ height: "50px", width: "200px" }} />
                    </div>
                </Col>
                <Col
                    md={3}>
                    <h3 className="hed3 fw-bold pt-3" style={{color:"#585454"}}>QUICK LINKS</h3>

                </Col>

                <Col md={3}>
                    <h3 className="hed3   fw-bold pt-3"  style={{color:"#585454"}} >GET IN TOUCH</h3>
                </Col>
               </div>



            </Row>
           
            <Row style={{ boxShadow: "0px 15px 20px 10px #00000040", backgroundColor: "#46A4D9" }} className="d-flex justify-content-center py-1 gap-5">
                <div>
                    
                </div>
                <Col md={4} style={{ borderRight: "1px solid white" }}>
                    <div>
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
                </Col>
                <Col md={3} style={{ borderRight: "1px solid white" }}>

                    <div>
                        <p className="para text-white text-left">Metropolis  delhi <br />
                            Mahajan Diagnostic Gurgaon <br />
                            Mahajan Diagnostic Delhi <br />
                            Rubik Imaging And Diagnostics <br />
                            Indigo <br />
                            Verizone <br />
                            Nueclear</p>
                    </div>
                    <div>
                        <h4 className="hed4 text-white">FOLLOW US</h4>
                        <div className="d-flex  gap-3 cursor-pointer">
                            <img src={Fb} alt="" className="img-fluid" />
                            <img src={youTube} alt="" className="img-fluid" />
                            <img src={instr} alt="" className="img-fluid" />
                        </div>
                    </div>
                </Col>
                <Col md={3}>

                    <p className="text-white text-left para">
                        <span className="d-flex gap-1 text-center  align-items-center pb-1">
                            <img src={phone} alt="" className="img-fluid" />7042148149 (Delhi NCR)
                        </span>
                        <span className="d-flex gap-1 text-center  align-items-center pb-1">
                            <img src={phone} alt="" className="img-fluid" />73031 99700 (Jaipur)
                        </span>
                        <span className="d-flex gap-1 text-center  align-items-center">
                            <img src={mail} alt="" className="img-fluid" /> info@sanarcare.in
                        </span>
                    </p>
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
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#46A4D9" }} className="d-flex justify-content-center align-items-center   pb-3">
                <Col className="d-flex justify-content-center align-items-center pt-3" style={{ borderTop: "1px solid white", borderBottom: "1px solid white" }}>
                    <p className="para text-white">Copyright 2023 | Sanar Care</p>
                </Col>
            </Row>
        </>
    )
}
