// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdRcD7UL8001Q7GU8yMkDNYeteO_5p3ns",
  authDomain: "expense-tracker-29fb1.firebaseapp.com",
  projectId: "expense-tracker-29fb1",
  storageBucket: "expense-tracker-29fb1.appspot.com",
  messagingSenderId: "886692129853",
  appId: "1:886692129853:web:8e0231991c762ba717ce54",
  measurementId: "G-LGB05W3RC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); 

export { app, analytics, firestore };