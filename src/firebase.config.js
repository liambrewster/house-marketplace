// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlPmdTw8DrSHAWEf9RN-qs4n8Ls7jTt8I",
  authDomain: "house-marketplace-app-299ba.firebaseapp.com",
  projectId: "house-marketplace-app-299ba",
  storageBucket: "house-marketplace-app-299ba.appspot.com",
  messagingSenderId: "149511140383",
  appId: "1:149511140383:web:5072515a73c1f3749b512a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()