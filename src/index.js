import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBfHdgJ0kfhooWvQLIf3V1Bri_mauUuGDY",
  authDomain: "cart-be7bb.firebaseapp.com",
  projectId: "cart-be7bb",
  storageBucket: "cart-be7bb.appspot.com",
  messagingSenderId: "245236781512",
  appId: "1:245236781512:web:22295a226123ab62a570fd"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
