// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbLAnNpIoxQhK93wyMBQm90hgkawZFvZI",
  authDomain: "transport-b8d6a.firebaseapp.com",
  projectId: "transport-b8d6a",
  storageBucket: "transport-b8d6a.appspot.com",
  messagingSenderId: "185396054336",
  appId: "1:185396054336:web:fbe6e605199aef5600d2a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
