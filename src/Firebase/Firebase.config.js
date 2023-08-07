// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFybMGlAHLwimMalWjvcQdYZDqfJMU0II",
  authDomain: "future-prodigy-bba0c.firebaseapp.com",
  projectId: "future-prodigy-bba0c",
  storageBucket: "future-prodigy-bba0c.appspot.com",
  messagingSenderId: "62625344609",
  appId: "1:62625344609:web:6bcc45eff2aeb631c18e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;