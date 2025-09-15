// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs6sBBdBkpSolEuVx2xy7zCIVRhvnIYT4",
  authDomain: "social-media-website-dummy.firebaseapp.com",
  projectId: "social-media-website-dummy",
  storageBucket: "social-media-website-dummy.firebasestorage.app",
  messagingSenderId: "1026956558983",
  appId: "1:1026956558983:web:07959347811153a9962e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);