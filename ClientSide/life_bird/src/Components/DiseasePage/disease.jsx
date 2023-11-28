import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"; 
import { getAllDisease } from '../../redux/authReducer/action';
import { useNavigate } from 'react-router';
import './disease.css';

function Disease() {
  const [num, setNum] = useState(1);
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


 

  const dispatch = useDispatch();
  const diseaseData = useSelector(state => state.disease.diseaseData);
  console.log("diseaseData", diseaseData);

  useEffect(() => {
      dispatch(getAllDisease());
  }, []);

 
  return (
    <div>
      <div className=''>
      <div className='main-section'>
        <header className="header">
          <div className="nav__logo">LIFE<span>BIRD</span></div>
          <nav className="navbar">
            <a onClick={handleNavigation} href="">Home</a>
            <a onClick={diseaseNavigation} href="">Diseases</a>
            <a onClick={doctorsNavigation} href="">Doctors</a>
            <a onClick={appointmentNavigation} href="">Appointments</a>
            <a onClick={aboutNavigation} href="">About Us</a>
          </nav>
        </header>
      </div>
      </div>
      <div className='small'>
            {diseaseData.map((disease, index) => (
              <div key={index}>
                <div className='diseaseimg'>
                  <img src={disease.image} alt={disease.name} />
                  <p>{disease.name}</p>
                  <button className='clickbtn'>Click Here</button>
                </div>
              </div>
            ))}
          </div>
          <div className='Main'>
            <div className='line'>
              <div className='cart' onClick={() => setNum(1)}>
                <p>Cardiac surgery</p>
              </div>
              <div className='cart' onClick={() => setNum(2)}>
                <p>oncologists</p>
              </div>
              <div className='cart' onClick={() => setNum(3)}>
                <p>Gastroenterology</p>
              </div>
              <div className='cart' onClick={() => setNum(4)}>
                <p>Orthopaedics</p>
              </div>
              <div className='cart' onClick={() => setNum(5)}>
                <p>Transplants</p>
              </div>
            </div>
            {num === 1 && (
              <div className='diseasecard'>
                <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Cardiac.jpg" alt='Cardiology' />
                <div className='Text1'>
                  <h1 className='cardio'>Cardiology & Cardiac Surgery</h1>
                  <p className='siri'>At Siri Health, we have a team of highly qualified and experienced
                    cardiologists, interventional cardiologists, and cardiac surgeons who provide comprehensive
                    care for a wide range of cardiac conditions in adults & children.
                    Treatment for Cardiac conditions offered at Narayana Health ranges from medication, treatment
                    of underlying conditions, interventional procedures to both minimally invasive and open heart surgery.
                    To provide comprehensive care to patients, the team works closely with allied departments at Narayana Health
                    to ensure accurate diagnoses are reached, and appropriate pre and post-treatment care is provided.
                  </p>
                </div>
              </div>
            )}
            {num === 2 && (
              <div className='diseasecard'>
                <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Gastro.jpg" alt='Gastroenterology' />
                <div className='Text1'>
                  <h1 className='cardio'>Gastroenterology</h1>
                  <p className='siri'>The Department of Gastroenterology at Siri Health is at the forefront of the diagnosis and treatment of
                    gastrointestinal diseases, which consists of a highly trained gastroenterologist team. We treat diseases
                    concerning the upper digestive tract, stomach, liver, colon, intestinal problems, and pancreas. At Narayana
                    Health, we follow a multidisciplinary approach for the care of patients, and the department is supported by
                    Surgical Gastroenterology, Medical Oncology, Radiology, Radiotherapy, Anaesthesiology, and Intensive Care Specialists.
                  </p>
                </div>
              </div>
            )}
            {num === 3 && (
              <div className='diseasecard'>
                <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/turp.jpg" alt='Transplants' />
                <div className='Text1'>
                  <h1 className='cardio'>Transplants</h1>
                  <p className='siri'>Siri Health offers one of the most comprehensive organ transplantation programs in India. The experience and
                    expertise of our consultants along with an integrated multidisciplinary team approach and excellent infrastructure try to ensure superior outcomes.
                    Our hospitals are well known for several multi-organ transplant procedures such as:
                    Heart Transplant - Adult | Paediatric
                    Kidney Transplant - Living Donor | Deceased Donor
                    Liver Transplant - Adult | Paediatric
                    Bone Marrow Transplant: Autologous | Allogenic | Hematopoietic.
                  </p>
                </div>
              </div>
            )}
            {num === 4 && (
              <div className='diseasecard'>
                <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Onco.jpg" alt='Oncology' />
                <div className='Text1'>
                  <h1 className='cardio'>Oncology</h1>
                  <p className='siri'>Our Department of Oncology follows a trans-disciplinary and multi-modality
                    approach in the field of adult and paediatric Oncology. The department has an extensive medical
                    programme, with super-sub-specialists in the field of Medical Oncology, Haematology – Adult &
                    Paediatric, Radiation Oncology, Specialised Onco surgery. There are various specialized clinics
                    and a range of Support services for the prevention, diagnosis, and treatment of cancer. With cutting-edge
                    technology and a team of dedicated superspecialists, we offer care for all stages of cancer.
                  </p>
                </div>
              </div>
            )}
            {num === 5 && (
              <div className='diseasecard'>
                <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Ortho.jpg" alt='Orthopaedics' />
                <div className='Text1'>
                  <h1 className='cardio'>Orthopaedics</h1>
                  <p className='siri'>Our Department of Orthopaedics provides comprehensive and world-class orthopaedics services.
                    The expert team of consultants offer specialized care in the fields of complex trauma, poly-trauma, and other
                    sub-specialties of orthopaedics. It provides management for all disorders of bone, joint, and a variety of musculoskeletal disorders.
                    The department has extensive experience in diagnosing and treating upper & lower limb surgery, trauma, bone diseases, and congenital
                    conditions. In addition to an excellent orthopaedic staff, we also work with efficient occupational therapists, physiotherapists, and pain management experts.
                  </p>
                </div>
              </div>
            )}
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
}

export default Disease;
