import React, { useState, useEffect } from 'react';
import './appointment.css';
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_num: '',
    skype_name: '',
    appointment_for: '',
    appointment_description: '',
    date: '',
    time: '',
    duration: '30',
  });

  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    // Load stored data when the component mounts
    const storedData = JSON.parse(localStorage.getItem('appointmentFormData'));
    if (storedData) {
      setStoredData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    // Store form data in localStorage
    localStorage.setItem('appointmentFormData', JSON.stringify(formData));

    // Update the stored data state
    setStoredData(formData);
  };

  const handleDelete = () => {
    // Delete stored data from localStorage
    localStorage.removeItem('appointmentFormData');

    // Clear the stored data state
    setStoredData(null);
  };

  return (
    <div >
      <h1>Appointment</h1>
      <form onSubmit={handleSubmit}>
        {/* Your basic details section */}
        <div className='formmain'>
        <div className="section">
          <div className="section-title">Your basic details</div>
          <hr></hr>
          <label className='lbn' htmlFor="user_name">FullName:</label>
          <input
            className='htn'
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Full Name"
            required
            pattern="[a-zA-Z0-9]+"
            value={formData.user_name}
            onChange={handleChange}
          />

          <label className='lbn' htmlFor="user_email">Email-Id:</label>
          <input
            className='htn'
            type="email"
            id="user_email"
            name="user_email"
            placeholder="abc@xyz.com"
            required
            value={formData.user_email}
            onChange={handleChange}
          />

          <label className='lbn' htmlFor="user_num">Contact:</label>
          <input
            className='htn'
            type="tel"
            id="user_num"
            placeholder="Include country code"
            name="user_num"
            value={formData.user_num}
            onChange={handleChange}
          />

          <label className='lbn' htmlFor="skype_name">Username:</label>
          <input
            className='htn'
            type="text"
            id="skype_name"
            name="skype_name"
            placeholder="@atchyutn"
            pattern="[a-zA-Z0-9]+"
            value={formData.skype_name}
            onChange={handleChange}
          />
        </div>

        {/* Appointment details section */}
        <div className="section">
          <div className="section-title">Appointment Details</div>
          <hr></hr>
          <label className='lbn' htmlFor="appointment_for">Appointment for*:</label>
          <select
            id="appointment_for"
            name="appointment_for"
            required
            value={formData.appointment_for}
            onChange={handleChange}
          >
            <option value="Cardiologist">Audio Consultation</option>
            <option value="Endocrinologist">Video Consultation</option>
            <option value="Gynecologists">chat</option>
          </select>

          <label className='lbn' htmlFor="appointment_description">Appointment Description:</label>
          <textarea
            id="appointment_description"
            name="appointment_description"
            placeholder="I wish to get an appointment to skype for resolving a software problem."
            value={formData.appointment_description}
            onChange={handleChange}
          />

          <label className='lbn' htmlFor="date">Date*:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            required
            onChange={handleChange}
          />

          <label className='lbn' htmlFor="time">Time*:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            required
            onChange={handleChange}
          />

          <label className='lbn'>How Long??(Minutes)</label>
          <label>
            <input
              type="radio"
              name="duration"
              value="30"
              checked={formData.duration === '30'}
              onChange={handleChange}
            />{' '}
            30
          </label>
          <label>
            <input
              type="radio"
              name="duration"
              value="60"
              checked={formData.duration === '60'}
              onChange={handleChange}
            />{' '}
            60
          </label>
          <label>
            <input
              type="radio"
              name="duration"
              value="90"
              checked={formData.duration === '90'}
              onChange={handleChange}
            />{' '}
            90
          </label>
          <label>
            <input
              type="radio"
              name="duration"
              value="more"
              checked={formData.duration === 'more'}
              onChange={handleChange}
            />{' '}
            more
          </label>
        </div>
        </div>
        <button className='sbtn' type="submit">Submit</button>
        <button className='sbtn' type="button" onClick={handleDelete}>
          Delete 
        </button>
        
      </form>

      {/* Display stored form data */}
      {storedData && (
        <div>
          <h2>Stored Form Data</h2>
          <p>Name: {storedData.user_name}</p>
          <p>Email: {storedData.user_email}</p>
          <p>Contact Num: {storedData.user_num}</p>
          <p>Skype username: {storedData.skype_name}</p>
          <p>Appointment for: {storedData.appointment_for}</p>
          <p>Appointment Description: {storedData.appointment_description}</p>
          <p>Date: {storedData.date}</p>
          <p>Time: {storedData.time}</p>
          <p>Duration: {storedData.duration}</p>
        </div>
      )}
      
    </div>
   
  );
};

export default AppointmentForm;


