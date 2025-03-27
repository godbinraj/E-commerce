import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import signup from "./signup.css"
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

function Signup() {

    const [formData, setformData] = useState({
        username: "",
        email: "",
        password: "",
        conPassword: "",
        gender: "",
    })

    const [Errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        conPassword: "",
        gender: "",
    })

    const handelfrom = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let Errors = { username: "", email: "", password: "", conPassword: "", gender: "" };
        let isValid = true;


        if (!formData.username) {
            Errors.username = "Username is required";
            isValid = false;
        }

        if (!formData.email) {
            Errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            Errors.email = "Email address is invalid";
            isValid = false;
        }

        if (!formData.password) {
            Errors.password = "Password is required";
            isValid = false;
        } else if (formData.password.length < 6) {
            Errors.password = "Password must be at least 6 characters";
            isValid = false;
        }

        if (!formData.conPassword) {
            Errors.conPassword = "Password is required";
            isValid = false;
        } else if ((formData.password) != (formData.conPassword)) {
            Errors.conPassword = "Not matching"
            isValid = false;
        }

        if (!formData.gender) {
            Errors.gender = "gender is not select";
            isValid = false;
        }
        setErrors(Errors);
        return isValid;
    }

   
   
    function formSubmit(event) {
        event.preventDefault()
        if (formData.username !== "" && formData.email !== "" && formData.password !== "") {
            localStorage.setItem("regname",formData.username)
            localStorage.setItem("regemail",formData.email)
            localStorage.setItem("regpassword",formData.password)
            console.log("Submited successfully")
        } else {
            alert("Please fill all fields")
        }

    };
    return (
        <div className='signbg'>
            <div className='signbg2'>
                <form onSubmit={formSubmit}>
                    <div className="form mt-4 "  >
                        <span className='span text-warning'>Signup!</span><br />
                        <div>
                            <input type="text"
                                placeholder='Username'
                                className='username mt-3'
                                name='username'
                                onChange={handelfrom}
                                value={formData.username} />
                            {Errors.username && <div style={{ color: "red" }}>{Errors.username}</div>}
                        </div><br />
                        
                        <div>
                        <input type="email"
                            placeholder='e-mail'
                            className='email mt-2'
                            name='email'
                            onChange={handelfrom}
                            value={formData.email} />
                        {Errors.email && <div style={{ color: "red" }}>{Errors.email}</div>}
                        </div><br />
                        <div>
                            <input type="password"
                                placeholder='Password'
                                className='password mt-2'
                                name='password'
                                onChange={handelfrom}
                                value={formData.password} />
                            {Errors.password && <div  style={{ color: "red" }}>{Errors.password}</div>}
                        </div><br />
                        <input type="password"
                            placeholder='Confrim password'
                            className='con-password mt-2'
                            name='conPassword'
                            onChange={handelfrom}
                            value={formData.conPassword} />
                        {Errors.conPassword && <div style={{ color: "red" }}>{Errors.conPassword}</div>}<br />

                        <div className='gender text-white mt-2'>
                            <input type="radio" name="gender" onChange={handelfrom} value={formData.gender} /><span className='gend me-5' >Male</span>
                            <input type="radio" name="gender" onChange={handelfrom} value={formData.gender} /><span className='gend me-5'>Female</span>
                            {Errors.gender && <div style={{ color: "red" }}>{Errors.gender}</div>}
                        </div>
                        <div>
                            <button className='toLogin text-white sigbtn text-white mt-5' type='submit'>Signup </button>
                        </div>
                        <div className=' text-white mt-3'>
                            <span >Already have an account?<Link to={"/Login"} className='toLogin text-white'>Login</Link></span>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup
