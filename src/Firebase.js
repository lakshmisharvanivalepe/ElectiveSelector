import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2jLALNtPZhDa3zl1gOn_tRKLFt6ls7LM",
  authDomain: "elective-selector-db473.firebaseapp.com",
  projectId: "elective-selector-db473",
  storageBucket: "elective-selector-db473.appspot.com",
  messagingSenderId: "222865815989",
  appId: "1:222865815989:web:d57408ebfc1aad713341fc",
  measurementId: "G-S9KWCHNZWC",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider, storage};