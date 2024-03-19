import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signUpStart } from "../../store/user/user.action";

import "./register-form.styles.scss";

// default form fields
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const dispatch = useDispatch();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create userm, email already in use");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log("Error creating user ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // destructure the name and value from the event target
    setFormFields({ ...formFields, [name]: value }); // set the form fields with the name and value
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span> Register</span>
      <form onSubmit={handleRegister}>
        <FormInput
          label="Display name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
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
        <FormInput
          label="Confirm password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
