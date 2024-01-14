// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN2TpcYdHY8A42yZ_WSxnrGw72h2aGx7s",
  authDomain: "textr-a3d81.firebaseapp.com",
  projectId: "textr-a3d81",
  storageBucket: "textr-a3d81.appspot.com",
  messagingSenderId: "546237686305",
  appId: "1:546237686305:web:21ef02e28cd3889b72f960",
  measurementId: "G-7FV7CE07Y0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
