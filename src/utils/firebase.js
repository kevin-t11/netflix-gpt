// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARnuhNBUb5T1XrvcAWL1pvWQHb2LeDWIU",
  authDomain: "netflixgpt-d8480.firebaseapp.com",
  projectId: "netflixgpt-d8480",
  storageBucket: "netflixgpt-d8480.appspot.com",
  messagingSenderId: "563380918589",
  appId: "1:563380918589:web:213264a700c5e78cc04d54",
  measurementId: "G-CLPFLWPY03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
