import imgnew4 from '../../../public/Image/fornew1 (4).png';
import imgnew1 from '../../../public/Image/fornew1 (1).png';
import imgnew2 from '../../../public/Image/fornew1 (2).png';
import imgnew3 from '../../../public/Image/fornew1 (3).png';
import { Row,Col } from 'react-bootstrap'

export default function Banner() {
    return (
        <>
        <Row  className="d-flex justify-content-center align-items-center p-0 " >
        <Col xs={10} md={10}
         className="d-flex justify-content-center align-items-center  for-newtry p-lg-3 p-md-3 p-xl-3 p-0 gap-xl-3 gap-lg-3 gap-md-3 gap- 2" 
>
    {/* Content for first column */}
    <div className="d-flex justify-content-center align-items-center flex-column for-mob " style={{ borderRight: "1px solid #3b7fbfa2 ",paddingRight:"50px" }}>
        <img src={imgnew1} alt="" className="img-fluid"  style={{maxWidth:"80px" ,height:"80px",}}  />
        <h4 className="hed4 text-center pt-lg-3  pt-xl-3 pt-md-3 pt-0">Find Your scans</h4>
        <p className="para text-center">Scan with expert.</p>
    </div>
    
    {/* Content for second column */}
    <div className="d-flex  justify-content-center align-items-center flex-column for-mob" style={{ borderRight: "1px solid #3b7fbfa2 " , paddingRight:"50px"}}>
        <img src={imgnew2} alt="" className="img-fluid"  style={{maxWidth:"80px" ,height:"80px"}}   />
        <h4 className="hed4 text-center pt-lg-3  pt-xl-3 pt-md-3 pt-0">Health Packages</h4>
        <p className="para text-center ps-3">1000 problems 1 Solution.</p>
    </div>
    
    {/* Content for third column */}
    <div className="d-flex justify-content-center align-items-center flex-column for-mob" style={{ borderRight: "1px solid #3b7fbfa2", paddingRight:"50px"}}>
        <img src={imgnew3} alt="" className="img-fluid"  style={{maxWidth:"80px" ,height:"80px"}}  />
        <h4 className="hed4 text-center pt-lg-3  pt-xl-3 pt-md-3 pt-0">Our Doctors</h4>
        <p className="para text-center pt-0 ps-3">Experienced radiologists Services</p>
    </div>
    
    {/* Content for fourth column */}
    <div className="d-flex justify-content-center align-items-center flex-column for-mob" style={{paddingLeft:"50px" }}>
        <img src={imgnew4} alt="" className="img-fluid"  style={{maxWidth:"80px" ,height:"80px",}} />
        <h4 className="hed4 text-center pt-lg-3  pt-xl-3 pt-md-3 pt-0">Fill Enquiry Form</h4>
        <p className="para text-center ps-3">Get Personalized Assistance.</p>
    </div>
</Col>

            </Row>
        </>
    )
}