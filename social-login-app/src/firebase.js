import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATXvKXBTbfAeYEuTWsyzMuoq8YLP73g1A",
  authDomain: "social-login-app-8c6e4.firebaseapp.com",
  projectId: "social-login-app-8c6e4",
  storageBucket: "social-login-app-8c6e4.appspot.com", // ✅ Fixed
  messagingSenderId: "182562077987",
  appId: "1:182562077987:web:87b46a380e0ad72663a096",
  measurementId: "G-1N2B2643WH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
