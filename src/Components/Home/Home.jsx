import { Row, Col } from "react-bootstrap";
import bannerHome from '../../../public/Image/homebnr.png';
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
import vdoGif from '../../../public/Image/vdo.gif'; // Corrected import path for the GIF

export default function Home() {
 

 

   


    return (
        <>
        <Row className="d-flex justify-content-center align-items-center gap-4" 
        style={{ backgroundImage: "linear-gradient(to bottom, #fff, #cdcdcd)"}}> 
   
                <Col md className="d-flex  align-items-center gap-5">
                    <div className="banner col-md-5"> 
                        <h1>
                            <p className="scan">where every <span className="scan">Scan</span></p>
                            <p><span className="reflects">Reflects</span> <span className="health">Your</span></p>
                            <p className="Priority">Health Priority's</p>
                        </h1>
                    </div>
                    <div>
                        <img src={vdoGif}  className="img-fluid"/>
                    </div>
                </Col>
            </Row>

            <SEctionFirst />
            <SectionNd />
            <SectionThree />
            <Section12 />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <br/>
            <br/>
            
            <Section13 />
            <br/><br/><br/>
        </>
    )
}
