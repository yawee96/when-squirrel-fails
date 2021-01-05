import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routes from "./Routes";
import reportWebVitals from './reportWebVitals';


import firebase from "firebase/app"
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDOag9-fh0Rky0NdiWyjPR1jeLe2YLgjpE",
  authDomain: "bluechip-pos.firebaseapp.com",
  projectId: "bluechip-pos",
  storageBucket: "bluechip-pos.appspot.com",
  messagingSenderId: "454116305507",
  appId: "1:454116305507:web:127fe684327c010106a656",
  measurementId: "G-C1F34J1NES"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('pos-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
