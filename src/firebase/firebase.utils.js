import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhb8gqLh_SKaNBLutL9yp0Ge__-dYg8_w",
  authDomain: "argyle-db.firebaseapp.com",
  projectId: "argyle-db",
  storageBucket: "argyle-db.appspot.com",
  messagingSenderId: "110459262015",
  appId: "1:110459262015:web:aeeb73dc95e40b1462148a",
  measurementId: "G-NJ1QHLFEGK"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
