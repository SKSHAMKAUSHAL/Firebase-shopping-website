// Import only the functions you need from Firebase SDKs

import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4sHy9wVykUGS0xXcjaOdznbMPasmY_KI",
  authDomain: "my-e-com-1f896.firebaseapp.com",
  projectId: "my-e-com-1f896",
  storageBucket: "my-e-com-1f896.firebasestorage.app",
  messagingSenderId: "115925391259",
  appId: "1:115925391259:web:c49f2ab8a65259d7eaf33e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth   =getAuth(app);

export {fireDB ,auth}; 
