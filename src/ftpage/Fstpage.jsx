import React from 'react'
import "../ftpage/ftpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Login from '../Login/Login';
import { Link } from 'react-router-dom';


function Fstpage() {
  return (
    <div className='fntbg' >
      
      <div className='about '>
        <h1 className='head1 ms-4 test  text-white'>Online shopping Hub</h1>
        <h3 className='head2 ms-5 mt-5 text-white'><span className='span'>Percentage Off:</span> 10%,20%,30% off on minimum purchase.</h3>
        <h5 className='head3 ms-5 mt-4 text-white'>Combine related products at a discounted price.</h5>
        <h5 className='head4 ms-5 text-white'>Limited-time discount on select products.</h5>
        <Link to={"/Login"} className='start text-white'> <button className='nxt mt-5 '>go now</button></Link>
      </div>
      
    </div>
  )
}

export default Fstpage
