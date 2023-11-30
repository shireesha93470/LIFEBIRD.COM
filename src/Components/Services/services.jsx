import React from 'react';
import './services.css';
import NavBar from '../NavBar/navbar.js';
import Footer from '../Footer/footer.js';

function ServicesSection() {
    return (
    <div>
    <NavBar/>
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
        <Footer/>
    </div>
    );
}
export default ServicesSection;
