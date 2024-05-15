import React from 'react';
import Marquee from "react-fast-marquee";
import { Row, Col, Card, CardImg } from 'react-bootstrap';
import radi1 from '../../../public/Image/radi1 (1).png';
import radi2 from '../../../public/Image/radi1 (2).png';
import radi3 from '../../../public/Image/radi1 (3).png';
import radi4 from '../../../public/Image/radi1 (4).png';
import radi5 from '../../../public/Image/radi1 (5).png';
import radi6 from '../../../public/Image/First.png';
import eCG from '../../../public/Image/First4.png';
import radi8 from '../../../public/Image/first(3).png';
import pft from '../../../public/Image/pf.png';


export default function SectionFirst() {
    return (
        <Row className="d-flex justify-content-center align-items-center py-5"
         style={{backgroundColor:"rgba(136, 136, 136, 0.065)" ,zIndex:"1"}}>
            <h1 className="hed1 text-center ">Our Radiology Services</h1>
            <Col md={12}>
                <Marquee className='d-flex gap-2'>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <div className='radiologydiv'>
                            <div  className='radiology-data'  style={{ border:"2px solid #FFD0BB",borderRadius:"50%" }}>
                                <img  src={radi1} className='rd-img img-fluid' /> 
                            </div>
                            <p className="para text-center text-black">X-Rays</p>
                        </div>
                        <div className='radiologydiv'>
                            <div  className='radiology-data'  style={{ border:"2px solid #FFCBF1",borderRadius:"50%" }}>
                                <img  src={radi2} className='rd-img img-fluid' /> 
                            </div>
                            <p className="para text-center text-black">MRI test</p>
                        </div>
                        <div className='radiologydiv'>
                        <div  className='radiology-data'  style={{ border:"2px solid #99E6FF",borderRadius:"50%" }}>
                            <img  src={radi3} className='rd-img img-fluid' /> 
                        </div>
                        <p className="para text-center text-black">PET Scans</p>
                    </div>
                    <div className='radiologydiv'>
                        <div  className='radiology-data'  style={{ border:"2px solid #B3BDF1",borderRadius:"50%" }}>
                            <img  src={radi4} className='rd-img img-fluid' /> 
                        </div>
                        <p className="para text-center text-black">EEG Test</p>
                    </div>
                    <div className='radiologydiv'>
                    <div  className='radiology-data'  style={{ border:"2px solid #B3E6BE",borderRadius:"50%" }}>
                        <img  src={eCG} className='rd-img img-fluid' /> 
                    </div>
                    <p className="para text-center text-black">ECG test</p>
                </div>
                <div className='radiologydiv'>
                <div  className='radiology-data'  style={{ border:"2px solid #99E6FF",borderRadius:"50%" }}>
                    <img  src={radi5} className='rd-img img-fluid' /> 
                </div>
                <p className="para text-center text-black">UltraSounds</p>
            </div>
            <div className='radiologydiv'>
            <div  className='radiology-data'  style={{ border:"2px solid #FFD0BB",borderRadius:"50%" }}>
                <img  src={radi6} className='rd-img img-fluid' /> 
            </div>
            <p className="para text-center text-black">CBCT</p>
        </div>
        <div className='radiologydiv'>
        <div  className='radiology-data'  style={{ border:"2px solid #FFCBF1",borderRadius:"50%" }}>
            <img  src={radi8} className='rd-img img-fluid' /> 
        </div>
        <p className="para text-center text-black ">CT Scan</p>
    </div>
    <div className='radiologydiv'>
    <div  className='radiology-data'  style={{ border:"2px solid #B3BDF1",borderRadius:"50%" }}>
        <img  src={pft} className='rd-img img-fluid' /> 
    </div>
    <p className="para text-center text-black ">PFT</p>
</div>

                    </div>
                    
                </Marquee>
            </Col>
        </Row>
    )
}