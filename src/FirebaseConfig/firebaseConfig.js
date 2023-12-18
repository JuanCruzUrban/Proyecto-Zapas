// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdUNTUcS6pg7cRctQWGPqA5uxPCJDkmxI",
  authDomain: "proyecto-zapas.firebaseapp.com",
  projectId: "proyecto-zapas",
  storageBucket: "proyecto-zapas.appspot.com",
  messagingSenderId: "222395990573",
  appId: "1:222395990573:web:4bd87b56d77a8a70bf6ea4",
  measurementId: "G-Y8JQGGZ0KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);