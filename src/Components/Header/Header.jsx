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
import { MdArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';









export default function Header() {
    const history = useNavigate();

    const handleDropdownClick = () => {
        history('/bookyourscans');
    };
    return (
        <>
            <Navbar bg="light" expand="lg" className="d-none d-lg-flex" style={{ maxHeight: "80px" }}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" style={{ height: "50px" }} className='ps-5' />
                    </Navbar.Brand>
                    <Nav className="mx-auto d-flex gap-0">
                        <Nav.Link><img src={Logo2} alt="" className='img-fluid pt-5' /></Nav.Link>
                        <Nav.Link href="#home" className='d-flex align-items-center gap-3'>
                            <img src={user} alt="" className='img-fluid' style={{ width: "20px", height: "20px" }} />
                            <p className='mb-0' style={{ fontSize: '14px', fontWeight: '550', color: "#252525" }}>Login/Register</p>
                        </Nav.Link>
                        <Nav.Link href="#home" className='d-flex align-items-center  gap-3'>
                            <img src={phone} alt="" className='img-fluid' style={{ width: "20px", height: "20px" }} />
                            <div className='ml-2'>
                                <p style={{ fontSize: '12px', fontWeight: 'light', color: "#252525", margin: "0" }}>Customer Support</p>
                                <p style={{ fontSize: '14px', fontWeight: '550', color: "#252525", margin: "0" }}>7042148149</p>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Container>
                <br />
                <br />
            </Navbar>
          <Navbar expand="lg" style={{ backgroundColor: "#46A4D9", position: "sticky", top: 0, zIndex: 1000 }} className='header'>
                <Container fluid  className='m-0 p-0'>
                    <Navbar.Brand as={Link} to="/" className="d-lg-none">
                        <img src={logo} alt="" style={{ height: "50px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto p-0 d-flex align-items-center gap-1 gap-lg-2 gap-xl-3 navbar-header"  navbarScroll>
                            <Nav.Link as={Link} to="/" className="d-none d-lg-flex">
                                <img src={Home} alt="" className='img-fluid' style={{ width: "60px", height: "50px" }} />
                            </Nav.Link>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Book Scans" id="basic-nav-dropdown" onClick={handleDropdownClick}>
                                <NavDropdown.Item as={Link} to="/bookyourscans/mri">
                                    MRI SCANS <MdArrowRight />
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/bookyourscans/ct">
                                    CT SCANS <MdArrowRight />
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/bookyourscans/cbct">
                                    CBCT <MdArrowRight />
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/bookyourscans/bmt">
                                    BMT <MdArrowRight />
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/bookyourscans/ultrasound">
                                    Ultrasound <MdArrowRight />
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/bookyourscans/cardiology">
                                    Cardiology <MdArrowRight />
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/doctors">Our Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/health">Health Packages</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Reach Us</Nav.Link>
                            <Form className="d-lg-flex d-none">
                                <div className="position-relative">
                                    <Form.Control
                                        type="search"
                                        aria-label="Search"
                                        placeholder='search your scans'
                                        className="ms-lg-2"

                                    />
                                    <FaSearch color='#4085AD' className="position-absolute top-50 end-0 translate-middle-y" style={{ marginRight: "15px" }} />
                                </div>
                            </Form>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>







        </>
    );
}

