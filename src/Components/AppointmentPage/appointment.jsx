
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
  
    localStorage.setItem('appointmentFormData', JSON.stringify(formData));

    setStoredData(formData);
  };

  const handleDelete = () => {

    localStorage.removeItem('appointmentFormData');

  
    setStoredData(null);
  };

  return (
    <div className='appointment-form'>
      <h1>Appointment</h1>
      <form onSubmit={handleSubmit}>
        {/* Your basic details section */}
        <div className='form-main'>
          <div className="form-section">
            <div className="label" htmlFor="user_name">Full Name:</div>
            <input
              className='input-field'
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Full Name"
              required
              pattern="[a-zA-Z0-9]+"
              value={formData.user_name}
              onChange={handleChange}
            />

            <div className="label" htmlFor="user_email">Email-Id:</div>
            <input
              className='input-field'
              type="email"
              id="user_email"
              name="user_email"
              placeholder="abc@xyz.com"
              required
              value={formData.user_email}
              onChange={handleChange}
            />

            <div className="label" htmlFor="user_num">Contact:</div>
            <input
              className='input-field'
              type="tel"
              id="user_num"
              placeholder="Include country code"
              name="user_num"
              value={formData.user_num}
              onChange={handleChange}
            />

            <div className="label" htmlFor="skype_name">Username:</div>
            <input
              className='input-field'
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
          <div className="form-section">
            <div className="label" htmlFor="appointment_for">Appointment for*:</div>
            <select
              id="appointment_for"
              name="appointment_for"
              required
              value={formData.appointment_for}
              onChange={handleChange}
            >
              <option value="Cardiologist">Audio Consultation</option>
              <option value="Endocrinologist">Video Consultation</option>
              <option value="Gynecologists">Chat</option>
            </select>

            <div className="label" htmlFor="appointment_description">Appointment Description:</div>
            <textarea
              id="appointment_description"
              name="appointment_description"
              placeholder="I wish to get an appointment to skype for resolving a software problem."
              value={formData.appointment_description}
              onChange={handleChange}
            />

            <div className="label" htmlFor="date">Date*:</div>
            <input
              type="date"
              name="date"
              value={formData.date}
              required
              onChange={handleChange}
            />

            <div className="label" htmlFor="time">Time*:</div>
            <input
              type="time"
              name="time"
              value={formData.time}
              required
              onChange={handleChange}
            />

            <div className="label">How Long??(Minutes)</div>
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
              More
            </label>
          </div>
        </div>
        <button className='submit-btn' type="submit">Submit</button>
        <button className='delete-btn' type="button" onClick={handleDelete}>
          Delete 
        </button>
      </form>

      {/* Display stored form data */}
      {storedData && (
        <div className="stored-data">
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
