import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../Navbar/navbar.css";
import { Link } from 'react-router-dom';
import ServiceHelp from '../service/ServiceHelp';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-secondary ">
  <div class="container-fluid ">
    <a class="navbar-brand text-warning text ms-4" href="#">Myshop</a>
   
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon "></span>
      
    </button>
    
    <div class="collapse navbar-collapse ms-5 menu" id="collapsibleNavbar">
    
      <ul class="navbar-nav ">
        <div className="row ">
        <div className="col-3">
      
        <li class="nav-item me-5">
          <Link to={"/learn"} class="nav-link  text-white ">home</Link>
        </li>
        </div>
        <div className="col-3">
        <li class="nav-item me-5">
          <Link to={"/abt-page"} class="nav-link  text-white me-5">about</Link>
        </li>
        </div>
        <div className="col-3">
        <li class="nav-item me-5">
          <Link to={"/help-line"} className='nav-link  text-white me-5'>Service</Link>
        </li></div>
        <div className="col-3">
        <li class="nav-item me-5">
        <Link to={"/cnt-page"} className='nav-link text-white me-5'>contact</Link>
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

export default Navbar
