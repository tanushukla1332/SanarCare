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
import banner from '../../../public/Image/mri scanning.png';
import Banner from "./bannerlayout";

export default function Home() {
    return (
        <>
      <Row>
        <img src={banner} alt="banner"  className="img-fluid px-0"/>
    <Col className="d-none"> {/* Adjusted column sizes for responsiveness */}
        <div className="banner pt-2">
                <p className="scan">
                    <span className="">where every</span>
                    <span className="scan ps-3">Scan</span>
                    <p>
                    <span className="reflects ps-3">Reflects</span>{" "}
                    <span className="health">Your</span>
                    <p className="Priority">Health Priority's</p>
                </p>
                </p>
                
                
          
        </div>
    </Col>
</Row>


        
            <Banner />
            <SectionThree />
            <Section12 />
            <SEctionFirst />
            <SectionNd />
           
            <SectionFour />
    
            <SectionFive />
          
           

            <Section9 />
     
      
            <Section8 />
            <SectionSix />
            <Section7 />
          
            <Section11 />

            <Section10 />
            <Section13 />

        </>
    )
}
