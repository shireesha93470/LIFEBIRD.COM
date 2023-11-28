
import { useNavigate } from 'react-router';

import './home.css';

const Home = () => {
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
      <header>
        <nav className="section__container nav__container">
          <div className="nav__logo">
            LIFE<span>BIRD</span>
          </div>
          <ul className="nav__links">
            <li className="link">
              <a href="">Home</a>
            </li>
            <li className="link">
              <a href="" onClick={diseaseNavigation}>
                Diseases
              </a>
            </li>
            <li className="link">
              <a href="" onClick={doctorsNavigation}>
                Doctors
              </a>
            </li>
            <li className="link">
              <a href="" onClick={appointmentNavigation}>
                Appointments
              </a>
            </li>
            <li className="link">
              <a href="" onClick={aboutNavigation}>
                About us
              </a>
            </li>
          </ul>
          <button className="btn2" onClick={handleNavigation}>
            Signup
          </button>
        </nav>
        <div className="section__container header__container">
          <div className="header__content">
            <h1>Delivering Outstanding Care Experiences for Patients</h1>
            <p>
              Welcome, where your extraordinary patient journey is our top concern. We're committed to your health with compassion, advanced facilities, and a patient-centric ethos. Put your trust in us for your well-being, and feel the distinction.
            </p>
            <button className="btn2">See Services</button>
          </div>
          <div className="header__form">
            <form>
              <h4>Book Now</h4>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Phone No." />
              <button className="btn2 form__btn">Book Appointment</button>
            </form>
          </div>
        </div>
      </header>

      <section className="section__container service__container">
        <div className="service__header">
          <div className="service__header__content">
            <h2 className="section__header">Our Special service</h2>
            <p>
              Beyond simply providing medical care, our commitment lies in delivering unparalleled service tailored to your unique needs.
            </p>
          </div>
          <button className="service__btn">Ask A Service</button>
        </div>
        <div className="service__grid">
          <div className="service__card">
            <span>
              <i className="ri-microscope-line"></i>
            </span>
            <h4>Laboratory Test</h4>
            <p>
              Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="service__card">
            <span>
              <i className="ri-mental-health-line"></i>
            </span>
            <h4>Health Check</h4>
            <p>
              Our thorough assessments and expert evaluations help you stay proactive about your health.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="service__card">
            <span>
              <i className="ri-hospital-line"></i>
            </span>
            <h4>General Dentistry</h4>
            <p>
              Experience comprehensive oral care with Dentistry. Trust us to keep your smile healthy and bright.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
      <section className="section__container about__container">
        <div className="about__content">
          <h2 className="section__header">About Us</h2>
          <p>
            Welcome to our LifeBird website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
          </p>
          <p>
            Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.
          </p>
          <p>
            Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.
          </p>
        </div>
        <div className="about__image">
          <img src="./Resources/about.jpg" alt="about" />
        </div>
      </section>

      <section className="section__container why__container">
        <div className="why__image">
          <img src="./Resources/choose-us.jpg" alt="why choose us" />
        </div>
        <div className="why__content">
          <h2 className="section__header">Why Choose Us</h2>
          <p>
            With a steadfast commitment to your well-being, our team of highly trained healthcare professionals ensures that you receive nothing short of exceptional patient experiences.
          </p>
          <div className="why__grid">
            <span>
              <i className="ri-hand-heart-line"></i>
            </span>
            <div>
              <h4>Intensive Care</h4>
              <p>
                Our Intensive Care Unit is equipped with advanced technology and staffed by a team of professionals.
              </p>
            </div>
            <span>
              <i className="ri-truck-line"></i>
            </span>
            <div>
              <h4>Free Ambulance Car</h4>
              <p>
                A compassionate initiative to prioritize your health and well-being without any financial burden.
              </p>
            </div>
            <span>
              <i className="ri-hospital-line"></i>
            </span>
            <div>
              <h4>Medical and Surgical</h4>
              <p>
                Our Medical and Surgical services offer advanced healthcare solutions to address medical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container doctors__container">
        <div className="doctors__header">
          <div className="doctors__header__content">
            <h2 className="section__header">Our Special Doctors</h2>
            <p>
              We take pride in our exceptional team of doctors, each a specialist in their respective fields.
            </p>
          </div>
          <div className="doctors__nav">
            <span>
              <i className="ri-arrow-left-line"></i>
            </span>
            <span>
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>
        <div className="doctors__grid">
          <div className="doctors__card">
            <div className="doctors__card__image">
              <img src="https://cdn.yashodahospitals.com/wp-content/uploads/Dr.-Vennela-Devarapalli.jpg" alt="doctor" />
              <div className="doctors__socials">
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
            <h4>Dr.Ramya</h4>
            <p>Cardiologist</p>
          </div>
          <div className="doctors__card">
            <div className="doctors__card__image">
              <img src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Anupam_Bhargava_af980e8ec8.jpg" alt="doctor" />
              <div className="doctors__socials">
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
            <h4>Dr. Anand</h4>
            <p>Neurosurgeon</p>
          </div>
          <div className="doctors__card">
            <div className="doctors__card__image">
              <img src="https://txhospitals.in/wp-content/uploads/2023/10/Dr.-Dharma-Rakshak-Ayapati.webp" alt="doctor" />
              <div className="doctors__socials">
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
            <h4>Dr.Satheesh Babu</h4>
            <p>Dermatologist</p>
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
              <i className="ri-map-pin-2-fill"></i> 123, London Bridge Street, London
            </p>
            <p>
              <i className="ri-mail-fill"></i> support@care.com
            </p>
            <p>
              <i className="ri-phone-fill"></i> (+012) 3456 789
            </p>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__bar__content">
            <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
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

export default Home;
