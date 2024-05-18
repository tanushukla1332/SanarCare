import { Row, Col } from "react-bootstrap";
import './Home.css';
import SEctionFirst from "./SectionFirst";
import SectionNd from "./Sectionnd";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";
import banner from '../../../public/Image/banner.png';
import imgnew4 from '../../../public/Image/imgnew (1).png';
import imgnew1 from '../../../public/Image/imgnew (4).png';
import imgnew2 from '../../../public/Image/imgnew (3).png';
import imgnew3 from '../../../public/Image/imgnew (2).png';



export default function Home() {
    return (
        <>
            <Row style={{
                backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "400px", position: "relative", boxShadow: " 0px 4px 4px 4px rgba(0, 0, 0, 0.127) ",
            }} className='d-flex  align-items-center'>
                <Col className="p-0 col-md-6">
                    <div className="banner">
                        <h1>
                            <p className="scan">
                                <span>where every</span><span className="scan ps-3">Scan</span>
                            </p>
                            <p>

                                <span className="reflects ps-3">Reflects</span>{" "} <span className="health">Your</span>
                            </p>
                            <p className="Priority">Health Priority's</p>
                        </h1>
                    </div>
                </Col>
                <Col className=" col-md-10 position-absolute for-newtry d-flex  justify-content-center align-items-center  gap-5 py-3" >
                    <div className="d-flex justify-content-center align-items-center flex-column " style={{ borderRight: "1px solid #3b7fbf",paddingRight: "100px"  }}>
                        <img src={imgnew1} alt="" className="img-fluid" style={{ width: "100px", height: "100px" }} />
                        <h4 className="hed4 text-center">Find Yor scans</h4>
                        <p className="para text-center">Lorem, ipsum dolor.</p>

                    </div>

                    <div className="d-flex justify-content-center align-items-center flex-column " style={{ borderRight: "1px solid #3b7fbf",paddingRight: "100px"  }}>
                        <img src={imgnew2} alt="" className="img-fluid" style={{ width: "100px", height: "100px" }} />
                        <h4 className="hed4 text-center">Health Packages</h4>
                        <p className="para text-center">Lorem, ipsum dolor.</p>

                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{ borderRight: "1px solid #3b7fbf", paddingRight: "100px" }}>
                        <img src={imgnew3} alt="" className="img-fluid" style={{ width: "100px", height: "100px" }} />
                        <h4 className="hed4 text-center">Our Doctors</h4>
                        <p className="para text-center">Lorem ipsum dolor.</p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center flex-column "  >
                        <img src={imgnew4} alt="" className="img-fluid" style={{ width: "100px", height: "100px" }} />
                        <h4 className="hed4 text-center">Fill Enquiry Formm</h4>
                        <p className="para text-center">Lorem, ipsum dolor.</p>

                    </div>
                </Col>
            </Row>
            <br />
            <br />

            <br />

            <br />

            <br />
            <br />

            <br />


            <SEctionFirst />
            <SectionNd />
            <SectionThree />
            <Section12 />
            <SectionFour />
            <SectionSix />
            <SectionFive />
            <Section13 />

            <Section9 />
            <Section8 />

            <Section7 />
            <Section11 />

            <Section10 />

        </>
    )
}
