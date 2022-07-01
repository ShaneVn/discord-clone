import firebase from 'firebase/compat/app'
// import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtXXYTJp6O2rdGcfoAnLgm6AyVoYs5MMA",
  authDomain: "discord-clone-36e39.firebaseapp.com",
  projectId: "discord-clone-36e39",
  storageBucket: "discord-clone-36e39.appspot.com",
  messagingSenderId: "325773180643",
  appId: "1:325773180643:web:ad81509a045b46ffcc0fd6",
  measurementId: "G-YZ5V1BHP5K"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db, app }