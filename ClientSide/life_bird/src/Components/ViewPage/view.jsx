import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getAllDoctors } from '../../redux/authReducer/action';
import './view.css';

const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctorData = useSelector(state => state.doctors.doctorsData);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const selectedDoctor = doctorData.find((doctor, index) => String(index) === id);

  if (!selectedDoctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className='doc_data'>
      <div key={id}>
        <div className='doctorimg'>
          <img src={selectedDoctor.image} alt={selectedDoctor.name} />
          <div className='doctordetail'>
            <p className='doctdata'>Name: {selectedDoctor.name}</p>
            <p className='doctdata'>PhoneNumber: {selectedDoctor.phonenumber}</p>
            <p className='doctdata'>Experience: {selectedDoctor.experience}</p>
            <p className='doctdata'>Specialization: {selectedDoctor.specialization}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
