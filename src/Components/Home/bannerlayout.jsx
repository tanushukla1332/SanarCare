import imgnew4 from '../../../public/Image/fornew1 (4).png';
import imgnew1 from '../../../public/Image/fornew1 (1).png';
import imgnew2 from '../../../public/Image/fornew1 (2).png';
import imgnew3 from '../../../public/Image/fornew1 (3).png';
import { Row,Col } from 'react-bootstrap'

export default function Banner() {
    return (
        <>
        <Row  className="d-flex justify-content-center align-items-center">
        <Col md={10} xs={6}
    className="d-flex justify-content-center align-items-center gap-2 gap-lg-5 gap-xl-5 py-3 for-newtry"
>
    {/* Content for first column */}
    <div className="d-flex justify-content-center align-items-center flex-column for-mob " style={{ borderRight: "1px solid #3b7fbfa2 ", paddingRight: "100px" }}>
        <img src={imgnew1} alt="" className="img-fluid"  />
        <h4 className="hed4 text-center">Find Your scans</h4>
        <p className="para text-center">Lorem, ipsum dolor.</p>
    </div>
    
    {/* Content for second column */}
    <div className="d-md-flex d-none justify-content-center align-items-center flex-column for-mob" style={{ borderRight: "1px solid #3b7fbfa2 ", paddingRight: "100px" }}>
        <img src={imgnew2} alt="" className="img-fluid"  />
        <h4 className="hed4 text-center">Health Packages</h4>
        <p className="para text-center">Lorem, ipsum dolor.</p>
    </div>
    
    {/* Content for third column */}
    <div className="d-md-flex  d-none justify-content-center align-items-center flex-column for-mob" style={{ borderRight: "1px solid #3b7fbfa2", paddingRight: "100px" }}>
        <img src={imgnew3} alt="" className="img-fluid"  />
        <h4 className="hed4 text-center">Our Doctors</h4>
        <p className="para text-center">Lorem ipsum dolor.</p>
    </div>
    
    {/* Content for fourth column */}
    <div className="d-flex justify-content-center align-items-center flex-column for-mob">
        <img src={imgnew4} alt="" className="img-fluid"  />
        <h4 className="hed4 text-center">Fill Enquiry Form</h4>
        <p className="para text-center">Lorem, ipsum dolor.</p>
    </div>
</Col>

            </Row>
        </>
    )
}