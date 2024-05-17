import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa";

export default function Ses() {
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
      <Row className='d-flex justify-content-center align-items-center pb-5'>
        <Col md={10}>
          <h1 className='text-center hed1'>FAQs</h1>
          <h4 className='text-center hed4 pb-5'>Frequently Asked Questions</h4>
          <div className='card-header mb-3 gap-5' onClick={() => toggleAccordion(0)} style={{ backgroundColor: "#FFD0BB" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}> What services does Sanar Care offer?
            </h1>
            <span className='icon'>{expandedIndex === 0 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 0 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  mb-3' onClick={() => toggleAccordion(1)} style={{ backgroundColor: "#FFCBF1" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}>Are the radiologists at Sanar Care board-certified?
            </h1>
            <span className='icon'>{expandedIndex === 1 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 1 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  mb-3' onClick={() => toggleAccordion(2)} style={{ backgroundColor: "#99E6FF" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}> Do I need an appointment for radiology tests?
            </h1>
            <span className='icon'>{expandedIndex === 2 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
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
          <div className='card-header  mb-3' onClick={() => toggleAccordion(3)} style={{ backgroundColor: "#B3BDF1" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}> How long does it take to get my test results?
            </h1>
            <span className='icon'>{expandedIndex === 3 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 3 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}
          <div className='card-header  mb-3' onClick={() => toggleAccordion(4)} style={{ backgroundColor: "#B3E6BE" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}> What services does Sanar Care offer?
            </h1>
            <span className='icon'>{expandedIndex === 4 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
          </div>
          {expandedIndex === 4 && (
            <ul>
              <li>
                <span className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis accusantium debitis, magni atque reprehenderit numquam error neque aut repellendus quaerat, odit quidem reiciendis in quis tempora iste corrupti nam optio vel eveniet est voluptatum, molestiae illo. Laboriosam omnis soluta asperiores eveniet! Corrupti voluptatum ipsam magni, facilis quisquam molestias exercitationem.</span>
                <i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf] text-white p-1" /></i>
              </li>
            </ul>
          )}

          <div className='card-header  mb-3' onClick={() => toggleAccordion(5)} style={{ backgroundColor: "#FFD0BB" }}>
            <h1 className='text-center hed3' style={{ color: "#585454" }}>Are the facilities at Sanar Care equipped with advanced technology?
            </h1>
            <span className='icon'>{expandedIndex === 5 ? <FaMinus className='p-1  rounded-5 ' size={25} style={{ border: "1px solid black ", color: "#585454" }} /> : <FaPlus className='p-1 rounded-5' size={25} style={{ border: "1px solid black ", color: "#585454" }} />}</span>
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
    </>
  );
}
