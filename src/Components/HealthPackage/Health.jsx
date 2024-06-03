import { Row, Col } from "react-bootstrap";
import healthbnr from '../../../public/Image/healthBanner.png'
import SectionFirstHealth from "./SectionFirstHealth";
import SectioniindHealth from "./SectioniindHealth";
import Section10 from '../Home/Section10';
import Section13 from "../Home/Section13";
export default function Health() {
    return (
        <>
        <Row style={{ backgroundImage: `url(${healthbnr})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                className="d-md-flex d-none justify-content-center align-items-center">
                <Col className="d-flex  align-items-center  ">
                    <div className="p-5" >
                        <h2 className="hed2">Explore Our Range of</h2>
                        <h2><span className="hed1" style={{ color: "#FF851B" }}> Health Packages</span><span className="hed2"> Today! </span></h2>
                        <h2 className="hed2"> <span className="hed2"> From comprehensive</span>   <span className="hed2">specialized </span> </h2>
                       
                        <h2 className="hed2"> screenings, we tailor  </h2>
                        <h2 className="hed2"> packages to <span className="hed1" style={{ color: "#FF851B" }}>suit your</span> 
                              <span className="hed2"> needs</span></h2>
                    </div>
                </Col>
            </Row>
            <Row style={{ backgroundImage: `url(${healthbnr})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                className="d-flex d-md-none justify-content-center align-items-center">
                <Col className=" col-xs-9 d-flex  align-items-center">
                    <div className="p-5">
                        <h1  className="hed1" style={{ color: "#FF851B" }}>Explore Our Range of  <span className="hed1">Health Packages </span></h1>
                        
                    </div>
                </Col>
            </Row>
            <SectionFirstHealth />

            <SectioniindHealth />
         
            <Section10 />
            
            <Section13 />
            <Row className="d-flex justify-content-center align-items-center py-5">
                <Col md={10}>
                    <h1 className="hed1 text-center pb-4">Popular tests in Gurgaon</h1>
                    <p className="para">Full Body Health Checkup in Gurgaon / Heart Test in Gurgaon / Kidney Test in Gurgaon / Liver Test in Gurgaon / Thyroid Test in Gurgaon /
                        Gastrointestinal Bone And Joint Prostate Test in Gurgaon / Infectious Disease Gynaecology Test in Gurgaon / Allergy Test in Gurgaon / Diabetes
                        Test in Gurgaon / Gastro Test Female Cancer Pregnancy Test Cancer Test Cardiology Test Nephrology Orthopedics Test Tuberculosis Test in
                        Gurgaon / Full Body Anemia Test in Gurgaon / Lung Test in Gurgaon</p>


                </Col>
            </Row>
           


        </>

    )
}