// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOklyDAQphznRl-FyHxKJSIzBnSLDL4E0",
  authDomain: "podcast-app-c437c.firebaseapp.com",
  projectId: "podcast-app-c437c",
  storageBucket: "podcast-app-c437c.appspot.com",
  messagingSenderId: "695713723068",
  appId: "1:695713723068:web:33e4110df6eee208d196b9",
  measurementId: "G-R5V43EZNTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { auth, db, storage };
