// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRnhI2ymnCLiR6H_AeJv3PDKoDcX0j6OQ",
  authDomain: "photodump-16290.firebaseapp.com",
  projectId: "photodump-16290",
  storageBucket: "photodump-16290.appspot.com",
  messagingSenderId: "401333081684",
  appId: "1:401333081684:web:0b1d4b05613724432abfc1",
  measurementId: "G-97SB4B4EFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);