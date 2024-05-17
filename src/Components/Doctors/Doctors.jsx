import { Row,Col } from "react-bootstrap";
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




export default function Doctors(){
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
            {label:'subject', value:'disabled'},
            { label: 'General Enquiry', value: 'general_enquiry' },
            { label: 'Book an appointment', value: 'book_appointment' }
        ],
        required: true
    };
    return(
        <>
        <Row style={{backgroundImage:`url(${doctorbnr})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:"480px",
    }}>
             <Col md className="d-flex justify-content-center flex-column ">
                <div className="col-md-8 d-flex justify-content-center flex-column doctos-banner-text">
                <h1>Delivering Wellness</h1>
                <p>With Our</p>
                <h2>Team of Experties</h2>
                </div>
                <div style={{position:"absolute",top:"85%"}}>
                <FormLayout heading="Inquiry Now" formData={formData1} form icons={icons} selectField={selectField1}/>
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
        <br />


     
       
        <SectionFirst/>
      
        <Section11/>
        <Section10/>
      
      
      

        </>
    )
}