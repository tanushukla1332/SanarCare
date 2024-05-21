import { Row, Col, Button } from "react-bootstrap";
import doctorbnr from '../../../public/Image/doctor sanar care banner.png';
import FormLayout from "../Form";
import usericon from '../../../public/Image/Formicon1 (5).png';
import emailicon from '../../../public/Image/Formicon1 (4).png';
import phoneicon from '../../../public/Image/Formicon1 (3).png';
import messageicon from '../../../public/Image/Formicon1 (2).png';
import './Doctors.css'
import SectionFirst from "./SectionFirst";
import Section10 from '../Home/Section10';
import Section11 from '../Home/Section11';
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
export default function Doctors() {
    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const formData1 = [
        {
            type: 'text',
            placeholder: 'Name',
            required: true
        },

        {
            type: 'email',
            placeholder: 'Email',
            required: true
        },
        {
            type: 'number',
            placeholder: 'Phone',
            required: true
        },
        {
            type: 'textarea',
            placeholder: 'Message',
            required: true
        },
    ];
    const icons = {
        'text': usericon,
        'email': emailicon,
        'number': phoneicon,
        'textarea': messageicon,
    };
    const selectField1 = {
        type: 'select',
        placeholder: 'Subject',
        options: [
            { label: 'subject', value: 'disabled' },
            { label: 'General Enquiry', value: 'general_enquiry' },
            { label: 'Book an appointment', value: 'book_appointment' }
        ],
        required: true
    };
    return (
        <>
            <Row className="d-flex d-md-none justify-content-center align-items-center">
                <img src={doctorbnr} className="img-fluid p-0" />
                <div className="col-md-10 d-flex justify-content-center flex-column doctos-banner-text">
                    <h1>Delivering Wellness</h1>
                    <p>With Our</p>
                    <h2>Team of Experties</h2>
                    <Button className="buttonfirst" onClick={openForm}>Click me</Button>
                    {showForm && (
                        <div className="popup">
                            <div className="popup-inner position-relative">
                                <Button className="close-button position-absolute top-0 end-0 mt-4 me-4 buttonfirst" style={{ zIndex: "2" }} onClick={closeForm}>
                                    <IoMdClose color="#ffff" />
                                </Button>
                                <FormLayout heading="Inquiry Now" formData={formData1} form icons={icons} selectField={selectField1} />
                            </div>
                        </div>
                    )}

                </div>
            </Row>
            <Row className="d-md-flex d-none"
                style={{
                    backgroundImage: `url(${doctorbnr})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "480px",
                }}>
                <Col md className="d-flex justify-content-center flex-column ">
                    <div className="col-md-8 d-flex justify-content-center flex-column doctos-banner-text">
                        <h1>Delivering Wellness</h1>
                        <p>With Our</p>
                        <h2>Team of Experties</h2>


                    </div>
                    <div style={{ position: "absolute", top: "85%" }}>
                        <FormLayout heading="Inquiry Now" formData={formData1} form icons={icons} selectField={selectField1} />
                    </div>
                </Col>

            </Row>
            <div className="d-none d-md-block">
  {/* Hide on extra small and small screens */}
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

            <SectionFirst/>

            <Section11 />
            <Section10 />




        </>
    )
}