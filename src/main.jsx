import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClbnyjHoiL-QUP2IkhuyMK8_V2n2FuiHs",
  authDomain: "comision-50105-react.firebaseapp.com",
  projectId: "comision-50105-react",
  storageBucket: "comision-50105-react.appspot.com",
  messagingSenderId: "834837902808",
  appId: "1:834837902808:web:5a2f0eee418e0e35fcaead"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)