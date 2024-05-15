import { Row,Col } from "react-bootstrap";
import doctorbnr from '../../../public/Image/DoctorsBannr.png'
import FormLayout from "../Form";
import usericon from '../../../public/Image/Formicon1 (5).png';
import emailicon from '../../../public/Image/Formicon1 (4).png';
import phoneicon from '../../../public/Image/Formicon1 (3).png';
import messageicon from '../../../public/Image/Formicon1 (2).png';



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
        <Row>
            <img src={doctorbnr} alt="" className="px-0" />
        </Row>
        <FormLayout heading="Inquiry Now" formData={formData1} icons={icons}/>
      

        </>
    )
}