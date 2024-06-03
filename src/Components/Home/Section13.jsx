import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import firstImage from '../../../public/Image/mri7.png';
import SecImage from '../../../public/Image/mri6.png';
import ThirdImage from '../../../public/Image/mri5.png';
import FourthImage from '../../../public/Image/mri4.png';
import FifhtImage from '../../../public/Image/mri3.png';
import SixthImage from '../../../public/Image/mri2.png';
import SeventhImage from '../../../public/Image/mri1.png';
import EightImage from '../../../public/Image/mri9.png';
import NineImage from '../../../public/Image/mri9.png';
// Import other images...

import { useNavigate } from 'react-router';

export default function Section13() {
    const Portdata = [
        { "id": 1, "title": "TOP 5 ULTRASOUND CLINICS NEAR YOU IN GURGAON: QUALITY AND CONVENIENCE", "subTitle": "Navigating the world of healthcare can  be overwhelming, especially when you’re in need of specialized services like an  ultrasound. If you’re in", "image":firstImage },
        { "id": 2, "title": "SANAR CARE’S MISSION TO  MAKE DEXA SCAN COST  ACCESSIBLE IN GURGAON", "image": SecImage, "subTitle": "Positioned in the vibrant city of Gurgaon,  a hub for progressive healthcare advancements, Sanar Care emerges as  an innovating force within the …" },
        { "id": 3, "title": "PREPARING FOR YOUR FIRST MRI IN GURGAON: TIPS FROM HEALTHCARE PROFESSIONALS", "image": ThirdImage, "subTitle": "Navigating Your Initial MRI Experience in Gurgaon: Professional Guidance from Sanar Care Approaching your inaugural MRI appointment might stir a blend of …" },
        { "id": 4, "title": "BREAKING DOWN THE COST: WHAT GOES INTO THE PRICE OF A GURGAON ULTRASOUND?", "image": FourthImage, "subTitle": "Navigating healthcare costs can often be as complex as the medical jargon we sometimes barely understand. In the heart of Gurgaon, a" },
        { "id": 5, "title": "CT SCANS AND ATHLETES: HOW GURGAON SPORTS TEAMS USE IMAGING FOR INJURY PREVENTION", "image": FifhtImage, "subTitle": "The Intersection of Sports and Medical Imaging In the high-octane world of professional sports, where every second counts and every move is " },

        { "id": 6, "title": "THE RISE OF MOBILE ULTRASOUND PRICES IN GURGAON ARE THEY REALLY ECONOMICAL?",
         "image": SixthImage, 
         "subTitle": "Navigating the Shift to Portable Ultrasound Services in Gurgaon: A Look at Cost Benefits The healthcare industry in Gurgaon is currently undergoing " },

         
        { "id": 7, "title": "THE ROLE OF MRI IN COMBATTING GURGAON’S RISING NEUROLOGICAL DISORDERS",
        "image": SeventhImage, 
        "subTitle": "Within the vibrant landscape of Gurgaon, fast-paced lifestyles have inadvertently led to an increase in cases involving neurological disorders. Amidst these health " },

        { "id": 8, "title": "HOW MUCH DOES A DEXA SCAN COST? FACTORS INFLUENCING THE PRICE", "image": EightImage, "subTitle": "Embarking on the path to preventative health and precise medical evaluation, a DEXA scan emerges as an essential ally in bone health …" },


        { "id": 9,"title": "MAXIMIZE YOUR HEALTH SAVINGS: GET THE BEST DEXA SCAN PRICES AT SANAR CARE", "image": NineImage, "subTitle": "Healthcare can be like a complex puzzle, but taking charge of potential health issues is always the smart move. A critical piece …" }
    ];

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const visibleRecords = Portdata.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(Portdata.length / recordsPerPage);

    const handlePageClick = (index) => {
        setCurrentPage(index);
    };

    const movePage = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <Row className='d-flex justify-content-center align-items-center py-lg-5 py-xl-5 py-md-5 py-4 ' style={{backgroundColor:"#DEF0FF"}}  >
                <div className='text-center'>
                    <h1 className='hed1 pb-xl-4 pb-lg-4 pb-md-4 pb-3'>Our Blogs</h1>
                </div>
                {visibleRecords.map((item, id) => (
                    <Col key={id} md={3} lg={3} xs={6} className={`d-flex flex-column justify-content-center align-items-center mb-3 ${id >= 2 ? 'd-none d-md-block' : ''}`}>
                        <div className='Card-Healthscan'> 
                                <img src={item.image} variant='top'  className='img-fluid '/>
                            
                            <h4 className='hed3 text-center fw-bold pt-lg-4 pt-md-4 pt-xl-4 pt-2' style={{color:"#46A4D9"}}>{item.title}</h4>
                            <h6 className='para text-center '>{item.subTitle}</h6>
                        </div>
                    </Col>
                ))}
                <div className='AllbuttonForMove'>
                    <Button onClick={() => movePage('prev')} disabled={currentPage === 1}>{'<'}</Button>
                    <Button onClick={() => movePage('next')} disabled={currentPage === numberOfPages}>{'>'}</Button>
                </div>
            </Row>
        </>
    );
}
