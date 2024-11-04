// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0-Ooexo8SHwhQwNLSvibzzHmpFHpl18",
  authDomain: "faridpurbloodnetwork-42c09.firebaseapp.com",
  projectId: "faridpurbloodnetwork-42c09",
  storageBucket: "faridpurbloodnetwork-42c09.firebasestorage.app",
  messagingSenderId: "19648344070",
  appId: "1:19648344070:web:44af0cdccba773fbf39387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth