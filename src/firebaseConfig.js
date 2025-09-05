// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnXBF5j_CzRdhbE4kczT3HFieFojkt1m4",
  authDomain: "crud-react-c9159.firebaseapp.com",
  databaseURL: "https://crud-react-c9159-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-react-c9159",
  storageBucket: "crud-react-c9159.firebasestorage.app",
  messagingSenderId: "1025210444270",
  appId: "1:1025210444270:web:24228e82d81b54cdfd46ff",
  measurementId: "G-X54D2GS7PM",
};

const app = initializeApp(firebaseConfig);
export default app;
