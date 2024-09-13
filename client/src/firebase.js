// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ee65a.firebaseapp.com",
  projectId: "mern-estate-ee65a",
  storageBucket: "mern-estate-ee65a.appspot.com",
  messagingSenderId: "1035516173611",
  appId: "1:1035516173611:web:872b50f4d68256915bb96e"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);