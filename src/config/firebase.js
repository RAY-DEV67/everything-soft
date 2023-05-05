import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyANfK4a7LrdymeVevSbEvwZEz_49uLJLKw",
  authDomain: "everything-soft-b8f82.firebaseapp.com",
  projectId: "everything-soft-b8f82",
  storageBucket: "everything-soft-b8f82.appspot.com",
  messagingSenderId: "767201769060",
  appId: "1:767201769060:web:7dc98f16d2b256581b9171",
  measurementId: "G-KB7TVCSVH3"
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db

