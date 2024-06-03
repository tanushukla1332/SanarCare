import { Row, Col, Card, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ultrasoundImg from '../../../public/Image/ultraSoun.jpg';
import xrayImg from '../../../public/Image/doctor-patient-watching-x-ray.jpg';
import ctScanImg from '../../../public/Image/FileCtScan.jpg';
import radi1 from '../.././../public/Image/radi1 (1).png';
import radi2 from '../../../public/Image/radi1 (2).png';
import radi3 from '../../../public/Image/radi1 (3).png';
import radi4 from '../../../public/Image/radi1 (4).png';
import radi5 from '../../../public/Image/radi1 (5).png';

export default function SectionThree() {
  const slidesData = [
    {
      img: xrayImg,
      title: "X-Ray",
      icon: radi1,
      center: "Prohealth Imaging Gurgaon",
      price: "₹496",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "Ultra Sound",
      icon: radi3,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹496",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "CT Scan",
      icon: radi2,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹600",
      buttonText: "Book Appointment",
    },
    {
      img: xrayImg,
      title: "PT SCAN",
      icon: radi3,
      center: "Prohealth Imaging Gurgaon",
      price: "₹496",
      buttonText: "Book Appointment",
    },
    {
      img: ultrasoundImg,
      title: "MRI Test",
      icon: radi4,
      center: "Prohealth Imaging Gurgaon",
      price: " ₹700",
      buttonText: "Book Appointment",
    },
    {
      img: ctScanImg,
      title: "ECG Test",
      icon: radi5,
      center: "Prohealth Imaging Gurgaon",
      price: "₹600",
      buttonText: "Book Appointment",
    },
  ];
  const slidesPerView = window.innerWidth < 768 ? 2 : 4;
  return (
    <Row className="d-md-flex justify-content-center align-items-center py-lg-5 py-xl-5 py-md-5 py-4">
      <Col md={10} xs={12}>
        <h1 className="hed1 text-center pb-xl-4 pb-lg-4 pb-md-4 pb-0 hover">Book Scans From SanarCare & Test Services</h1>
        <Row className="py-lg-3 py-md-3 py-xl-3 py-1  d-flex justify-content-center align-items-center">
          <Swiper
            spaceBetween={10}
            slidesPerView={slidesPerView}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ 
              delay: 3000,
              disableOnInteraction: false
             }}
           
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
             {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Col md={12} xs={12} className="d-flex justify-content-center ">
                  <Card  className='scan-card-main'>
                    <img src={slide.img} alt={slide.title}  className='img-fluid scan-image' />
                    <Card.Body>
                      <Card.Title className="text-center hed3">{slide.title}</Card.Title>
                      <Card.Text className="text-center hed4">{slide.center}</Card.Text>
                      <Card.Text className="price text-center para">  <span className='para'>start </span><span style={{textDecoration:"line-through",color:'#3b7fbf',fontSize:"16px"}}>900</span>
                      <span ><span className='para'>{slide.price}</span></span></Card.Text>
                      
                    </Card.Body>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                        <Button className="buttonfirst scan-button-sm">{slide.buttonText}</Button>
                      </div>
                      <div className='border'>

                      </div>
                  </Card>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
       
      </Col>
           
         
        
    </Row>
  );
}
