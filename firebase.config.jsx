// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA39OZlX3tdFmwzRVVYUWj4pV8vpuOCq4A",
  authDomain: "recyc-f2421.firebaseapp.com",
  databaseURL: "https://recyc-f2421-default-rtdb.firebaseio.com",
  projectId: "recyc-f2421",
  storageBucket: "recyc-f2421.appspot.com",
  messagingSenderId: "846891328637",
  appId: "1:846891328637:web:43f4adad4d9a93bf98bd14",
  measurementId: "G-NWW5VKCME8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Database
export const db = getDatabase(app);

// Initialilze Authentication
export const auth = getAuth(app);

// Initialize Google
export const provider = new GoogleAuthProvider(app);