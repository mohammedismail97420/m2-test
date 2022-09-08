import { combineReducers, configureStore } from "@reduxjs/toolkit";
import overlayReducer from "./slices/overlaysSlice";
import configReducer from "./slices/configSlice";

const reducer = combineReducers({
  overlayReducer,
  configReducer
});

const store = configureStore({ reducer });

export default store;
