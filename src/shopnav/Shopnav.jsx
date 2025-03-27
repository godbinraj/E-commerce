import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../shopnav/shopnav.css"
import { Link } from 'react-router-dom';



function Shopnav() {
  return (
    <div>
           <nav class="navbar navbar-expand-sm bg-secondary ">
  <div class="container-fluid ">
    <a class="navbar-brand text-warning text ms-4" href="#">Myshop</a>
    <div className='navsearch ms-5'>
        <input type="search" className='search ms-5' />
        </div>
   
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon "></span>
      
    </button>
   
    
    <div class="collapse navbar-collapse ms-5 menu" id="collapsibleNavbar">
    
      <ul class="navbar-nav ">
        <div className="row ">
        <div className="col-2 me-3">
      
        <li class="nav-item me-3">
          <Link to={"/learn"} class="nav-link  text-white ">home</Link>
        </li>
        </div>
        <div className="col-3 me-3" >
        <li class="nav-item ms-4 ">
          <Link to={"/abt-page"} class="nav-link  text-white me-5">about</Link>
        </li>
        </div>
        <div className="col-3 me-3">
        <li class="nav-item ms-4">
          <Link to={"/help-line"} className='nav-link  text-white me-5'>Service</Link>
        </li></div>
        <div className="col-3 ">
        <li class="nav-item ms-4 ">
        <Link to={"/cnt-page"} className='nav-link text-white me-1'>contact</Link>
        </li>
       
        </div>
        </div>
      </ul>
    </div>
    
  </div>
</nav>
    </div>
  )
}

export default Shopnav
