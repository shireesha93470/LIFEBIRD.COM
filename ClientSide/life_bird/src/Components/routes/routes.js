import React from 'react';
import Home from '../Homepage/index'
import Signup from '../Signuppage/signup';
import {Route, Routes} from 'react-router';

function Routers() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path = '/' exact element = {<Home />} />
      </Routes> 
      
    </div>
  );
}

export default Routers;
