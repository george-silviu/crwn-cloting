//firebase auth and firestore db setup

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, //used to listen for changes in the user's sign-in state
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc-2kLO70thYhVkw7OCxFFTVV7Lck7qEg",
  authDomain: "crwn-clothing-db-65b9b.firebaseapp.com",
  projectId: "crwn-clothing-db-65b9b",
  storageBucket: "crwn-clothing-db-65b9b.appspot.com",
  messagingSenderId: "476751905364",
  appId: "1:476751905364:web:8e5a9c2b7bad1d5d0ca3c1",
};

const firebaseApp = initializeApp(firebaseConfig); // initialize the firebase app with the firebase config

const googleProvider = new GoogleAuthProvider(); // create a new GoogleAuthProvider instance

googleProvider.setCustomParameters({ prompt: "select_account" }); // always trigger the google popup whenever we use the GoogleAuthProvider for authentication and sign in

export const auth = getAuth(firebaseApp); // get the auth service from the firebase app

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider); // sign in with Google popup

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider); // sign in with Google redirect

export const db = getFirestore(); // get the firestore db service from the firebase app

//upload shop data to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//get data from firestore
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// create user document from the user auth object
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return; // if the user auth object does not exist, return
  const userDocRef = doc(db, "users", userAuth.uid); // get the user document reference from the firestore db
  const userSnapshot = await getDoc(userDocRef); // get the user document snapshot from the user document reference
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth; // get the display name and email from the user auth object
    const createdAt = new Date(); // get the current date and time
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      }); // set the user document with the display name, email, and created date
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return userDocRef; // return the user document reference
};

export const createUserWithEmailAndPasswordFromAuth = async (
  email,
  password
) => {
  if (!email || !password) return; // if the email or password does not exist, return
  return await createUserWithEmailAndPassword(auth, email, password); // create user with email and password
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; // if the email or password does not exist, return
  return await signInWithEmailAndPassword(auth, email, password); // create user with email and password
};

export const logoutUser = async () => {
  return await signOut(auth); // sign out user
};

// listen for changes in the user's sign-in state
export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  return onAuthStateChanged(auth, callback);
};
