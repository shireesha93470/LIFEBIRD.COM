import React from 'react';
import './about.css';


function About() {
  return (
    <div>
      <header className="header">
        <div className="nav__logo">Life<span>Bird</span></div>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Diseases</a>
          <a href="#">Doctors</a>
          <a href="#">Appointments</a>
          <a href="#">About Us</a>
        </nav>
      </header>
      <div className="about_main">
        <div className="about_submain">
          <img src="https://www.apollohospitals.com/bangalore/wp-content/uploads/new-home-images/speciality_ah_m.webp" alt="About" />
        </div>
      </div>
      <h1 className="about_heading">ABOUT US</h1>
      <p className="about_para">
        Aim to improve the world by facilitating easy access to specialist doctors and hospitals through efficient platforms.
        Ensuring timely and appropriate medical care for everyone, regardless of their location or circumstances. By bridging
        the gap between healthcare seekers and providers, we can enhance the overall well-being and health outcomes of individuals worldwide.
      </p>
      <div className="about_details">
        <div className="about_left">
          <div className="about_smallpara">
            <p>
              Online doctor consultations are experiencing remarkable growth, with the market expected to surge by 72% and reach an impressive valuation
              of $836 million by March 2024, according to a recent study. This surge can be attributed to the increasing acceptance of telemedicine,
              rapid technological advancements, and the rising demand for remote healthcare services, particularly in light of the COVID-19 pandemic.
              A wide array of stakeholders, including telehealth companies, healthcare professionals, pharmaceutical firms, and technology providers,
              are poised to benefit from this substantial expansion. However, alongside these opportunities, the market also faces challenges,
              including regulatory complexities,and addressing disparities in access to
              these online healthcare services. This growth projection underscores the growing prominence of telemedicine in the digital healthcare
              landscape, with the data-driven study offering insights into market trends, opportunities, and hurdles. 
            </p>
          </div>
        </div>
        <div className="about_right">
          <div>
            <iframe width="635" height="400" src="https://www.youtube.com/embed/UYjlbTnF-YE" title="About Video" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="about_details">
        <div className="about_left">
          <img src="https://www.clinicone.com.np/wp-content/uploads/2020/08/Untitled-design.png" alt="About Image" />
        </div>
        <div className="about_right">
          <div className="about_smallpara">
            <p>
              Online video consultations have emerged as a transformative healthcare and communication tool, offering unprecedented convenience, accessibility,
              and efficiency. Enabled by advancements in technology, these virtual appointments connect patients with healthcare professionals, specialists,
              or other experts, transcending geographical boundaries and overcoming logistical barriers. With the capability to discuss medical concerns,
              receive diagnoses, seek advice, and even access therapeutic interventions, online video consultations have become a vital resource, particularly
              in times of crisis like the COVID-19 pandemic. They empower individuals to take charge of their health, save time and resources, reduce the burden
              on healthcare infrastructure, and ensure continuity of care. However, they also raise issues related to privacy, security, and equitable access,
              necessitating careful consideration and regulation as they continue to gain prominence in the digital landscape.  </p>
          </div>
        </div>
      </div>
      {/* start contact */}
      

    <section id="contact" className="contact py">
      <div className="container-grid">
        <div className="contact-left">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.6268289831164!2d-6.214682984112116!3d53.29621947996855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486709e0c9c80f8f%3A0x92f408d10f2277c2!2sREVO!5e0!3m2!1sen!2snp!4v1636264848776!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>


      {/* End contact */}
      
    
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
}

export default About;
