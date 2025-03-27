import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../service/serviceHelp.css";
import serimg from "./servsimg.jpg";
import serimg2 from "./servimg2.jpg";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Fstpage from '../ftpage/Fstpage';


function ServiceHelp() {
  return (
    <div>
      <div id="demo" className="carousel slide img-one" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>

        </div>

        <div className="carousel-inner">
          <div className="carousel-item active imgbg ">
            <div className="carousel-caption ">
              <div className='services ms-5 me-5'>
                <h1 className='service1 mt-4 text-white'>
                  About the Service:
                </h1>
                <span className='del ms-3 text-white'>
                  ShopEase is an all-in-one eCommerce platform designed for entrepreneurs and small businesses.
                  With a user-friendly interface, customizable templates, secure payment gateways,
                  and robust marketing tools, ShopEase empowers you to launch and grow your online
                  store with minimal hassle. Whether you’re selling physical products, digital
                  downloads, or services, ShopEase makes it easy to get started and scale.
                </span>

                <div className='servimg mt-2 ms-5'>
                  <img src={serimg} alt="not founded" className='servsimg' />
                </div>

                <h1 className='service2 mt-3 text-white'>Key Features or Benefits:</h1>
                <span className='del ms-3 text-white'>
                  Easy Store Setup: Launch your store in just a few clicks with customizable templates.
                  Secure Payments: Integrated with trusted payment processors like PayPal, Stripe, and credit cards.
                  Inventory Management: Track and manage your stock in real time, even if you sell on multiple platforms.
                  Built-In Marketing Tools: Run email campaigns, set up discounts, and optimize SEO to drive more traffic.
                  Mobile Friendly: Fully responsive design to ensure your store looks great on any device.
                  24/7 Customer Support: Our team is here to help you at any time, day or nigh.
                </span>
              </div>

            </div>
          </div>
          <div className="carousel-item imgbg1">
            <div className="carousel-caption  ">
              <img src={serimg2} alt="not founded"  className='servsimg2 mt-5'/>
              <h1 className='serdet text-white mt-5'> Client Testimonials:</h1>
              <span className='serdet text-white mt-5 '>Purpose: To build trust and show the effectiveness of your services 
                through real-world examples or feedback from past clients.
                Content: Showcase a few success stories, including client logos, quotes, or project snapshots.
                Example: Testimonial 1: "Thanks to Myshop, our online sales
                increased by 40% in just 6 months!
                Their team was incredibly responsive and delivered exactly what we needed."
                 – Sarah, Owner of EcoGoods.
                Testimonial 2: "The redesign of our eCommerce platform helped us streamline our checkout process and reduce cart abandonment rates." – Mark, Founder of TechShop</span>
            

        </div>
       
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>


    </div>
  )
}

export default ServiceHelp
