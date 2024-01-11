import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAkg7nH7yXQ4JRZNyyN7MKWh9e9mYEO-w",
    authDomain: "pre-entrega-rj-49910-c812a.firebaseapp.com",
    projectId: "pre-entrega-rj-49910-c812a",
    storageBucket: "pre-entrega-rj-49910-c812a.appspot.com",
    messagingSenderId: "307787735246",
    appId: "1:307787735246:web:ea53d1edd50257fc31309f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
export const auth = getAuth(app)
