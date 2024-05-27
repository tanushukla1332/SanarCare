import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Form.css';
import { FaBookMedical } from "react-icons/fa";


export default function FormLayout({ heading, formData, para, icons,selectField }) {
    // Assuming the select field is at index 0
  
  return (
        <Form  xs={10} className='main-form-page'>
            <h1 className='hed1 text-center pt-5'>{heading}</h1>
            {formData.map((field, index) => (
                <FormGroup key={index} className='d-flex justify-content-center align-items-center py-4'>
                    {field.type !== 'select' && (
                        <img src={icons[field.type]} alt={field.type} className='img-fluid img-form' />
                    )}
                    <FormControl
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        as={field.as}
                        className='form-control-main-page' // Updated class name
                    />
                </FormGroup>
            ))}
            {selectField && (
                <FormGroup className='d-flex justify-content-center align-items-center pt-4'>
                    <FaBookMedical color='#FF851B' size={18} className=' img-form' />
                    <FormControl as='select' placeholder={selectField.placeholder} required className='form-control-main-page'>
                        {selectField.options.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </FormControl>
                </FormGroup>
            )}
            <div className='w-100  d-flex justify-content-center align-items-center pt-5'>
                <Button type="submit" backgroundColor="#FF851B" variant='outline-dark' className='formbutton'>Submit</Button>
            </div>
        </Form>
    );
}
