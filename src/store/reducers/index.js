import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import cartReducer from "./cartRedcuers";
import testReducer from "./testReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  test: testReducer,
});

export default rootReducer;
