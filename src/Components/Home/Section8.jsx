import React from 'react';
import {Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card, Row, Col,Button}  from 'react-bootstrap';
import bgimg8 from '../../../public/Image/Secbg8.png';
import sec8_1 from '../../../public/Image/sec83.png';
import sec8_2 from '../../../public/Image/sec82.png';
import sec8_3 from '../../../public/Image/sec82.png';
import fifthdctr from '../../../public/Image/Fifth4-2.webp';
import fifthd2ctr from '../../../public/Image/Fifth4-1.webp';
import fifthd3ctr from '../../../public/Image/Fifth4.webp'

export default function Section8() {
  const slidesPerView = window.innerWidth < 768 ? 1 : 4;
  return (
    <Row className="py-lg-5  py-md-5 py-xl-5 py-3 d-flex justify-content-center align-items-center" style={{
      backgroundImage: `linear-gradient(#00000059, #00000059), url(${bgimg8})`,
      backgroundSize: 'cover'
    }}>
      <Col md={10}  xs={6} lg={12} xl={12}>
      <h1 className=' text-white hed1 text-center'>Meet Our Expert Team of Doctors</h1>
      <p className='para  text-white text-center pb-lg-4 pb-xl-4 pb-md-4 pb-2'>Our Team of Diverse Specialists</p>
      <Swiper
          spaceBetween={50}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[ Autoplay]}
        >
          <SwiperSlide>
            <div className='d-flex justify-content-center align-items-center'>
              <div className="doctor-card">
                <img className="img-fluid doctor-image" src={sec8_1} alt="Doctor 2" />
                <Card className='card-doctor-main'>
                  <Card.Title>
                    <h3 className='hed3 '>Dr. Y.S Rajput</h3>
                  </Card.Title>
                  <Card.Text>
                    <p className='para text-black text-center'>Cardiologist</p>
                   <div className='d-flex justify-content-center align-items-center'>
                  
                   </div>
                  </Card.Text>
                 
                </Card>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='d-flex justify-content-center align-items-center'>
              <div className="doctor-card">
                <img className="img-fluid doctor-image" src={sec8_2} alt="Doctor 2" />
                <Card className='card-doctor-main'>
                  <Card.Title>
                    <h3 className='hed3'>Dr. Sanjeev Chaudhary</h3>
                  </Card.Title>
                  <Card.Text>
                    <p className='para text-black'>Cardiologist</p>
                
                  </Card.Text>
          
                  
                </Card>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='d-flex justify-content-center align-items-center'>
              <div className="doctor-card">
                <img className="img-fluid doctor-image" src={sec8_3} alt="Doctor 2" />
                <Card className='card-doctor-main'>
                  <Card.Title>
                    <h3 className='hed3'>Dr. Anjali Kumar</h3>
                  </Card.Title>
                  <Card.Text>
                    <p className='para text-black'>Gynecologists</p>
                    
                  </Card.Text>
                 
                </Card>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='d-flex justify-content-center align-items-center'>
            <div className="doctor-card">
              <img className="img-fluid doctor-image" src={fifthdctr} alt="Doctor 2" />
              <Card className='card-doctor-main'>
                <Card.Title>
                  <h3 className='hed3'>Dr. Aruna Kalra</h3>
                </Card.Title>
                <Card.Text>
                  <p className='para text-black '>Gynecologists</p>

                </Card.Text>
               
              </Card>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='d-flex justify-content-center align-items-center'>
          <div className="doctor-card">
            <img className="img-fluid doctor-image" src= {fifthd2ctr} alt="Doctor 2" />
            <Card className='card-doctor-main'>
              <Card.Title>
                <h3 className='hed3'>Dr. Mir Asif Rehman</h3>
              </Card.Title>
              <Card.Text>
                <p className='para text-black'>Laparoscopy</p>
                
              </Card.Text>
            </Card>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='d-flex justify-content-center align-items-center'>
        <div className="doctor-card">
          <img className="img-fluid doctor-image" src={fifthd3ctr} alt="Doctor 2" />
          <Card className='card-doctor-main'>
            <Card.Title>
              <h3 className='hed3'>Dr. Vinay Samuel Gaikwad</h3>
            </Card.Title>
            <Card.Text>
              <p className='para text-black '>Oncologist</p>
            </Card.Text>
          </Card>
        </div>
      </div>
    </SwiperSlide>

        </Swiper>
      </Col>
    </Row>
  );
}