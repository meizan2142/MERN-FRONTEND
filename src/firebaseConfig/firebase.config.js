import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDEr-DwgTEyWV-x11FgQuozsX5XDLeeSYY",
    authDomain: "mern-web-59f53.firebaseapp.com",
    projectId: "mern-web-59f53",
    storageBucket: "mern-web-59f53.firebasestorage.app",
    messagingSenderId: "50689593407",
    appId: "1:50689593407:web:bb768ccb5f725f732d688a",
    measurementId: "G-J5N7ZJ3SKY"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;