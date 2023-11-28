
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

  const ServiceNavigation=()=>{
    navigate('/services');
  }

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
            Our dedication extends far beyond just medical treatment; it is centered on delivering exceptional service that is customized to meet your individual requirements.
            </p>
          </div>
          <button className="service__btn" onClick={ServiceNavigation}>Our Service</button>
        </div>
        <div className="service__grid">
          <div className="service__card">
            <span>
              <i className="ri-microscope-line"></i>
            </span>
            <h4>Laboratory Test</h4>
            <p>
            Experience outstanding laboratory testing at our facility with accurate diagnostics and fast results.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="service__card">
            <span>
              <i className="ri-mental-health-line"></i>
            </span>
            <h4>Health Check</h4>
            <p>
            Stay ahead of your health with our comprehensive assessments and expert evaluations.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="service__card">
            <span>
              <i className="ri-hospital-line"></i>
            </span>
            <h4>General Dentistry</h4>
            <p>
            Trust us to maintain your bright, healthy smile with our comprehensive dental care services.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
      <section className="section__container about__container">
        <div className="about__content">
          <h2 className="section__header">About Us</h2>
          <p>
          Welcome to LifeBird, your all-in-one source for dependable and extensive healthcare resources. Our commitment is to foster well-being and offer valuable information to empower you on your path to better health.
          </p>
          <p>
          Delve into our vast library of well-crafted articles and guides that span a wide array of health subjects. Our content is thoughtfully designed to inform, motivate, and assist you in making informed decisions about your health, whether it's understanding prevalent medical conditions or embracing a wholesome way of living.
          </p>
          <p>
          Uncover valuable health insights and lifestyle guidance to enhance your physical and mental wellness. We're firm believers that minor adjustments can bring about substantial enhancements in your overall quality of life, and we're here to steer you on your journey towards a healthier, more joyful you.
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
          Our unwavering dedication to your health means our team of extensively skilled healthcare experts guarantees you'll encounter nothing less than outstanding patient care.
          </p>
          <div className="why__grid">
            <span>
              <i className="ri-hand-heart-line"></i>
            </span>
            <div>
              <h4>Intensive Care</h4>
              <p>
              Our state-of-the-art Intensive Care Unit is supported by cutting-edge technology and a dedicated team of experts.
              </p>
            </div>
            <span>
              <i className="ri-truck-line"></i>
            </span>
            <div>
              <h4>Free Ambulance Car</h4>
              <p>
              An empathetic effort to put your health and well-being first, without imposing any financial strain.
              </p>
            </div>
            <span>
              <i className="ri-hospital-line"></i>
            </span>
            <div>
              <h4>Medical and Surgical</h4>
              <p>
              Our Medical and Surgical services provide innovative healthcare solutions to meet your medical requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container doctors__container">
        <div className="doctors__header">
          <div className="doctors__header__content">
            <h2 className="section__header temp">Our Special Doctors</h2>
            <div className='temp2'>
            <p className='temp1'>
            We are proud of our outstanding group of physicians, each one a specialist in their specific areas of expertise.
            </p>
            </div>
          </div>
          <div className="doctors__nav">
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
            We consider it a privilege to accompany you on your healthcare journey, and our commitment remains steadfast in providing caring, tailored, and exceptional care at every phase of your path.
            </p>
            <p>
            Have faith in us to care for your well-being, as we collaborate to attain the most favorable results for you and your dear ones.
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
              <i className="ri-mail-fill"></i>jtdfoundation.com
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

export default Home;
