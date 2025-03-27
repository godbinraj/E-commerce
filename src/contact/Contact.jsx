import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import contact from "../contact/contact.css";
import contbg from "./contbg.jpg"



function Contact() {
  return (
    <div className='cntimg '>
      <div className='icon text-white'>
        <div className="row">
          <div className='col-7 '>
        <div className='wats ms-5 mt-5' >
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" className='watapp mt-5 '/>
        </a>
        <span className='iconsp ms-3'> We're happy to assist you with your question about [product/order]. </span><br />
        <span className='iconsp ms-2'>Let us know how we can help!.</span>
      </div>
     
      <div className='conct ms-5'>
        <a href="tel:+8072240453" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="white" className='cont mt-5 '  />
        </a>
        <span className='iconsp ms-3'>We’ve received your inquiry about [product].</span><br />
        <span className='iconsp ms-5'> We're here to help and will get back to you shortly with all the details.</span>
      </div>
      <div  className='facbok ms-5' >
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" color="white" className='facbk mt-5 '/>
        </a>
        <span className='iconsp ms-3'> I see you’re curious about [product]. I’d be happy to provide more information.</span><br />
        <span className='iconsp1 ms-5'> Just let me know what you need!.</span>
      </div>
      </div>
      <div className='col-4'>
        <img src={contbg} alt="not fonded"  className='contimg mt-5'/>

      </div> </div>
      </div>
    </div>
  )
}

export default Contact
