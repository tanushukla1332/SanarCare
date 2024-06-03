import { Card } from 'react-bootstrap';
import img1 from '../../../public/Image/medical\_11533079 1.png';
import {useState} from 'react';

export default function CategoryFirst() {
    const [data,setData] =useState(6)

    const LoadMore=()=>{
        setData(prevCount=>prevCount+1)
    }
  const CardData = [
    {
      url: img1,
      title: "Prohealth Imaging Gurgaon",
      subtitle: "1866-P, opposite H.C.C.C, N.G Puram, Gurugram, Haryana 122011",
      price: "₹496",
      button: "Book Appointment"
    },
    {
      url: img1,
      title: "Health Quest Imaging, Gurgaon",
      subtitle: "Plot No. 222, Sector 51, Gurugram, Haryana 122003",
      price: "₹413",
      button: "Book Appointment"
    },
    {
      url: img1,
      title: "Health Quest Imaging, Manesar",
      subtitle: "Bus stand, ground floor, Manesar, Gurugram, Haryana 122052",
      price: "₹413",
      button: "Book Appointment"
    },
    {
      url: img1,
      title: "OrthoRad Clinic & Diagnostics, Gurgaon",
      subtitle: "119 & 120, First Floor, Tower A, S ector 69, Gurugram, Haryana 122005",
      price: "₹413",
      button: "Book Appointment"
    },
    {
      url: img1,
      title: "Scan Lab Diagnostics , Gurgaon",
      subtitle: " Sector Vijay Bai, Near gate, Huda Colony, Sector 46, Gurugram, Haryana 122003",
      price: "₹567",
      button: "Book Appointment"
    },
     {
      url: img1,
      title: "OrthoRad Clinic & Diagnostics, Gurgaon",
      subtitle: "119 & 120, First Floor, Tower A, S ector 69, Gurugram, Haryana 122005",
      price: "₹413",
      button: "Book Appointment"
    },
    {
      url: img1,
      title: "Scan Lab Diagnostics , Gurgaon",
      subtitle: " Sector Vijay Bai, Near gate, Huda Colony, Sector 46, Gurugram, Haryana 122003",
      price: "₹567",
      button: "Book Appointment"
    },
    {
        url: img1,
        title: "Scan Lab Diagnostics , Gurgaon",
        subtitle: " Sector Vijay Bai, Near gate, Huda Colony, Sector 46, Gurugram, Haryana 122003",
        price: "₹567",
        button: "Book Appointment"
      },
      {
        url: img1,
        title: "OrthoRad Clinic & Diagnostics, Gurgaon",
        subtitle: "119 & 120, First Floor, Tower A, S ector 69, Gurugram, Haryana 122005",
        price: "₹413",
        button: "Book Appointment"
      },
      {
        url: img1,
        title: "Scan Lab Diagnostics , Gurgaon",
        subtitle: " Sector Vijay Bai, Near gate, Huda Colony, Sector 46, Gurugram, Haryana 122003",
        price: "₹567",
        button: "Book Appointment"
      },
      {
        url: img1,
        title: "OrthoRad Clinic & Diagnostics, Gurgaon",
        subtitle: "119 & 120, First Floor, Tower A, S ector 69, Gurugram, Haryana 122005",
        price: "₹413",
        button: "Book Appointment"
      },
      {
        url: img1,
        title: "Scan Lab Diagnostics , Gurgaon",
        subtitle: " Sector Vijay Bai, Near gate, Huda Colony, Sector 46, Gurugram, Haryana 122003",
        price: "₹567",
        button: "Book Appointment"
      },
  ];

  return (
    <>
      {CardData.slice(0, data).map((data, index) => (
        <div key={index} className='p-2'>
          <Card className='scan-card'>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='scan-card-img-div'>
                <img variant="top" src={img1} className='img-fluid' />
              </div>
              <Card.Body className='d-flex flex-column justify-content-center scan-card-body'>
                <h1 className="para fw-bold" style={{ color: "#46A4D9" }}>{data.title}</h1>
                <p className="para subtitle" style={{fontSize:"12px"}}>{data.subtitle}</p>
              </Card.Body>
              <div className='d-flex align-items-center justify-content-center py-3 gap-3' style={{marginLeft:"-20px"}}>
              <div className="para d-flex align-items-center justify-content-center gap-3">
                <span style={{ textDecoration: "line-through" }}>₹900</span>
                <span style={{ color: '#FF851B',}} className='fw-bold'>{data.price}</span>
              </div>
              <div >
                <button className="buttonfirst" style={{width:"180px",fontSize:"16px",height:"35px"}}>{data.button}</button>
              </div>
            </div>
            </div>

          
          </Card>
          
        </div>
      ))}
      { data < CardData.length  && (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <button className="buttonfirst" onClick={LoadMore}>Load More</button>
          </div>
      )}
      
    </>
  );
}
