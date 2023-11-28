import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router';

function NavBar (){

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/signup');
  };

  const diseaseNavigation = () => {
    navigate('/disease');
  };

  const doctorsNavigation = () => {
    navigate('/doctors');
  };

  const appointmentNavigation = () => {
    navigate('/appointments');
  };

  const aboutNavigation = () => {
    navigate('/about');
  };


  return (
    <header className="header">
     <div className="nav__logo">Life<span>Bird</span></div>
      <nav className="navbar">
        <a onClick={handleNavigation} href="">Home</a>
        <a onClick={diseaseNavigation} href="">Diseases</a>
        <a onClick={doctorsNavigation} href="">Doctors</a>
        <a onClick={appointmentNavigation} href="">Appointments</a>
        <a onClick={aboutNavigation} href="">About Us</a>
      </nav>
    </header>
  );
}
export default NavBar;
