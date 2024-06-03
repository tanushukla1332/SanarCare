import{Row,Col,Form,Button} from 'react-bootstrap';
import CategoryFirst from './CategoryFirst';
import doctoimg from '../../../public/Image/Doctor.png';
import Nablimg from './../../../public/Image/Mask group (1).png';
import patients from '../../../public/Image/Mask group (2).png';
import reliable from '../../../public/Image/Mask group (3).png';
import mri from '../../../public/Image/Mask group.png';
import icons from '../../../public/Image/Mask group (4).png';
import img2 from '../../../public/Image/Group 2012.png';

export default  function CategorySub({h4,h3}){
    return(
        <>
         <Row className='d-flex justify-content-center py-5 gap-5'>
        <Col md={6}>
          <h4 className='hed4 text-black'>{h4}</h4>
          <h3 className='hed3 fw-bold' style={{ color: "#585454" }}>{h3}</h3>
          <CategoryFirst />
        </Col>
        <Col md={4} className="d-flex flex-column form-scans-col px-0" style={{ marginTop: "70px" }}
        >
          <div className='form-scans' >
            <div className="d-flex pt-2" style={{
              backgroundColor: "#46A4D9", borderTopRightRadius: "25px",
              borderTopLeftRadius: "25px"
            }}>
              <img src={doctoimg} alt="Scan Banner" className="img-fluid" />
              <h2 className="text-white hed2 pb-2">Scan with care, 
trust Sanar Care</h2>
            </div>
            <Form className='p-4'>
              <Form.Group controlId="formPatientName" className="mb-4">
                <Form.Label className='hed3'>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Patient Name" />
              </Form.Group>

              <Form.Group controlId="formMobileNumber" className="mb-4">
                <Form.Label className='hed3'>Your Mobile Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter Your Mobile No." />
              </Form.Group>

              <Form.Group controlId="formLocation" className="mb-4">
                <Form.Label className='hed3'>Location</Form.Label>
                <Form.Control type="text" placeholder="Gurugram" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label className='hed3'>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Typing..." />
              </Form.Group>
              <Form.Group controlId="formMessage " className="mb-2">
                <span className='d-flex gap-3  mt-2'>
                  <Form.Check type="checkbox" className='hed3' />
                  <Form.Label className='para' style={{ color: "#000000" }}>You hereby affirm & authorise Sanarcare to
                    process the personal data as per the T&C.</Form.Label></span>
              </Form.Group>
              <div className="text-center d-flex justify-content-center align-items-center">
                <Button variant="primary" type="submit" className="px-5 buttonfirst">
                  Submit
                </Button>
              </div>
            </Form>
          </div>

        </Col>

      </Row>
       <Row className='d-flex align-items-center justify-content-center'>
       <h1 className='hed1 text-center pb-3'>Why Choose Sanarcare</h1>
       <Col md={10} className=" d-flex  flex-column justify-content-center align-items-center">
         <div>
           <p className='para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione! Asperiores repellat vitae accusantium cum voluptate? Ullam alias maxime at illo ratione. Laborum quasi commodi dicta, voluptas sint ipsum in necessitatibus quas nihil repudiandae eius reprehenderit hic optio. Ad neque recusandae quaerat ut! Vero deleniti numquam porro possimus laudantium qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas alias quos deserunt totam libero magnam laborum autem facere sint dicta. Voluptatum dolore facilis odio nostrum recusandae at dolorum, nam cupiditate earum nihil architecto iusto aperiam officia facere exercitationem mollitia, consequuntur repellendus maxime, tenetur vero sit laborum consectetur esse quibusdam. Velit.</p>
         </div>
         <div className='col-md-10 d-flex justify-content-center align-items-center gap-5 pt-3 pb-4'>
           <div className='scan-div1st '>
             <img src={Nablimg} alt="" className='img-fluid' />
             <h4 className='para'>ISO and NABH <br />
               certified scan centers</h4>
           </div>
           <div className='scan-div1st'>
             <img src={reliable} alt="" className='img-fluid' />

             <h4 className='para'>100% reliable and  <br />
               accurate reports</h4>
           </div>


           <div className='scan-div1st'>
             <img src={patients} alt="" className='img-fluid' />
             <h4 className='para'>Patients save an a <br />
               verage of ₹700 <br />
               on each scan</h4>
           </div>
           <div className='scan-div1st'>
             <img src={mri} alt="" className='img-fluid' />
             <h4 className='para'>1.5 lakh+ patients <br />
               test with us every  <br />
               month</h4>
           </div>
         </div>


       </Col>
       <div className='filed-div col-md-11 col-xl-12 col-lg-12  mt-3'>
         <div className='col-md-9 d-flex justify-content-center align-items-center ps-5'  >
           <img src={icons} alt="" className='img-fluid' />
           <h3 className='hed3 text-white ps-2'>Don't have a prescription? Consult a doctor online</h3>
         </div>
         <div className="ms-auto">
           <Button className='button-white-bg'>Book Consultation</Button>
         </div>


       </div>
     </Row>
     <Row className="d-md-flex justify-content-center align-items-center py-5 sectionContainerHealth mb-5">
        <Col md={11} lg={12} xl={12} xs={10} sm={10} className=" d-md-flex  justify-content-center py-lg-0 py-md-0 py-xl-0 py-3  ">
          <Col md={6}>
            <h1 className='hed1'>
              What is a digital X-ray?
            </h1>
            <div className='d-flex  justify-content-center'>
              <p className='para pt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>

          </Col>
          <Col md={4}>
            <div className='d-flex  justify-content-center '>
              <img src={img2} alt="" className='img-fluid' />
            </div>
          </Col>
        </Col>
        <div className='col-md-10 para' style={{ marginTop: '-65px' }}>
          <p >
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an
            unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <p>
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an
              unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </p>

        </div>

      </Row>
        </>
       
      
    )

}