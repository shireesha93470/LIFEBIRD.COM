import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDisease } from '../../redux/authReducer/action';
import './symptoms.css';
import NavBar from '../NavBar/navbar.js';
import Footer from '../Footer/footer.js';
import { useParams } from 'react-router-dom';

// Symptom component
function Symptom() {
  const [selectedSection, setSelectedSection] = useState('symptoms');
  const dispatch = useDispatch();
  const diseaseData = useSelector((state) => state.disease.diseaseData);
  console.log('diseaseData', diseaseData);

  useEffect(() => {
    dispatch(getAllDisease());
  }, [dispatch]);

  const { id } = useParams();

  // Check if the id is valid
  if (!id || isNaN(id) || id < 0 || id >= diseaseData.length) {
    return <div>Invalid id</div>;
  }

  const symptom = diseaseData.find((disease, index) => index === parseInt(id, 10));

  if (!symptom) {
    return <div>Loading...</div>;
  }


  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <div className="main-section">
        <NavBar />
      </div>
      <div className='buttondiv'>
        <button className='sbtn' onClick={() => handleSectionClick('symptoms')}>Symptoms</button>
        <button className='sbtn' onClick={() => handleSectionClick('whydisease')}>Why Disease Happens</button>
        <button className='sbtn' onClick={() => handleSectionClick('cure')}>How to cure</button>
      </div>
      <div className="Symptoms">
        {selectedSection === 'symptoms' && <h2>Symptoms:</h2>}
        {selectedSection === 'whydisease' && <h2>Why this Disease Happens:</h2>}
        {selectedSection === 'cure' && <h2>How to cure:</h2>}
        {selectedSection === 'symptoms' && <p>{symptom.symptoms}</p>}
        {selectedSection === 'whydisease' && <p>{symptom.whydisease}</p>}
        {selectedSection === 'cure' && <p>{symptom.cure}</p>}
      </div>
      <Footer />
    </div>
  );
}
export default Symptom;
