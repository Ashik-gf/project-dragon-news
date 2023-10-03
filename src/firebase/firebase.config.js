// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-oji0OTtfaVKkLfGqnlMMreLC72ddsOw",
  authDomain: "dragon-news-project-cc1c0.firebaseapp.com",
  projectId: "dragon-news-project-cc1c0",
  storageBucket: "dragon-news-project-cc1c0.appspot.com",
  messagingSenderId: "728320514445",
  appId: "1:728320514445:web:2e3f263d043deb4bb005c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
