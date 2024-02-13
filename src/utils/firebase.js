// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-ea233.firebaseapp.com",
  projectId: "blog-ea233",
  storageBucket: "blog-ea233.appspot.com",
  messagingSenderId: "543836945076",
  appId: "1:543836945076:web:e9e2a860423c63893bf5e1",
  measurementId: "G-ETQ48PGW6R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
