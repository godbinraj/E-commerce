import React from 'react'
import fotter from "../footer/fotter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
       <div className="footer bg-secondary">
        <div className="row  ms-5" >
          <div className="col-3 mt-4   text-white">
            <a href="" className='sper'>MyShop</a>
            <div className='icon mt-3'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icons me-1' icon={faFacebook} style={{ color: 'black' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icons me-1' icon={faInstagram} style={{ color: 'black' }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icons me-1' icon={faTwitter} style={{ color: 'black' }} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icons' icon={faYoutube} style={{ color: 'black' }} />
              </a>
            </div>
          </div>

          <div className="col-3 mt-4 text-white">
            <span>Quick link</span>
            <div className='link mt-3'>
            <Link to={"/learn"}  className='detail2 text-white '>home</Link><br />
            <Link to={"/abt-page"} className='detail2  text-white me-5'>about</Link><br />
            <Link to={"/help-line"} className='detail2 text-white me-5'>Service</Link><br />
             <Link to={"/login"} className='detail2 text-white me-5'>Login</Link>
            </div>
          </div>

          <div className="col-3 mt-4 text-white" >
            <span >Terms & Police</span>
            <div className='policy mt-3'>
              <a href="" className='detail3'>Terms of conditions</a><br />
              <a href="" className='detail3'>F&Q</a><br />
              <a href="" className='detail3'>Privacy & Policy</a>
            </div>
          </div>

          <div className="col-3 mt-4">
            <span className='touch  text-white'>Get in Touch</span><br />
            <div className='detail4 mt-3'>
              <span className='num text-white '>8072-240-453</span><br />
              <a href="" className='mail'>godbinr8072@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Footer
