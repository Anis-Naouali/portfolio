// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4f969.firebaseapp.com",
  projectId: "mern-auth-4f969",
  storageBucket: "mern-auth-4f969.appspot.com",
  messagingSenderId: "5680194574",
  appId: "1:5680194574:web:3c7df675b7244ab038885f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
