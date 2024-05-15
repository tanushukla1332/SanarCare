import {Row,Col,Form,Card } from  'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Doctorsimg1 from '../../../public/Image/doctors (1).jpg';
import Doctorsimg2 from '../../../public/Image/doctors (2).jpg';
import Doctorsimg3 from '../../../public/Image/doctors (3).jpg';
import Doctorsimg4 from '../../../public/Image/doctors (4).jpg';
import Doctorsimg5 from '../../../public/Image/doctors (5).jpg';
import DoctorCard from './DoctorsCard';




export default function SectionFirst(){
    
    const doctorData = {
        name: 'Dr. Suneet Yadav',
        specialization: 'Cardiac Surgeon',
        location: 'Gurugram, India',
        experience: '30',
        designation: 'Director at',
        hospital: 'Max Hospital Gurugram',
        imageUrl: Doctorsimg1,
      };
      

    return(
        <>
        <Row className='py-5 d-flex justify-content-center align-items-center'>
            <Col md={12}  className="px-0 py-3 d-flex justify-content-center  gap-5" >
                <div className='col-md-3' style={{boxShadow:"0px 15px 40px 0px #9aaacf40"}}>

                <Form className="d-flex flex-column p-3">
                <h4 className='hed3 px-2' style={{color:"#585454"}}>By Doctors</h4>
                            <div className="position-relative">
                                <Form.Control 
                                    type="search"
                                    aria-label="Search"
                                    placeholder='Search Doctor Name'
                                    className='form-control-search-page'
                                />
                                <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y "
                                    style={{ marginRight: "15px" }} />
                            </div>
                            
                        </Form>
                        <div className='doctors-name'>
                            <ul>
                                    <li>Suneet Yadav</li>
                                    <li>Garima Singh</li>
                                    <li>Ashish Panday</li>
                                    <li>Shivam Kumar</li>
                                    <li>Sunidhi Arora</li>
                                    <li>Sagar Cobra</li>
                                </ul>
                           
                              
                            </div>
                            <Form className="d-flex flex-column p-3">
                <h4 className='hed3 px-2' style={{color:"#585454"}}>By Department</h4>
                            <div className="position-relative">
                                <Form.Control 
                                    type="search"
                                    aria-label="Search"
                                    placeholder='Search Doctor Name'
                                    className='form-control-search-page'
                                />
                                <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y "
                                    style={{ marginRight: "15px" }} />
                            </div>
                            
                        </Form>
                        <div className='doctors-name'>
                            <ul>
                                    <li>Suneet Yadav</li>
                                    <li>Garima Singh</li>
                                    <li>Ashish Panday</li>
                                    <li>Shivam Kumar</li>
                                    <li>Sunidhi Arora</li>
                                    <li>Sagar Cobra</li>
                                </ul>
                           
                              
                            </div>
                            </div>
                
                <div className='col-md-7'>
                <DoctorCard doctor={doctorData} />

                </div>
                </Col>
               
               
               
             
              
              

        </Row>
        </>
    )
}