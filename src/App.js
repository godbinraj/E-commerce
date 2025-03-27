import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from '../src/Login/Login';
import Fstpage from '../src/ftpage/Fstpage';
import Navbar from './Navbar/Navbar';
import Signup from './signuppage/Signup';
import Forget from './forgetpassword/Forget';
import ServiceHelp from "./service/ServiceHelp";
import Abtpage from "./Aboutpage/Abtpage";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Shopping from './product/Shopping';
import Shopnav from './shopnav/Shopnav';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/navbar'
        element={
          <>
          <Navbar/>
          </>
        }/>

<Route path='learn'
        element={
          <>
          <Navbar/>
          <Fstpage/>
          <Footer/>
          </>
        }/>

<Route path='abt-page'
        element={
          <>
          <Navbar/>
          <Abtpage/>
          <Footer/>
          </>
        }/>

<Route path='cnt-page'
        element={
          <>
          <Navbar/>
          <Contact/>
          <Footer/>
          </>
        }/>

<Route path='Login'
        element={
          <>
          <Navbar/>
          <Login/>
          <Footer/>
          </>
        }/>

<Route path='Signup'
        element={
          <>
          <Navbar/>
          <Signup/>
          <Footer/>
          </>
        }/>
        <Route path='Forget'
        element={
          <>
          <Navbar/>
          <Forget/>
          <Footer/>
          </>
        }/>
         <Route path='help-line'
        element={
          <>
          <Navbar/>
          <ServiceHelp/>
          <Footer/>
          </>
        }/>
           <Route path='foot-pg'
        element={
          <>
        
          <Footer/>
          </>
        }/>

<Route path='shop-pg'
        element={
          <>
        <Shopnav/>
          <Shopping/>
          </>
        }/>

<Route path='shopnav'
        element={
          <>
        
          <Shopnav/>
          </>
        }/>
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
