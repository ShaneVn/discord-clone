import firebase from 'firebase/compat/app'
// import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCk3Jep7m0nWBF5-iAuCmXFgX9Lgx6LBPE",
  authDomain: "discord-clone-768d4.firebaseapp.com",
  projectId: "discord-clone-768d4",
  storageBucket: "discord-clone-768d4.appspot.com",
  messagingSenderId: "89139412998",
  appId: "1:89139412998:web:243eb102fe14c096a1c387",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db }