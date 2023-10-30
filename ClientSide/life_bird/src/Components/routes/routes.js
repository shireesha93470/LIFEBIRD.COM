import React from 'react';
import Home from '../Homepage/index'
import Signup from '../Signuppage/signup';
import Login from '../Loginpage/login';
// import Disease from '../DiseasePage/disease';
import {Route, Routes} from 'react-router';

function Routers() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path = '/' exact element = {<Home />} />
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="disease" element={<Disease/>}/> */}
      </Routes> 
      
    </div>
  );
}

export default Routers;
