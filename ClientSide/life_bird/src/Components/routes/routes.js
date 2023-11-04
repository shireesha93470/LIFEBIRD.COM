import React from 'react';
import Home from '../Homepage/index';
import Signup from '../Signuppage/signup';
import Login from '../Loginpage/login';
import Disease from '../DiseasePage/disease';
import Doctor from '../DoctorsPage/doctors';
// import About from '../AboutUsPage/about';
import Appointment from '../AppointmentPage/appointments'; 
import { Route, Routes } from 'react-router';
import NavBar from '../NavBar/navbar';

const  Routers=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/navbar" element={<NavBar/>}/>
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default Routers;

