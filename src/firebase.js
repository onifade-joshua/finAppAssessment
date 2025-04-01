import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBUR7fkNIn6bXkc5bjJKjgrHmgzz4FxxoY",
  authDomain: "fin-pay-89782.firebaseapp.com",
  projectId: "fin-pay-89782",
  storageBucket: "fin-pay-89782.appspot.com",
  messagingSenderId: "565342953306",
  appId: "1:565342953306:web:0713ca34134d6d00769d63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, googleProvider };
