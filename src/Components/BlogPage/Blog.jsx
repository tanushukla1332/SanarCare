import { Row, Col, Form } from 'react-bootstrap';
import blogBanner from '../../../public/Image/Blogs page banner.png';
import { FaSearch } from 'react-icons/fa';
import blog1img from '../../../public/Image/BLO (4).png';
import blog2img from '../../../public/Image/BLO (3).png';
import blog3img from '../../../public/Image/BLO (2).png';
import blog4img from '../../../public/Image/BLO (2).png';
import blog5img from '../../../public/Image/image 4 (3).png';
import blog6img from '../../../public/Image/image 4 (4).png';
import Section11 from '../Home/Section11';
import Section10 from '../Home/Section10';



export default function Blog() {
    return (
        <>
            <Row style={{
                backgroundImage: `url(${blogBanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "400px"


            }} className='d-flex justify-content-center align-items-center'>
                <Col md={12} className='d-flex align-items-center '>
                    <div className='px-5 '>
                        <h2 className='d-flex gap-4 pl-5 '><span className='hed2'>Explore Our</span>  <span className="hed1" style={{ color: "#FF631A" }}>Comprehensive</span></h2>
                        <h1 className='d-flex gap-4 pt-1'><span className="hed1" style={{ color: "#FF631A" }}>articles</span> <span className='hed2'>On everyth"ing from </span></h1>
                        <h2 className='d-flex gap-4 pt-1' ><span className="hed1" style={{ color: "#FF631A" }}>Preventive Care </span> <span className='hed2'>to </span></h2>
                        <h2 className='hed1 pt-2' style={{ color: "#46A4D9" }}>Cutting-edge treatments</h2>


                    </div>
                </Col>
            </Row>
            <Row className='py-5 d-flex'>
                <Col md={12} className="px-0 d-flex justify-content-evenly" >
                    <div className='col-md-6 d-flex flex-column '>
                        <h1 className="hed1  pb-3" >Home/blogs</h1>
                        <div>
                            <img src={blog6img} alt="" className='img-fluid' />
                            <h3 className='hed3 pt-4 pb-2' style={{ color: "#46A4D9" }}>Revaccination against coronavirus will help to stay healthy</h3>
                            <p className='para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like </p>
                        </div>
                        <div className='pt-4'>
                            <img src={blog5img} alt="" className='img-fluid' />
                            <h3 className='hed3  pt-4 pb-2' style={{ color: "#46A4D9" }}>Prevention of colds with vitamins from natural products</h3>
                            <p className='para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like </p>
                        </div>




                    </div>
                    <div className='col-md-3' style={{ boxShadow: "0px 15px 40px 0px #9aaacf40" }}>
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
            <Section11/>
            <br />
            <br />
            <Section10/>

        </>

    )
}