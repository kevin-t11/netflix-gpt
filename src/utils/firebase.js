// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrDqz0WJ0N4vLDtPgjjzzhKcclgqXbyKs",
  authDomain: "netflixgpt-422804.firebaseapp.com",
  projectId: "netflixgpt-422804",
  storageBucket: "netflixgpt-422804.appspot.com",
  messagingSenderId: "319410142924",
  appId: "1:319410142924:web:42dd9e0f151bea64064c69",
  measurementId: "G-0VY7YVWFKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();