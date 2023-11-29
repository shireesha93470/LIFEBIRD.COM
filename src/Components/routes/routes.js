// import React from 'react';
// import Home from '../Homepage/index';
// import Signup from '../Signuppage/signup';
// import Login from '../Loginpage/login';
// import Disease from '../DiseasePage/disease';
// import Doctor from '../DoctorsPage/doctors';
//  import About from '../AboutUsPage/about';
// import AppointmentForm from '../AppointmentPage/appointment'; 
// import { Route, Routes } from 'react-router';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from '../NavBar/navbar';
// import Footer from '../Footer/footer';
// import ServicesSection from '../Services/services';
// import OTP from '../OTPpage/otp';
// import View from '../ViewPage/view';
// import Symptom from '../Symptoms/symptoms';
// function Routers(){
//   return (
//     <div>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" exact element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/disease" element={<Disease />} />
//         <Route path="/doctors" element={<Doctor />} />
//         <Route path="/appointment" element={<AppointmentForm />} />
//         <Route path="/navbar" element={<NavBar/>}/>
//         <Route path="/about" element={<About />} />
//         <Route path="/footer" element={<Footer/>}/>
//         <Route path="/services" element={<ServicesSection/>}/>
//         <Route path="/view/:id" element={<View />} />
//         <Route path="/symptoms/:id" element ={<Symptom/>}/>
//         <Route path="otp" element={<OTP/>}/>

//       </Routes>
//     </div>
//   );
// }

// export default Routers;

import React from 'react';
import Home from '../Homepage/index';
import Signup from '../Signuppage/signup';
import Login from '../Loginpage/login';
import Disease from '../DiseasePage/disease';
import Doctor from '../DoctorsPage/doctors';
import About from '../AboutUsPage/about';
import AppointmentForm from '../AppointmentPage/appointment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import ServicesSection from '../Services/services';
import OTP from '../OTPpage/otp';
import View from '../ViewPage/view';
import Symptom from '../Symptoms/symptoms';

function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/symptoms/:id" element={<Symptom />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
