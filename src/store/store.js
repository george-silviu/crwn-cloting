/**
 * Redux toolkit includes redux-thunk by default, so you don't need to install it separately.
 */

//import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import localStorage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// //redux-persist config
// const persistConfig = {
//   key: "root",
//   storage: localStorage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  //middleware: middleWares,
});

// export const persistor = persistStore(store);
