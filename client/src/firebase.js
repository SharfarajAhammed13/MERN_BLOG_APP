// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-5111c.firebaseapp.com",
  projectId: "mern-blog-app-5111c",
  storageBucket: "mern-blog-app-5111c.appspot.com",
  messagingSenderId: "265440052363",
  appId: "1:265440052363:web:298d09f6dc857bf039c08e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);