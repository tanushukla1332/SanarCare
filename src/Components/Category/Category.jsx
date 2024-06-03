import { Row, Col,  Button } from 'react-bootstrap';
import bannrScans from '../../../public/Image/man-working-table 1.png';

import './Category.css';

import Section10 from '../Home/Section10';
import Section11 from '../Home/Section11';
import { FaCheck, } from "react-icons/fa";
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CategoryFirst from './CategoryFirst';
import CategoryIIND from './Categoryiind';
import CategorySub from './CategorySub';

export default function Category() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };
  return (
    <>
      <Row>
        <img src={bannrScans} alt="" className='px-0' style={{ height: "400px" }} />
      </Row>
     <CategorySub  h4="Home / Scans / Digital X-ray in Gurugram" h3="Home / Scans / Digital X-ray in Gurugram"/>
     
     
      <Section11 />
      <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}>
          <h1 className='text-center hed1 pb-4'>Other Radiology Scans</h1>

          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center mb-3 gap-5' onClick={() => toggleAccordion(0)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 0 ? <IoIosArrowUp color='#ffff' size={30} /> : <IoIosArrowDown size={30} color='#ffff' />}</span>
          </div>
          {expandedIndex === 0 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  
           d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center  mb-3' onClick={() => toggleAccordion(1)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white'>Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 1 ? <IoIosArrowUp color='#ffff' size={30} /> : <IoIosArrowDown size={30} color='#ffff' />}</span>
          </div>
          {expandedIndex === 1 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center  mb-3' onClick={() => toggleAccordion(2)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 2 ? <IoIosArrowUp color='#ffff' size={30} /> : <IoIosArrowDown size={30} color='#ffff' />}</span>
          </div>
          {expandedIndex === 2 && (
            <ul>
              <li>
                <span className='text-center para'>While walk-ins are welcome for some tests, it's best to schedule an appointment to minimize wait times
                  and ensure availability.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center  mb-3' onClick={() => toggleAccordion(3)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 3 ? <IoIosArrowUp color='#ffff' size={30} /> : <IoIosArrowDown size={30} color='#ffff' />}</span>
          </div>
          {expandedIndex === 3 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center  mb-3' onClick={() => toggleAccordion(4)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' > Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 4 ? <IoIosArrowUp color='#ffff' size={30} /> : <IoIosArrowDown size={30} color='#ffff' />}</span>
          </div>
          {expandedIndex === 4 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}

          <div className='card-header  d-flex justify-content-md-between justify-content-xl-between  justify-content-lg-between justify-content-center  mb-3' onClick={() => toggleAccordion(5)} style={{ backgroundColor: "#FF851B" }}>
            <h1 className='text-center hed3 text-white' >Digital X-Ray in Gurgaon
            </h1>
            <span className='icon'>{expandedIndex === 5 ? <IoIosArrowUp color='#ffff' size={30} /> : <IoIosArrowDown size={30} color='#ffff' />}</span>
          </div>
          {expandedIndex === 5 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}


        </Col>

      </Row>
      <CategoryIIND />
      <Row className='d-flex   justify-content-center'>
        <h1 className='hed1 text-center pb-3 pt-5'>Other Digital X-ray</h1>
        <Col md={10} className='d-flex justify-content-center gap-4'>
          <p className='para scan-div2' style={{ color: "#46A4D9" }}>Abdominal X-ray</p>


          <p className='para  scan-div2 ' style={{ color: "#46A4D9" }}>Cervical X-ray</p>


          <p className='para  scan-div2' style={{ color: "#46A4D9" }}>Chest X-ray</p>


          <p className='para  scan-div2' style={{ color: "#46A4D9" }}>Knee X-ray</p>


          <p className='para  scan-div2' style={{ color: "#46A4D9" }}>Pelvis X-ray</p>



        </Col>
      </Row>
      <Section10 />





    </>
  )
}