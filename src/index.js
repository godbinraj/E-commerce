import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fstpage from './ftpage/Fstpage';
import Login from './Login/Login'
import Navbar from './Navbar/Navbar';
import Signup from './signuppage/Signup';
import Forget from './forgetpassword/Forget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Fstpage/> */}
    {/* <Login/> */}
    {/* <Navbar/> */}
    {/* <Signup/> */}
    {/* <Forget/> */}
    
  </React.StrictMode>
);

reportWebVitals();
