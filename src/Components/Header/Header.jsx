import React, { useState } from 'react';
import { NavDropdown, Navbar, Container, Nav, Form, Row, Col } from 'react-bootstrap';
import logo from '../../../public/Image/sanar-care-logo.png';
import Logo2 from '../../../public/Image/NABH-150x150.jpg';
import user from '../../../public/Image/user.png';
import phone from '../../../public/Image/phone.png';
import Home from '../../../public/Image/home.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdArrowRight } from "react-icons/md";
import './Header.css';

export default function Header() {
    const topPositions = [-5, -55, -102, -150, -200, -247];
    const [expanded, setExpanded] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
   

    const handleDropdownClick = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
        setDropdownOpen(false)
    };

    const handleNavLinkClick = () => {
        setExpanded(false); // Close the menu after navigating
    };


    return (
        <>
            <Navbar bg="light" expand="lg" className="d-none d-lg-flex" style={{ maxHeight: "80px" }}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" style={{ height: "50px" }} className='ps-5 img-fluid' />
                    </Navbar.Brand>
                    <Nav className="mx-auto d-flex gap-0">
                        <Nav.Link><img src={Logo2} alt="" className='img-fluid' style={{ height: "80px", width: "80px" }} /></Nav.Link>
                        <Nav.Link href="#home" className='d-flex align-items-center gap-3'>
                            <img src={user} alt="" className='img-fluid' style={{ width: "20px", height: "20px" }} />
                            <p className='mb-0' style={{ fontSize: '14px', fontWeight: '550', color: "#252525" }}>Login/Register</p>
                        </Nav.Link>
                        <Nav.Link href="#home" className='d-flex align-items-center gap-3'>
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
            <Navbar expand="lg" style={{ backgroundColor: "#46A4D9", position: "sticky", top: 0, zIndex: 1000 }} className='header' expanded={expanded}>
            <Container fluid className='m-0 p-0'>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto p-0 d-flex align-items-center gap-1 gap-lg-2 gap-xl-3 navbar-header" navbarScroll>
                        <Nav.Link as={Link} to="/" onClick={handleNavLinkClick} >Home</Nav.Link>
                        <NavDropdown 
                       title="Book Scans"
                       id="basic-nav-dropdown"

>
    {[
        { title: "MRI SCANS", items: ["MRI - Left Knee Joint", "MRI - Right Knee Joint", "MRI - Cervical Spine", "MRI - Screening of Whole Spine"] },
        { title: "CT SCANS", items: ["CT - Brain", "CT - Chest", "CT - Abdomen", "CT - Spine"] },
        { title: "CBCT", items: ["CBCT - Jaw", "CBCT - Sinuses", "CBCT - Skull"] },
        { title: "BMT", items: ["BMT - Bone Mineral Density", "BMT - Whole Body"] },
        { title: "Ultrasound", items: ["Ultrasound - Abdomen", "Ultrasound - Pelvis", "Ultrasound - Thyroid"] },
        { title: "Cardiology", items: ["Cardiology - ECG", "Cardiology - ECHO", "Cardiology - TMT"] }
    ].map((dropdown, index) => (
        <NavDropdown.Item
            as="div"
            className="dropdown-custom"
            key={index}
            onMouseEnter={() => setDropdownOpen(index)}
            onMouseLeave={() => setDropdownOpen(null)}
        >
            <div 
                className="dropdown-title" 
                onClick={() => {handleDropdownClick(index); setDropdownOpen(dropdownOpen === index ? null : index);}} // Handle both click and hover
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
            >
                <span>{dropdown.title}</span>
                <MdArrowRight />
            </div>
            {dropdownOpen === index && (
                <div className="nested-dropdown"style={{ top: `${topPositions[index]}px` }}>
                    <div className="nested-items">
                        {dropdown.items.map((item, idx) => (
                            <NavDropdown.Item as={Link} to="/bookyourscans" key={idx}>{item}</NavDropdown.Item>
                        ))}
                    </div>
                </div>
            )}
        </NavDropdown.Item>
    ))}
</NavDropdown>

                       

                        <Nav.Link as={Link} to="/doctors" onClick={handleNavLinkClick}>Our Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/health" onClick={handleNavLinkClick}>Health Packages</Nav.Link>
                        <Nav.Link as={Link} to="/blog" onClick={handleNavLinkClick}>Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>Reach Us</Nav.Link>
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
