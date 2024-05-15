import { Row,Col } from "react-bootstrap";
import doctorbnr from '../../../public/Image/doctor sanar care banner.png';
import FormLayout from "../Form";
import usericon from '../../../public/Image/Formicon1 (5).png';
import emailicon from '../../../public/Image/Formicon1 (4).png';
import phoneicon from '../../../public/Image/Formicon1 (3).png';
import messageicon from '../../../public/Image/Formicon1 (2).png';
import './Doctors.css'
import SectionFirst from "./SectionFirst";




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
                <FormLayout heading="Inquiry Now" formData={formData1} icons={icons}/>
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
      
      

        </>
    )
}