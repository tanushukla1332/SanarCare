import { Row, Col } from 'react-bootstrap';
import bannerPage from '../../../public/Image/ContactBanner.png';
import FormLayout from '../Form';
import usericon from '../../../public/Image/Formicon1 (5).png';
import emailicon from '../../../public/Image/Formicon1 (4).png';
import phoneicon from '../../../public/Image/Formicon1 (3).png';
import messageicon from '../../../public/Image/Formicon1 (2).png';
import location from '../../../public/Image/location map-01.png';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    const icons = {
        'text': usericon,
        'email': emailicon,
        'number': phoneicon,
        'textarea': messageicon,
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
            placeholder: 'Query',
            required: true
        },
    ];

    return (
        <>
            <Row className='px-0 d-flex justify-content-center align-items-center gap-5' style={{ backgroundImage: `url(${bannerPage}) `, height: "500px" ,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
                <Col md={7} style={{ position: "absolute", top: "85%", left: "-2%" }}>
                    <FormLayout heading="Reach" formData={formData1} icons={icons} />
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
            
          
            
           
            <Row className='d-flex justify-content-center align-items-center pb-5'>
            <h1 className='hed1 text-center py-5'>Find Us Near You</h1>
                <Col md={10} className='d-flex justify-content-between '>
                  
                    <div className='col-md-5' >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.634361038108!2d77.0756377752824!3d28.460436575759076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e86fe8d3d7%3A0xbbecdbff8df2ebcf!2sTime%20Square%20Building!5e0!3m2!1sen!2sin!4v1715851716572!5m2!1sen!2sin" width="600" height="580"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-md-5'>
                        <p className='hed4'><span style={{color:"#FF631A"}}><FaMapMarkerAlt /></span>962, First Floor, Sector 7, Gurgaon, Haryana 122001 </p>
                        <p className='hed4'> <span style={{color:"#FF631A"}}><FaMapMarkerAlt /></span>Ground Times square Building, near Huda City 
                       Metro Station, Sushant Lok Phase I, Sector 43, 
                        Gurugram, Haryana 122002</p>
                        <p className='hed4'> <span style={{color:"#FF631A"}}><FaMapMarkerAlt /></span>165 P, Rd No D-13 A, Ardee City, Block D, Sector 52, 
                           Gurugram, Haryana 122003</p>
                           <div className='d-flex align-items-center'>
                        <img src={location} alt=""  className='img-fluid'  style={{width:"403px",height:"400px"}}/>
                    </div>
                    </div>
                   
                </Col>
            </Row>
        </>
    )
}