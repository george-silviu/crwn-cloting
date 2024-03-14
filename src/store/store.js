import { compose, createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//custom logger middleware
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action); //called syncronously

  console.log("nextState: ", store.getState());
};

const middleWares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
