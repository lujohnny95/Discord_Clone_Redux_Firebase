import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAl4v8SzvHYWd6nmHmVwFBW34yz2zD6nFg",
    authDomain: "discord-clone-9cfea.firebaseapp.com",
    projectId: "discord-clone-9cfea",
    storageBucket: "discord-clone-9cfea.appspot.com",
    messagingSenderId: "571710955241",
    appId: "1:571710955241:web:ef2cadcaa9b0759040da78",
    measurementId: "G-64LTHQH32V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
