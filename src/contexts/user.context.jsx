/**DEPRECATED
 *
 * This file is deprecated and replaced by redux in src\store\user
 */

// import { createContext, useEffect, useReducer } from "react";

// import {
//   createUserDocumentFromAuth,
//   onAuthStateChangedListener,
// } from "../utils/firebase.utils";

// import { createAction } from "../utils/reducer/reducer.utils";

// //the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw new Error(`Unhandled action type: ${type} in userReducer!`);
//   }
// };

// export const UserProvider = ({ children }) => {
//   const [state, dispach] = useReducer(userReducer, INITIAL_STATE);

//   const { currentUser } = state;

//   const setCurrentUser = (user) => {
//     dispach(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };

//   const value = { currentUser, setCurrentUser };

//   //listen for changes in the user's sign-in state : implementation of Observer Pattern
//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user); // create user document from the user auth object
//       }
//       setCurrentUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
