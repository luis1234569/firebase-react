// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyZIii-iXJd36R4hYDnPW7raG1eej9RuA",
  authDomain: "fb-client-67cf8.firebaseapp.com",
  projectId: "fb-client-67cf8",
  storageBucket: "fb-client-67cf8.appspot.com",
  messagingSenderId: "389353078724",
  appId: "1:389353078724:web:7906e854b2cf414039ae91",
  measurementId: "G-WMMP9WYZM5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app); 