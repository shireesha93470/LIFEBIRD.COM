import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDoctors } from '../../redux/authReducer/action';
import './doctors.css';
import { useNavigate } from 'react-router-dom';

const Doctor = () => {
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

  const viewDetails = (index) => {
    navigate(`/view/${index}`);
  };

  const dispatch = useDispatch();
  const doctordata = useSelector((state) => state.doctors.doctorsData);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  return (
    <div>
      <header className="header">
        <div className="nav__logo">Life<span>Bird</span></div>
        <nav className="navbar">
          <a onClick={handleNavigation} href="">
            Home
          </a>
          <a onClick={diseaseNavigation} href="">
            Diseases
          </a>
          <a onClick={doctorsNavigation} href="">
            Doctors
          </a>
          <a onClick={appointmentNavigation} href="">
            Appointments
          </a>
          <a onClick={aboutNavigation} href="">
            About Us
          </a>
        </nav>
      </header>
      <form className="search-form" method="get" action="#">
        <input type="search" name="search" placeholder="Search your Doctor here for..." />
        <button type="submit">Search</button>
      </form>

      <div className="doc_data">
        {doctordata.map((doctor, index) => (
          <div key={index}>
            <div className="doctorimg">
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctordetail">
                <p className="doctdata">Name: {doctor.name}</p>
                <p className="doctdata">PhoneNumber: {doctor.phonenumber}</p>
                <p className="doctdata">Experience: {doctor.experience}</p>
                <p className="doctdata">Specilalization: {doctor.specialization}</p>
                <div className="doctbtn">
                  <button onClick={() => viewDetails(index)} className="clicking">
                    View more
                  </button>
                  <button className="clicking">Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;



