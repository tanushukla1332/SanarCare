import bgimg from '../../../public/Image/Fifthsecbg.png';
import logoImg6 from '../../../public/Image/patnrs1.webp';
import logoImg2 from '../../../public/Image/FifthsecimgTwo.png';
import logoImg3 from '../../../public/Image/FifthsecimgThree.png';
import logoImg4 from '../../../public/Image/Logo.png';
import logoImg5 from '../../../public/Image/Logofive.png';
import logoImg7 from '../../../public/Image/patnrs3.jpeg';
import { Row, Col, Carousel } from 'react-bootstrap';

export default function SectionSix() {
    return (
      <div className='px-0'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxWidth:"100%",
          height:"auto",
         
        }}
      >
        <Row className='d-flex justify-content-center align-items-center  py-lg-5 py-xl-5 py-md-5 py-2 px-0'>
          <Col md  sm={10}  xs={10} className='px-0' >
            <h2 className='hed1 text-white text-center'>
              Our Partnership with Certified Diagnostic Centers
            </h2>
            <p className=' text-light  text-center'>Our certified diagnostic centers boast state-of-the-art equipment and hold accreditations from CAP and NABL, ensures accuracy of the test reports.</p>
            <Carousel indicators={false} controls={true} interval={3000}>
              <Carousel.Item>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={logoImg4} alt="Logo 1" style={{ maxHeight: '100px', margin: '0 20px' }} />
                  <img src={logoImg2} alt="Logo 2" style={{ maxHeight: '100px', margin: '0 20px' }} />
                  <img src={logoImg3} alt="Logo 3" style={{ maxHeight: '100px', margin: '0 20px' }} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={logoImg6} alt="Logo 5" style={{ maxHeight: '100px', margin: '0 20px' }} />
                  <img src={logoImg5} alt="Logo 5" style={{ maxHeight: '100px', margin: '0 20px' }} />
                  <img src={logoImg7} alt="Logo 5" style={{ maxHeight: '100px', margin: '0 20px' }} />
                </div>
              </Carousel.Item>
         
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }