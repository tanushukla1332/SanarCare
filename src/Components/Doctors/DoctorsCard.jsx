import React from 'react';
import { Card, Button,Accordion } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';


const DoctorCard = ({ doctor }) => {
  return (
    <>
    <Card className='doctors-card d-flex flex-row align-items-center justify-content-center'>
      <Card.Img variant="top"  src={doctor.imageUrl}  className='card-image-conatiner' />
      <Card.Body>
        <Card.Title><h3 className='hed3 text-white'>{doctor.name}</h3></Card.Title>
        <Card.Text>
        <p className='hed4 text-white fw-normal'>{doctor.specialization},{doctor.location}</p>
        <p className='hed4 '>{doctor.experience}</p>
        <p  className='hed4 text-white fw-normal'><span  className='hed4 fw-bold' >Designation</span>:{doctor.designation}</p>
        <p className='hed4'>{doctor.hospital}</p>
        </Card.Text>
      </Card.Body>
      <div className='button-container'>
        <Button variant="primary" className='my-3'>Enquiry Now</Button>
        <Button variant="primary">Whatsapp <span><FaWhatsapp/></span></Button>
        </div>
    </Card>
    <Accordion defaultActiveKey="0"  className="doctors-cardiind">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <h1 className='text-lg hed3'  style={{color:"#46A4D9"}}>Doctor Profile</h1>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <h1 className='text-lg hed3'  style={{color:"#46A4D9"}}>specialization</h1> </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   

</>
    
    
  );
};

export default DoctorCard;