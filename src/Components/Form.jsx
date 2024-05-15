import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Form.css';
import { FaBookMedical } from "react-icons/fa";
import subicon from '../../public/Image/Formicon1.png';

export default function FormLayout({ heading, formData, para, icons }) {
    return (
        <Form className='main-form-page'>
            <h1 className='hed1 text-center pt-5'>{heading}</h1>
            {formData.map((field, index) => (
                <FormGroup key={index} className='d-flex justify-content-center align-items-center py-4'>
                    <img src={icons[field.type]} alt={field.type} className='img-fluid img-form' />
                    <FormControl
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        as={field.as}
                        className='form-control-main-page' // Updated class name
                    />
                </FormGroup>
            ))}
            <FormGroup className='d-flex justify-content-center align-items-center pt-4'>
            <FaBookMedical color='#FF851B  ' size={18}  className=' img-form'/>
                        <FormControl as='select' placeholder='Project type' required  className='form-control-main-page'>
                            <option value='disable'>Subject</option>
                            <option value=''>General Enquiry</option>
                            <option value=''>Book an appointment</option>
                        </FormControl>
                    </FormGroup>
            <div className='w-100  d-flex justify-content-center align-items-center pt-5'>
                <Button type="submit"  backgroundColor="#FF851B" variant='outline-dark' className='formbutton'>Submit</Button>
            </div>
        </Form>
    );
}
