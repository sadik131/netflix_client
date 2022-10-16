import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgUSd8FmYDbsKPwHmCaSorTRO0Kb1IQUM",
  authDomain: "netflix-user-23fc7.firebaseapp.com",
  projectId: "netflix-user-23fc7",
  storageBucket: "netflix-user-23fc7.appspot.com",
  messagingSenderId: "127658073346",
  appId: "1:127658073346:web:e8af845ed2b8020e29361b",
  measurementId: "G-2CGXLKX5TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;