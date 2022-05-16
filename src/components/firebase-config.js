// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbLAnNpIoxQhK93wyMBQm90hgkawZFvZI",
  authDomain: "transport-b8d6a.firebaseapp.com",
  projectId: "transport-b8d6a",
  storageBucket: "transport-b8d6a.appspot.com",
  messagingSenderId: "185396054336",
  appId: "1:185396054336:web:3fc5e0eaed0bdd1600d2a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
