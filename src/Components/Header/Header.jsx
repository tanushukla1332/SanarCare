import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../../../public/Image/sanar-care-logo.png';
import Logo2 from '../../../public/Image/Logo2.png';
import arrow from '../../../public/Image/arrow.png';
import location from '../../../public/Image/location.png';
import user from '../../../public/Image/user.png';
import phone from '../../../public/Image/phone.png';
import Home from '../../../public/Image/home.png';
import { FaSearch } from 'react-icons/fa'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function Header() {
    const dropdownIconStyle = {
        fill: 'white', // Change the color as needed
    };
   
    return (
        <>
            <Navbar bg="light" expand="lg" data-bs-theme="light" style={{ height: "75px" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" style={{ height: "50px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className=" d-flex justify-content-center align-items-center  mx-auto gap-3
                   mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            


                            <Nav.Link><img src={Logo2} alt="" className='img-fluid pt-4' style={{ maxHeight: "130px" }} /></Nav.Link>
                            <Nav.Link href="#home" className='d-flex align-items-center text-center justify-content-center gap-2'>
                                <img src={user} alt="" className='img-fluid' style={{ width: "20px", height: "20px" }} />
                                <p className='mb-0' style={{ fontSize: '14px', fontWeight: '550', color: "#252525" }}>Login/Register</p>
                            </Nav.Link>
                            <Nav.Link href="#home" className='d-flex align-items-center  gap-2'>
                                <img src={phone} alt="" className='img-fluid' style={{ width: "20px", height: "20px" }} />
                                <div className='ml-2'>
                                    <p style={{ fontSize: '12px', fontWeight: 'light', color: "#252525", margin: "0" }}>Customer Support</p>
                                    <p style={{ fontSize: '14px', fontWeight: '550', color: "#252525", margin: "0" }}>7042148149</p>
                                </div>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <br />
                <br />
            </Navbar>
            <Navbar expand="lg" style={{ backgroundColor: "#46A4D9", height: "55px" }} >
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="
                             d-flex justify-content-center align-items-center  mx-auto gap-5
                               mx-auto my-2 my-lg-0 text-light navbar-header"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand>
                            <Link to='/'><img src={Home} alt="" style={{ width: "30px", height: "30px" }} />
                            </Link> </Navbar.Brand>
                            <Nav.Link className='text-light' > <Link to='/'>Home</Link> </Nav.Link>
                            <NavDropdown title={<Link  to="/book" className="text-light" style={{fontWeight: '500', fontSize: '18px',color:"white"}}>Book Your Scans</Link>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">MRI SCANS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">CT SCANS</NavDropdown.Item>  
                             <NavDropdown.Item href="#action/3.2">CBCT</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.2">BMT</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.2">Ultrasound</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.2">Cardiology</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">More Scans</NavDropdown.Item>
                        </NavDropdown>
                            <Nav.Link  className='text-light'><Link to="/doctors">Our Doctors </Link></Nav.Link>
                            <Nav.Link  className='text-light'> <Link to='/health'>Health Packages</Link> </Nav.Link>
                            <Nav.Link className='text-light' > <Link to="blogs">Blogs</Link> </Nav.Link>
                            <Nav.Link className='text-light'>   <Link to='/contact'>Reach Us</Link> </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <div className="position-relative">
                                <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    placeholder='search your scan'
                                />
                                <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y "
                                    style={{ marginRight: "15px" }} />
                            </div>
                        </Form>


                    </Navbar.Collapse>
                </Container>
            </Navbar>







        </>
    );
}
