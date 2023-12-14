import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu4C6BqziPollnfQueS8sPMpACsxr807M",
  authDomain: "trabajo-react-mastroiani.firebaseapp.com",
  projectId: "trabajo-react-mastroiani",
  storageBucket: "trabajo-react-mastroiani.appspot.com",
  messagingSenderId: "255863312468",
  appId: "1:255863312468:web:0212e7e0590ee08e0e9dc1"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)