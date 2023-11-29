import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDoctors } from '../../redux/authReducer/action';
import './doctors.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/footer.js';
import NavBar from '../NavBar/navbar.js';

const DoctorCard = ({ doctor, onViewDetails }) => {
  const navigate = useNavigate();

  const appointmentNavigation=()=>{
    navigate('/appointment')
  }
  
  return (
    <div key={doctor.id} className="doctor_img">
      <img src={doctor.image} alt={doctor.name} />
      <div className="doctor_detail">
        <p className="doct_data">Name: {doctor.name}</p>
        <p className="doct_data">PhoneNumber: {doctor.phonenumber}</p>
        <p className="doct_data">Experience: {doctor.experience}</p>
        <p className="doct_data">Specialization: {doctor.specialization}</p>
        <div className="doct_btn">
          <button onClick={onViewDetails} className="clicking">
            View more
          </button>
          <button onClick={appointmentNavigation} className="clicking">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

const Doctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doctordata = useSelector((state) => state.doctors.doctorsData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const filteredDoctors = doctordata.filter((doctor) =>
    doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  const viewDetails = (index) => {
    navigate(`/view/${index}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const record = 6;
  const lastIndex = currentPage * record;
  const firstIndex = lastIndex - record;
  const Records = filteredDoctors.slice(firstIndex, lastIndex);
  const nthPage = Math.ceil(filteredDoctors.length / record);
  const numbers = Array.from({ length: nthPage }, (_, i) => i + 1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changepage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage < nthPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <header className="header">
        {/* ... */}
        <NavBar/>
      </header>
      <form className="search-form" method="get" action="#">
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your Doctor here for..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="doc_data">
        {Records.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} onViewDetails={() => viewDetails(index)} />
        ))}
      </div>
      <nav className="page">
        <li className="page_num"></li>
        {numbers.map((n, i) => (
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <a className="click2" onClick={() => changepage(n)}>
              {n}
            </a>
          </li>
        ))}
        <li className="page_num1"></li>
      </nav>
      <Footer />
    </div>
  );
};
export default Doctor;
