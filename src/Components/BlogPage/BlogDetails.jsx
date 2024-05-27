import { Row, Col, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import blog1img from '../../../public/Image/BLO (4).png';
import blog2img from '../../../public/Image/BLO (3).png';
import blog3img from '../../../public/Image/BLO (2).png';
import blog4img from '../../../public/Image/BLO (2).png';
import blog5img from '../../../public/Image/image 4 (3).png';
import deatilsimg1 from '../../../public/Image/blogdeatilspageimg (1).png';
import deatilsimg2 from '../../../public/Image/blogdeatilspageimg (2).png';
import deatilsimg3 from '../../../public/Image/blogdeatilspageimg (3).png';
import deatilsimg4 from '../../../public/Image/blogdeatilspageimg (4).png';
import deatilsimg5 from '../../../public/Image/blogdeatilspageimg (5).png';
import Section11 from '../Home/Section11';
import Section10 from '../Home/Section10';



export default function BlogDetails() {
    return (
        <>
            <Row className='py-3 d-flex flex-column'>
                <Col md={12} className="px-0 d-flex flex-column flex-md-row justify-content-evenly" >
                    <div className='col-md-6 d-flex flex-column '>
                        <h1 className="hed1  pb-3   ps-lg-0 ps-md-0 ps-xl-0 ps-2" >Home/Blogs</h1>
                        <div>
                            <img src={blog5img} alt="" className='img-fluid' />
                            <h3 className='hed3 pt-4 pb-2  ps-lg-0 ps-md-0 ps-xl-0 ps-2' style={{ color: "#46A4D9" }}>Revaccination against coronavirus will help to stay healthy</h3>
                            <p className='para  ps-lg-0 ps-md-0 ps-xl-0 ps-2'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like </p>
                        </div>
                        <div className='pt-lg-4 pt-md-4 pt-xl-4 pt-1'>
                            <h3 className='hed3  pt-4 pb-2  ps-lg-0 ps-md-0 ps-xl-0 ps-2' style={{ color: "#46A4D9" }}>ENSURING YOUR SAFETY DURING AN ULTRASOUND</h3>
                            <p className='para  ps-lg-0 ps-md-0 ps-xl-0 ps-2'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like </p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4  ps-lg-0 ps-md-0 ps-xl-0 ps-2'>
                            <img src={deatilsimg1} alt="" className='img-fluid' />
                            <img src={deatilsimg5} alt="" className='img-fluid d-md-flex' />

                        </div>
                        <div className='pt-4  ps-lg-0 ps-md-0 ps-xl-0 ps-2'>
                            <h3 className='hed3  pt-4 pb-2' style={{ color: "#46A4D9" }}>ADVANCED TECHNOLOGY FOR SUPERIOR IMAGING</h3>
                            <p className='para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like </p>
                        </div>
                        <div className='d-flex flex-column flex-md-row gap-4  ps-lg-0 ps-md-0 ps-xl-0 ps-2'>
                            <img src={deatilsimg4} alt="" className='img-fluid' />
                            <img src={deatilsimg3} alt="" className='img-fluid' />

                        </div>
                        <div className='pt-4  ps-lg-0 ps-md-0 ps-xl-0 ps-2'>
                            <h3 className='hed3  pt-4 pb-2' style={{ color: "#46A4D9" }}>CONCLUSION</h3>
                            <p className='para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like </p>
                            <img src={deatilsimg2} alt="" className='img-fluid' />
                        </div>

                    </div>
                    <div className='col-md-3  ps-lg-0 ps-md-0 ps-xl-0 ps-2' style={{ boxShadow: "0px 15px 40px 0px #9aaacf40" }}>
                        <Form className="d-flex flex-column p-3">
                            <h4 className='hed3 px-2' style={{ color: "#585454" }}>Categories</h4>
                            <div className="position-relative">
                                <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    placeholder='Search by Categories..'
                                    className='form-control-search-page'
                                />
                                <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y "
                                    style={{ marginRight: "15px" }} />
                            </div>

                        </Form>
                        <div className='doctors-name'>
                            <ul>
                                <li>Pediatrics</li>
                                <li>Surgery</li>
                                <li>Vaccination</li>
                                <li>Diagnostics</li>
                                <li>Ultrasound</li>
                                <li>MRI Scan</li>
                                <li>CT Scan</li>
                                <li>X ray</li>
                                <li>DEXA Scan</li>
                                <li>ECG Scan</li>

                            </ul>


                        </div>
                        <Form className="d-flex flex-column p-3">
                            <h4 className='hed3 px-2' style={{ color: "#585454" }}>RECENT POSTS</h4>
                            <div className="position-relative">
                                <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    placeholder='Search..'
                                    className='form-control-search-page'
                                />
                                <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y "
                                    style={{ marginRight: "15px" }} />
                            </div>

                        </Form>
                        <div className='doctors-name px-4  d-flex flex-column justify-content-center align-items-center'>
                            <div className='d-flex gap-2 justify-content-center align-items-center'>
                                <div>
                                    <img src={blog1img} alt="" />
                                </div>
                                <p className='para fw-bold'>Revaccination against coronavirus
                                    will help to stay healthy</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <div>
                                    <img src={blog4img} alt="" />
                                </div>
                                <p className='para fw-bold'>Prevention of colds with vitamins
                                    from natural products</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <div>
                                    <img src={blog3img} alt="" />
                                </div>
                                <p className='para fw-bold'>Breathing disorders in sleep led
                                    to thedevelopment of heart
                                    arrhythmias</p>
                            </div>
                            <div className='d-flex gap-2'>
                                <div>
                                    <img src={blog2img} alt="" />
                                </div>
                                <p className='para fw-bold'>Doctors give advice on the
                                    frequency of tests and diagnostics</p>
                            </div>
                        </div>
                    </div>

                </Col>







            </Row>
            <br />
            <br />
            <br />


            <Section11 />
            <Section10 />


        </>
    )
}