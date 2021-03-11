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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
    // userRef will store the value of the document reference
  const userRef = firestore.doc(`users/${userAuth.uid}`);

    // then we use the stored value of userRef to access the .get() method 
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
