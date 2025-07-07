// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMMMJ2giux_glFqfRtKIn0N9jooZAFkXs",
  authDomain: "easy-gurur.firebaseapp.com",
  projectId: "easy-gurur",
  storageBucket: "easy-gurur.firebasestorage.app",
  messagingSenderId: "423820023282",
  appId: "1:423820023282:web:72033c2a518cf56d81476b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);