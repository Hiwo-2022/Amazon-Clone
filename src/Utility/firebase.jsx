import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCArnYOciLdg1L5p2v0kaBVFNNqPKpPiX0",
  authDomain: "clone-e82a7.firebaseapp.com",
  projectId: "clone-e82a7",
  storageBucket: "clone-e82a7.firebasestorage.app",
  messagingSenderId: "154529176706",
  appId: "1:154529176706:web:2b4211b61d4882272f289b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);