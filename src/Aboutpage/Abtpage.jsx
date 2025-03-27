import React from 'react'
import abtpage from "../Aboutpage/abtpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Abtpage() {
  return (
    <div className='abt-page'>
      <div className="row text-white">
        <div className="col-5 ms-5 me-5 mt-5">
          <h1>  Our Mission</h1>
          <span>
            At Fresh Threads, we believe fashion should feel good and do
            good. Our mission is to offer trendy, sustainable clothing that helps you look your
            best while protecting the planet. We carefully source all
            of our materials to ensure that each piece is both fashionable and eco-conscious.
          </span>
        </div>
        <div className="col-5 ms-5 mt-5">
          <h1>Why Choose Us?</h1>
          <span>
            Sustainable Materials: All our products are made from eco-friendly 
            fabrics like organic cotton and recycled polyester.
            Affordable Fashion: We believe that sustainable fashion should be affordable for everyone.
            Ethically Made: Every item is crafted by fair-trade certified workers, ensuring that you’re 
            supporting both people and the planet.
          </span>
        </div>
      </div>
      <div className="row mt-5 text-white">
        <div className="col-5 ms-5  ">
          <h1> Meet the Team</h1>
          <span>
            We’re a small team of fashion enthusiasts passionate about sustainability.
            Founded by [Founder’s Name], who’s been in the fashion industry for over 10 years,
            Fresh Threads was created to change the way we shop for clothes.
          </span>
        </div>
      </div>

    </div>
  )
}

export default Abtpage
