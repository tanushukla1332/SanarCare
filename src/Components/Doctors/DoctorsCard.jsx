import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const DoctorCard = ({ doctor }) => {
  return (
    <Card className="doctors-card d-flex">
      <div className="doctor-image-container">
        <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
      </div>
      <div className="card-content-container d-flex flex-column justify-content-between">
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>{doctor.specialization}, {doctor.location}</Card.Text>
          <Card.Text>Year of Experience: {doctor.experience}+</Card.Text>
          <Card.Text>Designation: {doctor.designation}</Card.Text>
          <Card.Text>{doctor.hospital}</Card.Text>
        </Card.Body>
        <div className="button-container d-flex justify-content-between">
          <Button>Inquiry Now</Button>
          <Button className="whatsapp-button">
            WhatsApp <FaWhatsapp />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
