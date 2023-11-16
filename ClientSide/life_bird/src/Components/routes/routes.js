import React from 'react';
import Home from '../Homepage/index';
import Signup from '../Signuppage/signup';
import Login from '../Loginpage/login';
import Disease from '../DiseasePage/disease';
import Doctor from '../DoctorsPage/doctors';
 import About from '../AboutUsPage/about';
import Appointment from '../AppointmentPage/appointments'; 
import { Route, Routes } from 'react-router';
import NavBar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import ServicesSection from '../Services/services';

import View from '../ViewPage/view';
function Routers(){
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/services" element={<ServicesSection/>}/>
        <Route path="/view/:id" element={<View />} />

      </Routes>
    </div>
  );
}

export default Routers;

