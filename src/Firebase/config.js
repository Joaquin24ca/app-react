// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWUdhkJ1Fm0gV--CqBqYQeZf3UGFOKQ6c",
  authDomain: "tumoda-b66f4.firebaseapp.com",
  projectId: "tumoda-b66f4",
  storageBucket: "tumoda-b66f4.appspot.com",
  messagingSenderId: "120083548005",
  appId: "1:120083548005:web:48ce454fe3651fa743838c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);