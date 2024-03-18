import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase.utils";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "../src/store/user/user.action";

function App() {
  const dispatch = useDispatch();

  //listen for changes in the user's sign-in state : implementation of Observer Pattern
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user); // create user document from the user auth object
      }
      dispatch(setCurrentUser(user));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
