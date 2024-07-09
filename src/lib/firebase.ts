// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Timestamp, getFirestore, serverTimestamp } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxqZWpzJXsBK9zrQB3xyaEsWjiKzLUoBM",
  authDomain: "nestecom-fe138.firebaseapp.com",
  projectId: "nestecom-fe138",
  storageBucket: "nestecom-fe138.appspot.com",
  messagingSenderId: "222074193368",
  appId: "1:222074193368:web:ddd4eac103b2ab8ff79ead",
  measurementId: "G-EP0SLL0LHG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export const firestoreTimerMeta = {
  createdAt : serverTimestamp(),
  updatedAt : serverTimestamp()
}
