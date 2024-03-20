/**
 * Redux toolkit includes redux-thunk, non serializable middleware, and Immer
 */

//import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// //redux-persist config
const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action typess
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(middleWares),
});

export const persistor = persistStore(store);
