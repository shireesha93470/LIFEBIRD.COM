import React from 'react';
import './navbar.css';

function NavBar (){
  return (
    <header className="header">
     <div className="nav__logo">Life<span>Bird</span></div>
      <nav className="navbar">
        <a href="">Home</a>
        <a href="">Diseases</a>
        <a href="">Doctors</a>
        <a href="">Appointments</a>
        <a href="">About Us</a>
      </nav>
    </header>
  );
}
export default NavBar;
