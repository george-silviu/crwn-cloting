// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(() => {
  //   // get the redirect result from the Google sign in
  //   const handleRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);

  //     // console.log(response.user);

  //     if (response) {
  //       createUserDocumentFromAuth(response.user); // create user document from the user auth object
  //     }
  //   };

  //   handleRedirectResult();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); // sign in with Google popup

    createUserDocumentFromAuth(user); // create user document from the user auth object
  };

  return (
    <div>
      <h1>Sign in page</h1>

      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
