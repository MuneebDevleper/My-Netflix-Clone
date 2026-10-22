


import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOaHpIZAbzelhuZYbMG56hl24RykO0uGo",
  authDomain: "netflix-clon-d41b6.firebaseapp.com",
  projectId: "netflix-clon-d41b6",
  storageBucket: "netflix-clon-d41b6.firebasestorage.app",
  messagingSenderId: "105425052586",
  appId: "1:105425052586:web:d7893ad1dbf964393681d3",
  measurementId: "G-KGVR56ZD4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Signup
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ); const user = res.user;
    await updateProfile(user, {
      displayName: name
    });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      email: email,
      authProvider: "local"
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Signin
const signin = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return res.user;

  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Logout
const logout = async () => {
    
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    throw error;  
  }
};

export { auth, db, signup, signin, logout };
