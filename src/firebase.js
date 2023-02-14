// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCThef_NqUL2YSXk6_dZl055rMmDaOJtls",
  authDomain: "clone-cf421.firebaseapp.com",
  projectId: "clone-cf421",
  storageBucket: "clone-cf421.appspot.com",
  messagingSenderId: "57506176419",
  appId: "1:57506176419:web:3db9bce0005a4f64b34e16",
  measurementId: "G-G4KTD918ES",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};