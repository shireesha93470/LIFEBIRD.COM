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
