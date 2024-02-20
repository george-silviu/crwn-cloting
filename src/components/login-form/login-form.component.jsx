import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import "./login-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup(); // sign in with Google popup
    createUserDocumentFromAuth(user); // create user document from the user auth object
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // prevent the default form submission

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      ); // sign in user with email and password

      setCurrentUser(user); // set the current user context with the response

      setFormFields(defaultFormFields); // reset the form fields
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid credentials. Please try again.");
      } else {
        console.log("Error signing in", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // destructure the name and value from the event target

    setFormFields({ ...formFields, [name]: value }); // set the form fields with the name and value
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Login</span>
      <form onSubmit={handleLogin}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">LOGIN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google LOGIN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
