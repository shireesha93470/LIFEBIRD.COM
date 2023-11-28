import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const result = JSON.parse(localStorage.getItem('signupdata')) || [];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return;
    }

    let loginSuccessful = false;
    for (let i = 0; i < result.length; i++) {
      if (result[i].username === username && result[i].password === password) {
        loginSuccessful = true;
        alert('Login successful');
        const loggedInUser = { ...result[i], password: password === '' ? false : true };
        localStorage.setItem('loginUser', JSON.stringify(loggedInUser));
        break;
      }
    }

    if (!loginSuccessful) {
      alert('Wrong username and password');
    }
  };

  return (
    <div className="body4">
      <div className="new-wrapper">
        <span className="new-bg-animate"></span>
        <div className="new-form-box new-login">
          <h2>Login</h2>
          <form action="#">
            <div className="new-input-box">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
              <i className="bx bxs-user"></i>
            </div>
            <div className="new-input-box">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="button" className="new-button" onClick={handleLogin}>
              Login
            </button>
            <div className="new-logreg-link">
              <p>
                Don't have an account?<Link to = "/signup"><a href="#" className="new-register-link">Signup</a></Link>
              </p>
            </div>
          </form>
        </div>
        <div className="new-info-text new-login">
          <h2>Welcome Back!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

 