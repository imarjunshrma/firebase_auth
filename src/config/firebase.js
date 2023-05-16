// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEdNGIaMaEK8MaingXIrfsidWz_oKfZNg",
  authDomain: "react-authentication-4157e.firebaseapp.com",
  projectId: "react-authentication-4157e",
  storageBucket: "react-authentication-4157e.appspot.com",
  messagingSenderId: "43578010190",
  appId: "1:43578010190:web:253b1167356f9ff9f7311f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;