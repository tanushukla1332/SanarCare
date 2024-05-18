import { Row, Col, Form, Button } from 'react-bootstrap';
import bannrScans from '../../../public/Image/man-working-table 1.png';
import doctoimg from '../../../public/Image/Doctor.png'
import './Category.css';
import Nablimg from './../../../public/Image/Mask group (1).png';
import patients from '../../../public/Image/Mask group (2).png';
import reliable from '../../../public/Image/Mask group (3).png';
import mri from '../../../public/Image/Mask group.png';
import icons from '../../../public/Image/Mask group (4).png';
import img2 from '../../../public/Image/Group 2012.png';
import arow from '../../../public/Image/arrowS.png';
import Section10 from '../Home/Section10';
import Section11 from '../Home/Section11';
import { FaCheck,} from "react-icons/fa";
import React, { useState } from 'react';
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import CategoryFirst from './CategoryFirst';
import CategoryIIND from './Categoryiind';

export default function Category() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
      if (expandedIndex === index) {
        setExpandedIndex(null); // Collapse if clicked again
      } else {
        setExpandedIndex(index); // Expand if not expanded
      }
    };

    return (
        <>
            <Row>
                <img src={bannrScans} alt="" className='px-0' />
            </Row>
            <Row className='d-flex justify-content-center py-5 gap-5'>
                <Col md={6}>
                    <h4 className='hed4 text-black'>Home / Scans / Digital X-ray in Gurugram</h4>
                    <h3 className='hed3 fw-bold' style={{ color: "#585454" }}>Home / Scans / Digital X-ray in Gurugram</h3>
                 <CategoryFirst/>
                </Col>
                <Col md={4} className="d-flex flex-column form-scans-col px-0" style={{ marginTop: "85px" }}
                >
                    <div className='form-scans' >
                        <div className="d-flex pt-2" style={{
                            backgroundColor: "#46A4D9", borderTopRightRadius: "25px",
                            borderTopLeftRadius: "25px"
                        }}>
                            <img src={doctoimg} alt="Scan Banner" className="img-fluid" />
                            <h2 className="text-white hed2 pb-2">Scan with care, trust Sanar Care</h2>
                        </div>
                        <Form className='p-4'>
                            <Form.Group controlId="formPatientName" className="mb-4">
                                <Form.Label className='hed3'>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Patient Name" />
                            </Form.Group>

                            <Form.Group controlId="formMobileNumber" className="mb-4">
                                <Form.Label className='hed3'>Your Mobile Number</Form.Label>
                                <Form.Control type="tel" placeholder="Enter Your Mobile No." />
                            </Form.Group>

                            <Form.Group controlId="formLocation" className="mb-4">
                                <Form.Label className='hed3'>Location</Form.Label>
                                <Form.Control type="text" placeholder="Gurugram" />
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-4">
                                <Form.Label className='hed3'>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Typing..." />
                            </Form.Group>
                            <Form.Group controlId="formMessage " className="mb-2">
                                <span className='d-flex gap-3  mt-2'>
                                    <Form.Check type="checkbox" className='hed3' />
                                    <Form.Label className='para' style={{ color: "#000000" }}>You hereby affirm & authorise Sanarcare to
                                        process the personal data as per the T&C.</Form.Label></span>
                            </Form.Group>
                            <div className="text-center d-flex justify-content-center align-items-center">
                                <Button variant="primary" type="submit" className="px-5 buttonfirst">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>

                </Col>

            </Row>
            <Row className='d-flex align-items-center pb-5'>
                <Col md={6} className="d-flex flex-column justify-content-center" style={{ paddingLeft: "80px" }}>
                    <h1 className='hed1 ps-5'>Why Choose Sanarcare</h1>
                    <p className='para text-left ps-5 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s,</p>
                    <div className='d-flex justify-content-center align-items-center flex-column gap-5'>
                        <div className='d-flex justify-content-center align-items-center gap-5 ' style={{ paddingLeft: "100px" }}>
                            <div className='scan-div1st'>
                                <img src={mri} alt="" className='img-fluid' />
                                <h4 className='hed4'>1.5 lakh+ patients <br />
                                    test with us every  <br />
                                    month</h4>

                            </div>
                            <div className='scan-div1st'>
                                <img src={patients} alt="" className='img-fluid' />

                                <h4 className='hed4'>Patients save an a <br />
                                    verage of ₹700 <br />
                                    on each scan</h4>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center gap-5' style={{ paddingLeft: "100px" }}>
                            <div className='scan-div1st'>
                                <img src={Nablimg} alt="" className='img-fluid' />
                                <h4 className='hed4'>ISO and NABH <br />
                                    certified scan centers</h4>

                            </div>
                            <div className='scan-div1st'>
                                <img src={reliable} alt="" className='img-fluid' />

                                <h4 className='hed4'>100% reliable and  <br />
                                    accurate reports</h4>
                            </div>
                        </div>
                        <div className='filed-div'>
                            <img src={icons} alt="" className='img-fluid' />
                            <h3 className='hed3 text-white ps-2'>Don't have a prescription? <br /> Consult a doctor online</h3>
                            <Button className='button-white-bg'>Book Consultation</Button>
                        </div>
                    </div>

                </Col>
            </Row>
            <Row className='d-flex align-items-center pb-5'>
                <Col md={7} className="d-flex flex-column " style={{ paddingLeft: "80px" }}>
                    <h1 className='hed1 ps-5'>What is a digital X-ray?</h1>
                    <p className='para ps-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum </p>
                    <p className='para ps-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="d-flex  gap-5" style={{ paddingLeft: "80px" }}>
                        <img src={img2} alt="" className='img-fluid' style={{ width: "350px", height: "307px", boxShadow: "0px 15px 40px 10px rgba(154, 170, 207, 0.127)" }} />
                        <div className='d-block'>
                            <p className='para'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>
                            <p className='para'>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </p>
                        </div>

                    </div>
                    <div className='d-flex justify-content-center align-items-center  gap-5'>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <img src={arow} alt="" className='img-fluid' />
                            <p className='text-center mb-0 ms-2 para'>White: Bones & metal</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={arow} alt="" className='img-fluid' />
                            <p className='text-center mb-0 ms-2 para'>Black: Air in the lungs</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={arow} alt="" className='img-fluid' />
                            <p className='text-center mb-0 ms-2 para'>Gray: Muscle & fat</p>
                        </div>
                       
                    </div>

                </Col>
            </Row>
            <Section11/>
            <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}>
          <h1 className='text-center hed1 pb-5'>Other Radiology Scans</h1>
     
          <div className='card-header mb-3 gap-5' onClick={() => toggleAccordion(0)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 0 ?<IoIosArrowUp  color ='#ffff' size={30}  /> : <IoIosArrowDown   size={30} color='#ffff'  />}</span>
          </div>
          {expandedIndex === 0 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  mb-3' onClick={() => toggleAccordion(1)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white'>Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 1 ? <IoIosArrowUp  color ='#ffff' size={30}  /> : <IoIosArrowDown   size={30} color='#ffff'  />}</span>
          </div>
          {expandedIndex === 1 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  mb-3' onClick={() => toggleAccordion(2)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 2 ? <IoIosArrowUp  color ='#ffff' size={30}  /> : <IoIosArrowDown   size={30} color='#ffff'  />}</span>
          </div>
          {expandedIndex === 2 && (
            <ul>
              <li>
                <span className='text-center para'>While walk-ins are welcome for some tests, it's best to schedule an appointment to minimize wait times
                  and ensure availability.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  mb-3' onClick={() => toggleAccordion(3)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 3 ? <IoIosArrowUp  color ='#ffff' size={30}  /> : <IoIosArrowDown   size={30} color='#ffff'  />}</span>
          </div>
          {expandedIndex === 3 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  mb-3' onClick={() => toggleAccordion(4)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 4 ? <IoIosArrowUp  color ='#ffff' size={30}  /> : <IoIosArrowDown   size={30} color='#ffff'  />}</span>
          </div>
          {expandedIndex === 4 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}

          <div className='card-header  mb-3' onClick={() => toggleAccordion(5)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' >Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 5 ?<IoIosArrowUp  color ='#ffff' size={30}  /> : <IoIosArrowDown   size={30} color='#ffff'  />}</span>
          </div>
          {expandedIndex === 5 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}


        </Col>

      </Row>
            <CategoryIIND/>
            <Row  className='d-flex  py-5 justify-content-center'>
            <h1 className='hed1 text-center pb-3'>Other Digital X-ray</h1>
                <Col md={10} className ='d-flex justify-content-center gap-5'>         
                        <p className='para scan-div2' style={{color:"#46A4D9"}}>Abdominal X-ray</p>

            
                        <p className='para  scan-div2 ' style={{color:"#46A4D9"}}>Cervical X-ray</p>
           
              
                        <p className='para  scan-div2' style={{color:"#46A4D9"}}>Chest X-ray</p>
          
                
                        <p className='para  scan-div2' style={{color:"#46A4D9"}}>Knee X-ray</p>
              
                    
                        <p className='para  scan-div2' style={{color:"#46A4D9"}}>Pelvis X-ray</p>
                   
               

                </Col>
            </Row>
            <Section10/>
         
       
          


        </>
    )
}