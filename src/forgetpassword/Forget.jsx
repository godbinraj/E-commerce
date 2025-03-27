import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./forget.css";
import Login from "../Login/Login"
import { Link } from 'react-router-dom';

function Forget() {
    return (
        <div className='fgtbg'>
            <div className='fgtbg2'>
                <div className='form mt-5'>
                    <span className='head text-warning'>Forget password</span><br />
                    <input className='userEmail mt-5' type=" text" placeholder='enter user e-mail' /><br />
                    <input className='newPass mt-5' type=" password" placeholder='enter new password' /><br />

                    <Link to={"/Login"} className='goLogin'><button className='updatePass text-white mt-5'>update</button><br /></Link>

                    <div className='remember text-white mt-4 ms-5'>
                        <span>I remember my password?</span>
                        <Link to={"/Login"} className='goLogin'>Login</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Forget
