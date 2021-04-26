import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM1H9w-mESnmOgSWgv_XEVF9KDCi-03PM",
  authDomain: "praktikum-a0303.firebaseapp.com",
  databaseURL: "https://praktikum-a0303-default-rtdb.firebaseio.com",
  projectId: "praktikum-a0303",
  storageBucket: "praktikum-a0303.appspot.com",
  messagingSenderId: "1015630968545",
  appId: "1:1015630968545:web:d5372d6a59ea490d8569a0",
  measurementId: "G-DBE2468RVX"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;