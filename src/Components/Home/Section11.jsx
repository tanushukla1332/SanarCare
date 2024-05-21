import React from 'react';
import { Row, Col,Card } from 'react-bootstrap';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import sec11img from '../../../public/Image/sec114.png';
import sec2img from '../../../public/Image/sec113.png';
import sec3img from '../../../public/Image/sec112.png';
import thumbimg from '../../../public/Image/thumb.png';
import IMG1 from '../../../public/Image/test.png';


export default function Section11() {
  const testimonials = [
    {
      id: 0,
      image: sec11img,
      name: 'Nikhil Dang',
      quote: 'Thank you so much SANAR CARE: Diagnostic and Pathology Lab in Gurgaon. I do really appreciate your services and timing. Thank you!',
    },
    {
      id: 1,
      image: sec2img,
      name: 'Navdeep Kaur',
      quote: 'Thank you so much SANAR CARE: Diagnostic and Pathology Lab in Gurgaon. I do really appreciate your services and timing. Thank you!',
    },
    {
      id: 2,
      image: sec3img,
      name: 'Laxmi Kalra',
      quote: 'Thank you so much SANAR CARE: Diagnostic and Pathology Lab in Gurgaon. I do really appreciate your services and timing. Thank you!',
    },
    {
      id: 3,
      image: sec11img,
      name: 'Nikhil Dang',
      quote: 'Thank you so much SANAR CARE: Diagnostic and Pathology Lab in Gurgaon. I do really appreciate your services and timing. Thank you!',
    },
    {
      id: 4,
      image: sec2img,
      name: 'Navdeep Kaur',
      quote: 'Thank you so much SANAR CARE: Diagnostic and Pathology Lab in Gurgaon. I do really appreciate your services and timing. Thank you!',
    },
    {
      id: 5,
      image: sec3img,
      name: 'Laxmi Kalra',
      quote: 'Thank you so much SANAR CARE: Diagnostic and Pathology Lab in Gurgaon. I do really appreciate your services and timing. Thank you!',
    },
  ];
    const slidesPerView = window.innerWidth < 768 ? 1 : 3;

  return (
    <Row className="section11-container py-lg-5 py-md-5 py-xl-5 py-3">
    <h1 className='hed1 text-center text-white pb-lg-5 pb-xl-5 pb-md-5 pb-3'>Patient Testimonials</h1>
    <Col md={5}  className='d-md-block d-none'>
      <h3 className="hed3 text-white text-center">
        Hear from our customers about their experiences with Sanar Care's services. We value feedback regarding their visits to our labs.

      </h3>
      <img src={IMG1} alt="" className='img-fluid'/>
    </Col>
    <Col md={7}> 
      <div className="swiper-container pb-5">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="d-flex justify-content-center">
              <Card className="testimonial-card">
                <div style={{ position: "relative" }}>
                  <img src={testimonial.image} alt="Testimonial" className="testimonial-image" />
                </div>
                <div style={{ position: "absolute", top: "170px" }}>
                  <img
                    src={thumbimg}
                    alt=""
                    className="img-fluid"
                    style={{ backgroundColor: "#46A4D9", borderRadius: "50%", padding: "6px" }}
                  />
                </div>
                <Card.Body>
                  <h4 className="hed3" style={{ color: "#585454" }}>
                    {testimonial.name}
                  </h4>
                  <p className="para">{testimonial.quote}</p>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Col>
  </Row>

  );
}
