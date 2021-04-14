// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHpGhf1eVBLCgQi98YU3L738dY-S6iv_k",
    authDomain: "clone-payment.firebaseapp.com",
    projectId: "clone-payment",
    storageBucket: "clone-payment.appspot.com",
    messagingSenderId: "339532531490",
    appId: "1:339532531490:web:bc0986afef6a599a17077b",
    measurementId: "G-K1K30XWYV8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };