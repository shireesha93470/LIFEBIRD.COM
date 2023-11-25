import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getAllDoctors } from '../../redux/authReducer/action';
import './view.css';
import { useNavigate } from 'react-router-dom';


const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctorData = useSelector(state => state.doctors.doctorsData);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const selectedDoctor = doctorData.find((doctor, index) => String(index) === id);

  if (!selectedDoctor) {
    return <div>Loading...</div>;
  }

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
    <div>
      <header className="header">
        <div className="nav__logo">Life<span>Bird</span></div>
        <nav className="navbar">
          <a onClick={handleNavigation} href="#!">Home</a>
          <a onClick={diseaseNavigation} href="#!">Diseases</a>
          <a onClick={doctorsNavigation} href="#!">Doctors</a>
          <a onClick={appointmentNavigation} href="#!">Appointments</a>
          <a onClick={aboutNavigation} href="#!">About Us</a>
        </nav>
      </header>
      <div className='doc_data'>
        <div key={id}>
          <div className='viewimg'>
            <img src={selectedDoctor.image} alt={selectedDoctor.name} />
            <div className='viewdetail'>
              <p className='viewdata'><b>Name:</b> {selectedDoctor.name}</p>
              <p className='viewdata'><b>PhoneNumber:</b> {selectedDoctor.phonenumber}</p>
              <p className='viewdata'><b>Experience: </b>{selectedDoctor.experience}</p>
              <p className='viewdata'><b>Specialization:</b> {selectedDoctor.specialization}</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>
              LIFE<span>BIRD</span>
            </h3>
            <p>
              We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and top-notch care every step of the way.
            </p>
            <p>
              Trust us with your health, and let us work together to achieve the best possible outcomes for you and your loved ones.
            </p>
          </div>
          <div className="footer__col">
            <h4>About Us</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Work With Us</p>
            <p>Our Blog</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <p>Search Terms</p>
            <p>Advance Search</p>
            <p>Privacy Policy</p>
            <p>Suppliers</p>
            <p>Our Stores</p>
          </div>
          <div className="footer__col">
            <h4>Contact Us</h4>
            <p>
              <i className="ri-map-pin-2-fill"></i> 315/H , subbanna garden, vijayanagar, Bangalore 560040.
            </p>
            <p>
              <i className="ri-mail-fill"></i> jtdfoundation.com
            </p>
            <p>
              <i className="ri-phone-fill"></i> +91 882378272
            </p>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__bar__content">
            <p>"Your health is your wealth, and we're here to safeguard it with care and expertise."</p>
            <div className="footer__socials">
              <span>
                <i className="ri-instagram-line"></i>
              </span>
              <span>
                <i className="ri-facebook-fill"></i>
              </span>
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-twitter-fill"></i>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default View;
