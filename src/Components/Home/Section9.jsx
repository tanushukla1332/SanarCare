
import { Row, Col, Card, Button } from 'react-bootstrap';
import health1Img from '../../../public/Image/Health1.png';
import health2Img from '../../../public/Image/Health2.png';
import health3Img from '../../../public/Image/Health3.png';
import health4Img from '../../../public/Image/Health4.png';
import health5Img from '../../../public/Image/Health5.png';
import health6Img from '../../../public/Image/Health6.png';
import health7Img from '../../../public/Image/Health7.png';
import { useState } from 'react';


export default function Section9() {

    const healthdata = [
        {
            img: health1Img,
            titile: "OFFER BY METROPOLIS ON HAIR LOSS MONITOR PACKAGE",
            packages: "Health Packages",
            price: "₹2,510.00"
        },
        {
            img: health2Img,
            titile: "OFFER BY METROPOLIS ON COMPREHENSIVE PACKAGE",
            packages: "Health Packages",

            price: "₹2,510.00"
        },
        {
            img: health3Img,
            titile: "OFFER BY METROPOLIS ON WOMEN PACKAGE",
            packages: "Health Packages",

            price: "₹2,510.00"
        },
        {
            img: health4Img,
            titile: "OFFER BY METROPOLIS ON COMPREHENSIVE PACKAGE",
            packages: "Health Packages",

            price: "₹2,510.00"
        },
        {
            img: health5Img,
            titile: "OFFER BY METROPOLIS ON COMPREHENSIVE PACKAGE",
            packages: "Health Packages",
            price: "₹2,510.00"
        },
        {
            img: health6Img,
            titile: "RUBIK HEALTH CHECK UP FOR ALL AGE GROUP",
            packages: "Health Packages",
            price: "₹2,510.00"
        },
        {
            img: health7Img,
            titile: "OFFER BY MAHAJAN IMAGING ON CARDIAC AND DIABETIC CARE PACKAGE",
            packages: "Health Packages",
            price: "₹2,510.00"
        },
        {
            img: health7Img,
            titile: "OFFER BY MAHAJAN IMAGING ON CARDIAC AND DIABETIC CARE PACKAGE",
            packages: "Health Packages",
            price: "₹2,510.00"
        }



    ]
    const [displayCount, setDisplayCount] = useState(3);

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 3);
    };

    return (
        <>
        <Row className="py-5 d-flex justify-content-center align-items-center">
        <h1 className='hed1 text-center'>HEALTH PACKAGES OFFERS</h1>
        <Col md={10}>
            <Row className='py-5'>
                {healthdata.slice(0, displayCount).map((data, index) => (
                    <Col key={index} md={4}>
                        <div className='health-div'>
                            <img src={data.img} alt="" className='img-fluid' />
                                <h4 className='hed4 text-center pt-5 fw-bold' style={{ color: "#46A4D9" }}>{data.titile}</h4>
                                    <p className='para text-center'>{data.packages}</p>
                                    <p className='para text-center pt-1' 
                                    style={{color:"#00AC26",fontWeight:"800"}}> 
                                    <span style={{color:"#585454",textDecoration:"line-through",fontWeight:"500"}}>₹8,655.00</span> {data.price} </p>
                                    <div className='d-flex justify-content-center align-items-center text-center'>
                                        <Button className='buttonfirst'>Enquire Now</Button>
                                    </div>
                        </div>
                    </Col>
                ))}
            </Row>
            {healthdata.length > displayCount && (
                <div className="text-center d-flex justify-content-center align-items-center">
                    <Button onClick={handleLoadMore} className='buttonfirst'>Load More</Button>
                </div>
            )}
        </Col>
    </Row>

        </>
    )
}