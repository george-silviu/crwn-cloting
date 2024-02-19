//firebase auth and firestore db setup

import { initializeApp } from "firebase/app";
import {
  getAuth,
  //   signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc-2kLO70thYhVkw7OCxFFTVV7Lck7qEg",
  authDomain: "crwn-clothing-db-65b9b.firebaseapp.com",
  projectId: "crwn-clothing-db-65b9b",
  storageBucket: "crwn-clothing-db-65b9b.appspot.com",
  messagingSenderId: "476751905364",
  appId: "1:476751905364:web:8e5a9c2b7bad1d5d0ca3c1",
};

const app = initializeApp(firebaseConfig); // initialize the firebase app with the firebase config

const provider = new GoogleAuthProvider(); // create a new GoogleAuthProvider instance

provider.setCustomParameters({ prompt: "select_account" }); // always trigger the google popup whenever we use the GoogleAuthProvider for authentication and sign in

export const auth = getAuth(app); // get the auth service from the firebase app

export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // sign in with Google popup

export const db = getFirestore(); // get the firestore db service from the firebase app

// create user document from the user auth object
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); // get the user document reference from the firestore db

  //   console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef); // get the user document snapshot from the user document reference

  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth; // get the display name and email from the user auth object

    const createdAt = new Date(); // get the current date and time

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      }); // set the user document with the display name, email, and created date
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return userDocRef; // return the user document reference
};
