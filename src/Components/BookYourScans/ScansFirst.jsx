import { Card } from 'react-bootstrap';
import img1 from '../../../public/Image/medical_11533079 1.png';

export default function SCanFirst() {
    const CardData = [
        {
            url: img1,
            title: "Prohealth Imaging Gurgaon",
            subtitle: "Greater Kailash II, Block M, Greater Kailash Greater Kailash II, Block M, Greater Kailash",
            price: "₹496",
            button: "Book Appointment"
        },
        {
            url: img1,
            title: "Prohealth Imaging Gurgaon",
            subtitle: "Greater Kailash II, Block M, Greater Kailash Greater Kailash II, Block M, Greater Kailash",
            price: "₹496",
            button: "Book Appointment"
        },
        {
            url: img1,
            title: "Prohealth Imaging Gurgaon",
            subtitle: "Greater Kailash II, Block M, Greater Kailash Greater Kailash II, Block M, Greater Kailash",
            price: "₹496",
            button: "Book Appointment"
        }
    ];

    return (
        <>
            {CardData.map((data, index) => (
                <div key={index} className='py-4' >
                    <Card className='scan-card'>
                    <div className='d-flex flex-row justify-content-center align-items-center '>
                           <div className='scan-card-img-div'>
                           <img variant="top" src={data.url} style={{ width: "50px" ,height:"50px" }}  />
                           </div>
                            <Card.Body className='px-5'>
                                <h1 className="hed3" style={{ color: "#46A4D9" }}>{data.title}</h1>
                                <p className="hed4">{data.subtitle}</p>
                            </Card.Body>
                            </div>
                            <div className='d-flex align-items-center justify-content-center  gap-5 py-3' >
                                <div className="para d-flex align-items-center  justify-content-center ">
                                    <span style={{ textDecoration: "line-through" }}>₹900</span>
                                    <span style={{ color: '#FF851B', marginLeft: "10px" }}>{data.price}</span>
                                </div>
                           <div>
                           <button className="buttonfirst px-5 fw-bold">{data.button}</button>
                           </div>
                           </div>
                    </Card>
                </div>
            ))}
        </>
    );
}
