import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDisease } from '../redux/authReducer/action';
import './disease.css';


function Disease  (){
  const [num, setNum] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch(); 

  const data = useSelector((state) => state.dataDetails.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchDisease());
  }, []); 

  return (
    <div>
      <div className='main-section'>
        <header className="header">
        <div className="nav__logo">LIFE<span>BIRD</span></div>
          <nav className="navbar">
            <a href="">Home</a>
            <a href="">Diseases</a>
            <a href="">Doctors</a>
            <a href="">Appointments</a>
            <a href="">About Us</a>
          </nav>
        </header>
        <div className='partone'>
          <div className='search-input'>
            <input
              type='text'
              placeholder='Search Doctors'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className='search-button'>
              <img className='search1' src="/resources/search.avif" alt='Search' />
            </button>
          </div>
        </div>
        <div className='display'>
          <div className='small'>
            {data?.map(({ Name, image }) => (
              <div key={Name}>
                <div>
                  <img src={image} alt={Name} />
                  <h1>{Name}</h1>
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
                <p>Oncology</p>
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
        </div>
      </div>
    </div>
  );
}

export default Disease;

