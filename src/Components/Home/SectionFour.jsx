
import {Row,Col} from 'react-bootstrap';


import ThirdsecImg from '../../../public/Image/thirdsec.png'


export default function SectionFour(){
    return(
           
        <Row   className="d-flex justify-content-center  gap-5">
        <Col md={5} className= "py-5" >
        <img src={ThirdsecImg} alt="" className="img-fluid" />  </Col>
        <Col md={5} className= "py-5">
        <h1 className="hed1">Stay Ahead with 
        Preventive Health 
        Check-Up</h1>
        <p className="para">Our busy lifestyle often leave little room for physical activity, leading to 
        health issues like heart diseases, cancer, mental health issues, diabetes, 
        and hormonal imbalances. But we can prevent these problems by 
        planning and getting regular health check-ups. Whether it's yearly or 
        monthly, these check-ups increase our chances of early detection and 
        treatment. How often you need them depends on your age, family 
        history, and if you smoke.</p>

        </Col>

        </Row>
    )
}