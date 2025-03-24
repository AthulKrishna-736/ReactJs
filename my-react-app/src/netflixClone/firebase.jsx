// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDovpBN5NQqkF8HGhAJdfB8I-yfVI3Sbng",
  authDomain: "netflix-clone-777ea.firebaseapp.com",
  projectId: "netflix-clone-777ea",
  storageBucket: "netflix-clone-777ea.appspot.com",
  messagingSenderId: "776729307045",
  appId: "1:776729307045:web:871daca18f40a2a801aa4c",
  measurementId: "G-SV7BWWW5G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }
