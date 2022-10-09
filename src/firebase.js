import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAETC6DV6bZb6AS0l55iSFW4Kb-Np_0574",
  authDomain: "clon-dee88.firebaseapp.com",
  projectId: "clon-dee88",
  storageBucket: "clon-dee88.appspot.com",
  messagingSenderId: "327897270722",
  appId: "1:327897270722:web:cb3d71fb587a615ee1ae5b",
  measurementId: "G-DQF1TFGEKZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);