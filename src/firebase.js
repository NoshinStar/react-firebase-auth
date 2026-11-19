// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjGMj4CDgCcDVOTsRcFrnHiVfTQ9-NlnY",
  authDomain: "my-react-app-ddd5f.firebaseapp.com",
  projectId: "my-react-app-ddd5f",
  storageBucket: "my-react-app-ddd5f.firebasestorage.app",
  messagingSenderId: "164897947893",
  appId: "1:164897947893:web:85ed66f60eb5fcd84445bc",
  measurementId: "G-DEJYFERXXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);