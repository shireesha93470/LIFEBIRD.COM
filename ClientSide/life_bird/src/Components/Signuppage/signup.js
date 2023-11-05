import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [patientname, setPatientname] = useState("");
  const [patientmobile, setPatientmobile] = useState("");
  const [username, setUsername] = useState("");
  const [patientemailid, setPatientemailid] = useState("");
  const [patientpassword, setPatientpassword] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (patientname !== "" || patientmobile !== "" || patientemailid !== "" || patientpassword !== "") {
      const signupDetails = JSON.parse(localStorage.getItem("signup")) || [];

      for (let i = 0; i < signupDetails.length; i++) {
        if (signupDetails[i].username === username || signupDetails[i].patientpassword === patientpassword) {
          alert("User already exists");
          setPatientname("");
          setUsername("");
          setPatientmobile("");
          setPatientemailid("");
          setPatientpassword("");
          return;
        }
      }

      signupDetails.push({ patientname, username, patientmobile, patientemailid, patientpassword });
      localStorage.setItem("signup", JSON.stringify(signupDetails));
      alert("Signup successful");
      navigation("/");
    } else {
      alert("Please enter your details");
    }
  };

  return (
    <div className="body">
      <div className="custom-wrapper">
        <span className="custom-bg-animate"></span>
        <div className="custom-form-box signup">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="custom-input-box">
              <input type="text" required value={patientname} onChange={(e) => setPatientname(e.target.value)} />
              <label>Name</label>
              <i className="bx bxs-user-circle"></i>
            </div>
            <div className="custom-input-box">
              <input type="text" required value={patientemailid} onChange={(e) => setPatientemailid(e.target.value)} />
              <label>Email-Id</label>
              <i className="bx bx-envelope"></i>
            </div>
            <div className="custom-input-box">
              <input type="number" required value={patientmobile} onChange={(e) => setPatientmobile(e.target.value)} />
              <label>PhoneNumber</label>
              <i className="bx bx-phone"></i>
            </div>
            <div className="custom-input-box">
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
              <label>Username</label>
              <i className="bx bxs-user"></i>
            </div>
            <div className="custom-input-box">
              <input type="password" required value={patientpassword} onChange={(e) => setPatientpassword(e.target.value)} />
              <label>Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="custom-button">
              Signup
            </button>
            <div className="custom-logreg-link">
              <p>
                Already have an account?<Link to = "/login"><a href="#" className="custom-register-link">Login</a></Link>
              </p>
            </div>
          </form>
        </div>
        <div className="custom-info-text login3">
          <h2>Welcome Back!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
