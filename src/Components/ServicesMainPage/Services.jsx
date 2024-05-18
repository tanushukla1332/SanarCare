import banner from '../../../public/Image/sanar care scans.png';
import { Row, Col, Button, Card } from 'react-bootstrap';
import ultrasoundImg from '../../../public/Image/ultraSoun.jpg';
import xrayImg from '../../../public/Image/x-ray.png';
import ctScanImg from '../../../public/Image/FileCtScan.jpg';
import radi1 from '../.././../public/Image/radi1 (1).png';
import radi2 from '../../../public/Image/radi1 (2).png';
import radi3 from '../../../public/Image/radi1 (3).png';
import radi4 from '../../../public/Image/radi1 (4).png';
import radi5 from '../../../public/Image/radi1 (5).png';
import IMGEDIT from '../../../public/Image/Group 2181.png';

import IMG from '../../../public/Image/scanPage (1).png';
import IMG1 from '../../../public/Image/scanPage (2).png';
import IMG2 from '../../../public/Image/scanPage (3).png';
import IMG3 from '../../../public/Image/scanPage (4).png';
import IMG4 from '../../../public/Image/scanPage (5).png';
import IMG5 from '../../../public/Image/scanPage (6).png';
import Section10 from '../Home/Section10';
import Section11 from '../Home/Section11';

export default function BookYourScansMainPage() {
  return (
    <>
      <Row style={{ backgroundImage: `url(${banner})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: '400px' }} className='d-flex justify-content-center align-items-center'>
        <Col>
          <div className='px-5 '>
            <h1 className='d-flex gap-4 pl-5 '><span className="hed1" style={{ color: "#FF631A" }}>We're</span>  <span className="hed2" style={{ color: "#46A4D9" }}>Commited to </span></h1>
            <h1 className='d-flex gap-4 pt-1'><span className="hed1" style={{ color: "#46A4D9" }} >empowering</span> <span className='hed2'>you with the</span></h1>
            <h2 className='d-flex gap-4 pt-1' >< span className="hed1" style={{ color: "#46A4D9" }}>Information </span> <span className='hed2'>and </span> <span className="hed1" style={{ color: "#FF631A" }}>resources</span></h2>
            <h1 className='d-flex gap-4 pt-1'> <span className='hed2'>you need to  </span> <span className="hed1" style={{ color: "#FF631A" }}>take Control</span> <span className='hed2'>of your</span> </h1>
            <h1 className="hed1" style={{ color: "#FF631A" }}>Health Journey</h1>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center py-5">
        <Col md={10}>
          <h1 className="hed1 text-center mb-5 hover">Find Your Scans In Gurugram</h1>
          <Row className="py-3 d-flex justify-content-center align-items-center">
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="Ultrasound" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>X-Ray</Card.Title>
                    <div className="icon-container">
                      <img src={radi1} alt="Icon" className="icon" />
                    </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹496</Card.Text>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="Ultrasound" className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>Ultra Sound</Card.Title>
                    <div className="icon-container">
                      <img src={radi3} alt="Icon" className="icon" />
                    </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹496</Card.Text>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="X-Ray" className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>CT Scan</Card.Title>
                    <div className="icon-container">
                      <img src={radi2} alt="Icon" className="icon" />
                    </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹600</Card.Text>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row className="py-3 d-flex justify-content-center align-items-center">
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
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="CT Scan" className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>MRI Test</Card.Title>
                    <div className="icon-container">
                      <img src={radi4} alt="Icon" className="icon" />
                    </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹700</Card.Text>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="X-Ray" className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>ECG Test</Card.Title>
                    <div className="icon-container">
                      <img src={radi5} alt="Icon" className="icon" />
                    </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹600</Card.Text>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row className="py-3 d-flex justify-content-center align-items-center">
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
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="CT Scan" className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>MRI Test</Card.Title>
                    <div className="icon-container">
                      <img src={radi4} alt="Icon" className="icon" />
                    </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹700</Card.Text>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scan-card-main">
                <Card.Img src={xrayImg} alt="X-Ray" className="scan-image" />
                <Card.ImgOverlay>
                  <div className="scan-details">
                    <Card.Title>ECG Test</Card.Title>
                    <div className="icon-container">
                      <img src={radi5} alt="Icon" className="icon" />
                    </div>
                    <Card.Text className="text-center">Prohealth Imaging Gurgaon</Card.Text>
                    <Card.Text className="price text-center">Start ₹600</Card.Text>
                    <div className="text-center my-4 d-flex justify-content-center align-items-center">
                      <Button className="buttonfirst">Book Appointment</Button>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4 d-flex justify-content-center align-items-center">
            <Button className="buttonfirst">VIEW MORE DETAILS</Button>
          </div>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={10}>
          <h1 className='hed1 text-center pb-4'>Sanar Care Scans</h1>
          <p className='text-center para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center py-5' style={{ backgroundColor: "#DEF0FF" }}>
        <Col md={10}>

          <h1 className='hed1 text-center pb-3'>How to book an appointment</h1>
          <div className='d-flex justify-content-center gap-5'>
            <div>
              <h4 className='hed4' style={{ color: "#00C3E6" }}>We will reach out to

                <br />
                you to understand your <br />
                requirements. <br />
              </h4>

            </div>
            <div  >
              <h4 className='hed4' style={{ color: "#00C3E6" }}>We’ll book your test  <br />
                as per your preferred
                <br />
                date and time slot.</h4>

            </div>
          </div>
          <img src={IMGEDIT} alt="" className='img-fluid' />


          <div className='d-flex justify-content-evenly gap-5 align-items-center  pt-4'>

            <div>
              <h4 className='hed4 ps-5 text-center' style={{ color: "#FF3654" }}>Leave your name & <br />
                phone number with us.</h4>

            </div>
            <div>
              <h4 className='hed4' style={{ color: "#FF9D00" }}>Lab details & charges will  <br />
                be shared with you <br />
                over the call.</h4>

            </div>




          </div>
        </Col>

      </Row>
      <Row className='d-flex justify-content-center align-items-center py-5 '>
        <Col md={10}>
          <h1 className='hed1 text-center'>Why Sanar Care Scans</h1>
          <div className='d-flex justify-content-center align-items-center gap-5  py-5'>
            <div className='scan-div1st'>
              <img src={IMG5} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>7+ Years of Experiencein <br /> Dependable Diagnostic Services</p>

            </div>
            <div className='scan-div1st'>
              <img src={IMG4} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>20 Lakh Satisfied <br />Customers & Counting</p>

            </div>
            <div className='scan-div1st'>
              <img src={IMG3} alt="" className='img-fluid' style={{ width: "120px" }} />
              <p className='hed4 text-center pt-1'>Honest Pricing</p>

            </div>

          </div>
          <div className='d-flex justify-content-center align-items-center gap-5'>
            <div className='scan-div1st'>
              <img src={IMG} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>Experienced &  <br />Dedicated Specialists</p>

            </div>
            <div className='scan-div1st'>
              <img src={IMG1} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-2'>350+ Diagnostic Centers <br />Across 30+ Cities</p>

            </div>
            <div className='scan-div1st'>
              <img src={IMG2} alt="" className='img-fluid' />
              <p className='hed4 text-center pt-1'>3-Layer <br /> COVID Safe Labs</p>
            </div>

          </div>
        </Col>
      </Row>
      <Section10 />
      <Section11 />

      <Row className='d-flex justify-content-center align-items-center py-5'>
        <h1 className='hed1 text-center'>Know cost & Book your tests</h1>
        <h1 className='hed1 text-center pb-5'>Digital X-ray</h1>
        <div className='col-md-10 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para'>Xray Chest Pa View</p>
          <p className='scan-div2 para'>Xray Chest Aa View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Lumbar Spine Ap And Lateral View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Cervical Spine Ap And Lateral View</p>
        </div>
        <div className='col-md-8 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "220px" }}>Xray Abdomen Ap View</p>
          <p className='scan-div2 para' style={{ width: "260px" }}>Xray Lumbar Spine Lateral View</p>
          <p className='scan-div2 para' style={{ width: "230px" }} >Xray Lumbar Spine Ap View</p>
          <p className='scan-div2 para' style={{ width: "235px" }}>Xray Cervical Spine Ap View</p>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para'>Xray Pelvis Ap View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Left Knee Ap And Lateral View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Right Knee Ap And Lateral View</p>
          <p className='scan-div2 para' >Xray Left Knee Ap View</p>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Ls Spine Extension View</p>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Left Wrist Joint Ap View</p>
          <p className='scan-div2 para' style={{ width: "240px" }}>Xray Left Knee Lateral View</p>
        </div>



      </Row>
      <Row className='d-flex justify-content-center align-items-center'>
        <h1 className='hed1 text-center pb-5'>Ultrasound</h1>
        <div className='col-md-10 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para'>Xray Chest Pa View</p>
          <p className='scan-div2 para'>Xray Chest Aa View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Lumbar Spine Ap And Lateral View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Cervical Spine Ap And Lateral View</p>
        </div>
        <div className='col-md-8 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "220px" }}>Xray Abdomen Ap View</p>
          <p className='scan-div2 para' style={{ width: "260px" }}>Xray Lumbar Spine Lateral View</p>
          <p className='scan-div2 para' style={{ width: "230px" }} >Xray Lumbar Spine Ap View</p>
          <p className='scan-div2 para' style={{ width: "235px" }}>Xray Cervical Spine Ap View</p>
        </div>

        <div className='d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Ls Spine Extension View</p>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Left Wrist Joint Ap View</p>
          <p className='scan-div2 para' style={{ width: "240px" }}>Xray Left Knee Lateral View</p>
        </div>



      </Row>
      <Row className='d-flex justify-content-center align-items-center py-5'>
        <h1 className='hed1 text-center pb-5'>CT Scan</h1>
        <div className='col-md-10 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para'>Xray Chest Pa View</p>
          <p className='scan-div2 para'>Xray Chest Aa View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Lumbar Spine Ap And Lateral View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Cervical Spine Ap And Lateral View</p>
        </div>
        <div className='col-md-8 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "220px" }}>Xray Abdomen Ap View</p>
          <p className='scan-div2 para' style={{ width: "260px" }}>Xray Lumbar Spine Lateral View</p>
          <p className='scan-div2 para' style={{ width: "230px" }} >Xray Lumbar Spine Ap View</p>
          <p className='scan-div2 para' style={{ width: "235px" }}>Xray Cervical Spine Ap View</p>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para'>Xray Pelvis Ap View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Left Knee Ap And Lateral View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Right Knee Ap And Lateral View</p>
          <p className='scan-div2 para' >Xray Left Knee Ap View</p>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Ls Spine Extension View</p>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Left Wrist Joint Ap View</p>
          <p className='scan-div2 para' style={{ width: "240px" }}>Xray Left Knee Lateral View</p>
        </div>



      </Row>
      <Row className='d-flex justify-content-center align-items-center'>
        <h1 className='hed1 text-center pb-5'>MRI Scan</h1>
        <div className='col-md-10 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para'>Xray Chest Pa View</p>
          <p className='scan-div2 para'>Xray Chest Aa View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Lumbar Spine Ap And Lateral View</p>
          <p className='scan-div2 para' style={{ width: "350px" }}>Xray Cervical Spine Ap And Lateral View</p>
        </div>
        <div className='col-md-8 d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "220px" }}>Xray Abdomen Ap View</p>
          <p className='scan-div2 para' style={{ width: "260px" }}>Xray Lumbar Spine Lateral View</p>
          <p className='scan-div2 para' style={{ width: "230px" }} >Xray Lumbar Spine Ap View</p>
          <p className='scan-div2 para' style={{ width: "235px" }}>Xray Cervical Spine Ap View</p>
        </div>

        <div className='d-flex justify-content-center align-items-center gap-3'>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Ls Spine Extension View</p>
          <p className='scan-div2 para' style={{ width: "250px" }}>Xray Left Wrist Joint Ap View</p>
          <p className='scan-div2 para' style={{ width: "240px" }}>Xray Left Knee Lateral View</p>
        </div>



      </Row>
      <Row className='d-flex justify-content-center align-items-center'>
        <div className=' d-flex justify-content-center align-items-center py-3 gap-5'>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>ECG Test</h1>
            <p className="scan-div2 para text-center" style={{ width: "60px" }}>Ecg</p>
          </div>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>ECHO Test</h1>
            <p className="scan-div2 para text-center" style={{ width: "60px" }}>Echo</p>
          </div>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>TMT Test</h1>
            <p className="scan-div2 para text-center" style={{ width: "60px" }}>Tmt</p>
          </div>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' >
            <h1 className='hed3 text-center'>PET Scan
            </h1>
            <p className="scan-div2 para text-center" >Pet Ct Scan Whole Body</p>
          </div>

        </div>
        <div className=' d-flex justify-content-center align-items-center py-3 gap-5'>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>EEG Test</h1>
            <p className="scan-div2 para text-center" style={{ width: "60px" }}>Eeg</p>
          </div>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>DEXA Scan</h1>
            <p className="scan-div2 para text-center" >Dexa Bmd Single Site</p>
          </div>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>PFT Tests</h1>
            <p className="scan-div2 para text-center" style={{ width: "60px" }}>Pft</p>
          </div>


        </div>
        <div className=' d-flex justify-content-center align-items-center py-3 gap-5'>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>Mammography</h1>
            <p className="scan-div2 para text-center" style={{ width: "250px" }}>Single Breast Mammography</p>
          </div>
          <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ borderRight: "1px solid #D9D9D9", paddingRight: '30px' }}>
            <h1 className='hed3 text-center'>EMG NCV Test</h1>
            <p className="scan-div2 para text-center" style={{ width: "60px" }} >Emg</p>
          </div>


        </div>
      </Row>
      <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}>
        <div>
        <h4 className='hed4 text-center'>Digital X-Ray In Gurgaon</h4>
          <p className='para text-center'>Abdominal X-ray in Gurgaon / Cervical X-ray in Gurgaon /
           Chest X-ray in Gurgaon / Knee X-ray in Gurgaon / Pelvis X-ray in Gurgaon</p>
        </div>
        <div>
        <h4 className='hed4 text-center'>Ultrasound In Gurgaon</h4>
          <p className='para text-center'>Abdominal X-ray in Gurgaon / Cervical X-ray in Gurgaon /
          Heart CT Scan in Gurgaon / Sinus CT Scan in Gurgaon / Abdominal CT Scan in Gurgaon / Brain CT Scan in Gurgaon / Chest CT Scan in Gurgaon / 
CT KUB Scan in Gurgaon / CT PNS Scan in Gurgaon / CBCT Scan in Gurgaon / CECT Scan in Gurgaon / CT Coronary Angiography in Gurgaon / 
HRCT Scan in Gurgaon</p>
        </div>
        <div>
        <h4 className='hed4 text-center'>CT Scan In Gurgaon</h4>
          <p className='para text-center'>Heart CT Scan in Gurgaon / Sinus CT Scan in Gurgaon / Abdominal CT Scan in Gurgaon / Brain CT Scan in Gurgaon / Chest CT Scan in Gurgaon / 
CT KUB Scan in Gurgaon / CT PNS Scan in Gurgaon / CBCT Scan in Gurgaon / CECT Scan in Gurgaon / CT Coronary Angiography in Gurgaon / 
HRCT Scan in Gurgaon</p>
        </div>
        <div>
        <h4 className='hed4 text-center'>MRI Scan In Gurgaon</h4>
          <p className='para text-center'>Brain MRI Scan in Gurgaon / MRI Lumbar Spine Scan in Gurgaon / Pelvis MRI Scan in Gurgaon / MRI Knee Scan in Gurgaon / Ankle MRI Scan in 
Gurgaon / Shoulder MRI Scan in Gurgaon / 3T MRI Scan in Gurgaon / MRCP Scan in Gurgaon / MRI Angiogram in Gurgaon / MRI Cervical Spine in 
Gurgaon / MRI Dorsal Spine in Gurgaon</p>
        </div>
        <div>
        <h4 className='hed4 text-center'>PET Scan In Gurgaon</h4>
          <p className='para text-center'>Heart PET Scan in Gurgaon / PSMA PET Scan in Gurgaon / Brain PET Scan in Gurgaon / Dotanoc PET Scan in Gurgaon</p>
        </div>
        <div>
        <h4 className='hed4 text-center'>PFT Tests In Gurgaon</h4>
          <p className='para text-center'>Arterial Blood Gas Test in Gurgaon / Body Plethysmography in Gurgaon / Bronchial Provocation Test in Gurgaon / DLCO Test in Gurgaon / 
Pulse Oximetry Test in Gurgaon / Spirometry Test in Gurgaon</p>
        </div>
        <div>
        <h4 className='hed4 text-center pb-1'>ECG Test In Gurgaon</h4>
        </div>
        <div>
        <h4 className='hed4 text-center pb-1'>Echo Test In Gurgaon</h4>
        </div>
        <div>
        <h4 className='hed4 text-center pb-1'>TMT Test In Gurgaon</h4>
        </div>
        <div>
        <h4 className='hed4 text-center pb-1'>EEG Test In Gurgaon</h4>
        </div>
        <div>
          <h4 className='hed4 text-center pb-1'>DEXA Scan In Gurgaon</h4>
        </div>
        <div>
          <h4 className='hed4 text-center pb-1'>Mammography In Gurgaon</h4>
        </div>
        <div>
          <h4 className='hed4 text-center pb-1'>EMG NCV Test In Gurgaon</h4>
        </div>
        <div>
          <h4 className='hed4 text-center pb-1'>Scan Centres Near Me</h4>
        </div>
        </Col>
      </Row>


    </>
  )
}