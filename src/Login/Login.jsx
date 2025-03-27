import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Login.css';
import { Link } from 'react-router-dom';
import Signup from '../signuppage/Signup';
import Forget from '../forgetpassword/Forget';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [loginName,setLoginName]=useState("")
  const [loginPassword,setLoginPassword]=useState("")


  let navigate = useNavigate()

  function TestLogin(event){
    event.preventDefault()
      if(loginName&&loginPassword){
         localStorage.setItem("loginName",loginName)
         localStorage.setItem("loginPassword",loginPassword)
         if(localStorage.getItem("regname") === localStorage.getItem("loginName")
        && localStorage.getItem("regpassword") === localStorage.getItem("loginPassword")){
     
         
          navigate("/shop-pg")
      }else{
          alert("Enter valid Data")
      }
         }
}
  return (
    <div className="lognbg">

      <div className="logbg ">

        <div className='login mt-5'>
          <span className='title text-warning'>Login</span>

          <form className='formdata mt-5'>

            <input type="text"
              placeholder='Username'
              name='username'
              className='user'
              onChange={(e)=>setLoginName(e.target.value)} />
            <br />

            <input type="password"
              placeholder='Password'
              name='password'
              className='pass m-4' 
              onChange={(e)=>setLoginPassword(e.target.value)}/>
            <br />

            <Link to={"/Forget"} className='forget text-white'>Forget password?</Link>
            <br />
            <span className='remember text-white'><input type="checkbox" /> Remember me</span><br />

            <Link to={"/shop-pg"}>
            
              <button className='logbtn mt-5' type='submit' onClick={TestLogin}>Login</button><br />
             
            </Link>
            <div className='noacc text-white mt-4'>
              
              <span >Have no account ? <Link to={"/Signup"} className='signpg text-white'>signup!</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
