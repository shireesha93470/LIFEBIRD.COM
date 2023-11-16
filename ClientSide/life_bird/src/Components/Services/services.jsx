import React from 'react';
import './services.css';
import { useNavigate } from 'react-router';

function ServicesSection() {
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
    <div>
    <header className="header">
     <div className="nav__logo">Life<span>Bird</span></div>
      <nav className="navbar">
        <a onClick={handleNavigation}href="">Home</a>
        <a onClick={diseaseNavigation}href="">Diseases</a>
        <a onClick={doctorsNavigation}href="">Doctors</a>
        <a onClick={appointmentNavigation}href="">Appointments</a>
        <a onClick={aboutNavigation}href="">About Us</a>
      </nav>
    </header>
    
        <section className="services-section">
            <div className="services-icons">
                <div className="services-icon">
                    <img src="https://amazingcharts.com/wp-content/uploads/2023/06/Patient-Care.png" alt="Patient Care" />
                </div>
                <img className="services-arrow" src="https://seekicon.com/free-icon-download/arrow-round-forward_1.png" alt="Arrow" />
                <div className="services-icon">
                    <img src="https://thumbs.dreamstime.com/b/doctor-blue-round-flat-design-vector-icon-isolated-white-background-179484836.jpg" alt="Doctor Icon" />
                </div>
                <img className="services-arrow" src="https://seekicon.com/free-icon-download/arrow-round-forward_1.png" alt="Arrow" />
                <div className="services-icon">
                    <img src="https://etherealsoftech.com/images/icon/consulting_icon.png" alt="Consulting Icon" />
                </div>
                <img className="services-arrow" src="https://seekicon.com/free-icon-download/arrow-round-forward_1.png" alt="Arrow" />
                <div className="services-icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_sSGxERkIGy8_aCWGW9IZY9E7xp-dCuk4VuRQg-pzry4mwZ1JvMNN9lvfoD7J3sOzfA&usqp=CAU" alt="Transplants Icon" />
                </div>
            </div>
            <div className="services-row">
                <div className="services-column">
                    <div className="services-card">
                        <div className="services-icon-wrapper">
                            <i className='bx bxs-registered'></i>
                        </div>
                        <h3>Registration</h3>
                        <p>User registration is the initial step for individuals who wish to access medical services through the online platform. During this stage, users are required to create an account by providing essential personal information. This information typically includes their full name, email address, and a secure password.</p>
                    </div>
                </div>
                <div className="services-column">
                    <div className="services-card">
                        <div className="services-icon-wrapper">
                            <i className='bx bx-heart'></i>
                        </div>
                        <h3>Diseases</h3>
                        <p>The Searching for Diseases process is a vital component of an online medical consultation platform, helping users become informed about various medical conditions and symptoms. It empowers individuals to take an active role in managing their health and seeking appropriate medical care.</p>
                    </div>
                </div>
                <div className="services-column">
                    <div className="services-card">
                        <div className="services-icon-wrapper">
                            <i className='bx bx-search'></i>
                        </div>
                        <h3>Searching Doctors</h3>
                        <p>The Searching for Doctors process is a pivotal part of the online medical consultation platform, connecting patients with the healthcare professionals who can best address their health needs. It streamlines the process of finding the right doctor and facilitates access to quality healthcare services.</p>
                    </div>
                </div>
                <div className="services-column">
                    <div className="services-card">
                        <div className="services-icon-wrapper">
                            <i className='bx bx-video'></i>
                        </div>
                        <h3>Consultation</h3>
                        <p>The Medical Consultation process is a central component of the online medical consultation platform, offering users a convenient and efficient way to access healthcare expertise, receive diagnoses, and seek advice from qualified professionals.</p>
                    </div>
                </div>
                <div className="services-column">
                    <div className="services-card">
                        <div className="services-icon-wrapper">
                            <i className='bx bxs-report'></i>
                        </div>
                        <h3>Reports</h3>
                        <p>The Medical Reports feature is an important component of the platform, providing a secure and user-friendly way for users to manage their medical information and share it with healthcare professionals, ultimately improving the quality of virtual medical consultations.</p>
                    </div>
                </div>
                <div className="services-column">
                    <div className="services-card">
                        <div className="services-icon-wrapper">
                            <i className='bx bxs-capsule'></i>
                        </div>
                        <h3>Medicines</h3>
                        <p>The Medication Awareness feature plays a crucial role in ensuring that users are well-informed about their medications, leading to safer and more effective medical treatments and consultations.</p>
                    </div>
                </div>
            </div>
        </section>
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
}
export default ServicesSection;
