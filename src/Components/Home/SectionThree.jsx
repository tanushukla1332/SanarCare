
import {Row,Col,Carousel,Card,Button} from  'react-bootstrap';
import ultrasoundImg from '../../../public/Image/ultraSoun.jpg';
import xrayImg from '../../../public/Image/x-ray.png';
import ctScanImg from '../../../public/Image/FileCtScan.jpg';
import radi1 from '../.././../public/Image/radi1 (1).png';
import radi2 from '../../../public/Image/radi1 (2).png';
import radi3 from '../../../public/Image/radi1 (3).png';
import radi4 from '../../../public/Image/radi1 (4).png';
import radi5 from '../../../public/Image/radi1 (5).png';

export default function SectionThree(){
    return(
        <Row className=" d-flex justify-content-center align-itmes-center  py-5">
        <Col md={10}>
          <h1 className=" hed1 text-center pb-4 hover">Your Scans In Gurugram</h1>
          <Row className="py-3 d-flex justify-content-center align-itmes-center ">
          <Carousel className="scansIndicators" indicators={false}>
          <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center gap-0">
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="Ultrasound"  className='scan-image'/>
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>X-Ray</Card.Title>
                    <div className="icon-container">
                    <img src={radi1} alt="Icon" className="icon" />
                     </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹496</Card.Text>
                    <div className="text-center my-4  d-flex justify-content-center align-items-center">
                    <Button className="buttonfirst">Book Appointment</Button>
                  </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="scan-card-main">
              <Card.Img src={ultrasoundImg} alt="Ultrasound"  className="scan-image"/>
              <Card.ImgOverlay>
                <div className="scan-details">
                  <Card.Title>Ultra Sound</Card.Title>
                  <div className="icon-container">
                  <img src={radi3} alt="Icon" className="icon" />
                   </div>
                  <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                  <Card.Text className="price text-center">Start ₹496</Card.Text>
                  <div className="text-center my-4  d-flex justify-content-center align-items-center ">
                  <Button className="buttonfirst">Book Appointment</Button>
                </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={ctScanImg} alt="X-Ray"  className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>CT Scan</Card.Title>
                    <div className="icon-container">
                    <img src={radi2} alt="Icon" className="icon" />
                     </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹600</Card.Text>
                    <div className="text-center my-4  d-flex justify-content-center align-items-center ">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            </div>
            </Carousel.Item>
            <Carousel.Item >
            <div  className="d-flex justify-content-center align-items-center gap-3">
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="Ultrasound" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>PT SCAN</Card.Title>
                    <div className="icon-container">
                    <img src={radi3} alt="Icon" className="icon" />
                     </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹496</Card.Text>
                    <div className="text-center my-4  d-flex justify-content-center align-items-center ">
                      <Button  className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={ultrasoundImg} alt="CT Scan"  className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>MRI Test</Card.Title>
                    <div className="icon-container">
                    <img src={radi4} alt="Icon" className="icon" />
                     </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹700</Card.Text>
                    <div className="text-center my-4  d-flex justify-content-center align-items-center ">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={ctScanImg} alt="X-Ray"   className="scan-image"/>
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>ECG Test</Card.Title>
                    <div className="icon-container">
                    <img src={radi5} alt="Icon" className="icon"  />
                     </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹600</Card.Text>
                    <div className="text-center my-4  d-flex justify-content-center align-items-center ">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            </div>
            </Carousel.Item>
            </Carousel>
          </Row>
          <div className="text-center mt-4 d-flex justify-content-center align-items-center ">
            <Button className="buttonfirst">VIEW MORE DETAILS</Button>
          </div>
        </Col>
      </Row>
    )
}