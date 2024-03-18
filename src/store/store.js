import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import { rootReducer } from "./root-reducer";

//redux-persist config
const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean); //run only when not in production

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
