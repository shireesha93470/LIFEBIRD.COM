// import React, { useState } from "react";
// import { Form, Alert, Button } from "react-bootstrap";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-input-2/lib/style.css";
// import { Link } from "react-router-dom";
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

// function OTP() {
//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAZX-LVZIkPc75Qtvi3UA4CHUni_jRhhdA",
//     authDomain: "lifebird-com.firebaseapp.com",
//     projectId: "lifebird-com",
//     storageBucket: "lifebird-com.appspot.com",
//     messagingSenderId: "967896526435",
//     appId: "1:967896526435:web:8390befd9cdaff76331256",
//     measurementId: "G-E69RE0EK26"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

//   // Get the Auth instance
//   const auth = getAuth(app);

//   const [error, setError] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [otp, setOtp] = useState("");
//   const [loginStatus, setLoginStatus] = useState(null);

//   const getOtp = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!phoneNumber) {
//       return setError('Please enter a valid phone number');
//     }

//     try {
//       const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container-send', {
//         'size': 'invisible',
//         'callback': (response) => {
//           console.log("prepared phone auth process");
//         }
//       });

//       const result = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);

//       setConfirmationResult(result);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (confirmationResult) {
//         const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container-verify', { 'size': 'invisible' });

//         const userCredential = await confirmationResult.confirm(otp, recaptchaVerifier);

//         const user = userCredential.user;
//         console.log("User authenticated:", user);

//         setLoginStatus('success');
//       } else {
//         setError("Confirmation result is not available. Please request OTP again.");
//         setLoginStatus('error');
//       }
//     } catch (err) {
//       setError(err.message);
//       setLoginStatus('error');
//     }
//   };

//   // ... rest of your component code

//   return (
//     <div>
//        <h2>Firebase Phone auth</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
//       {loginStatus === 'success' && <Alert variant="success">Login successful!</Alert>}
//       {loginStatus === 'error' && <Alert variant="danger">Please enter the correct OTP.</Alert>}
//       <Form onSubmit={getOtp}>
//         <Form.Group controlId="formBasicPhoneNumber">
//           <PhoneInput
//             defaultCountry="PH"
//             value={phoneNumber}
//             onChange={(value) => setPhoneNumber(value)}
//             placeholder="Enter Phone number"
//           />
//         </Form.Group>
//         <Link to="/">
//           <Button variant="secondary">Cancel</Button>
//         </Link>
//         <Button variant="primary" type="submit">
//           Send OTP
//         </Button>
//       </Form>

//       <Form onSubmit={verifyOtp}>
//         <Form.Group controlId="formBasicOTP">
//           <Form.Control
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Verify OTP
//         </Button>
//       </Form>

//       <div id="recaptcha-container-send"></div>
//       <div id="recaptcha-container-verify"></div>
//     </div>
//   );
// }

// export default OTP;
import React from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import app from './firebase';

class OTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      otp: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        this.onSignInSubmit();
        console.log('Recaptcha verified');
      },
      defaultCountry: 'IN',
    });
  };

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = '+91' + this.state.mobile;
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log('OTP has been sent');
      })
      .catch((error) => {
        console.log('SMS not sent', error);
      });
  };

  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    window.confirmationResult.confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert('User is verified');
      })
      .catch((error) => {
        console.log('User couldn\'t sign in (bad verification code?)', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder='Mobile number' required onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <h2>OTP Form</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder='OTP number' required onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default OTP;
