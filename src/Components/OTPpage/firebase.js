import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAD9ulZbcunVH6CKDOtulBuL7O7i4ruA4Y",
  authDomain: "siri-6e342.firebaseapp.com",
  projectId: "siri-6e342",
  storageBucket: "siri-6e342.appspot.com",
  messagingSenderId: "151485872954",
  appId: "1:151485872954:web:fe1dbde310af01276eae03"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
