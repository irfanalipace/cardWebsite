import { createAction, createReducer } from "@reduxjs/toolkit";

export const initialState = {
  isAuthenticated: false,
  token: null,
  forgetPasswordVerificationToken: null,
  user: null,
};

export const loginSuccess = createAction("LOGIN_SUCCESS");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const otpVerifySuccess = createAction("OTP_VERIFY_SUCCESS");
export const logoutSuccess = createAction("LOGOUT_SUCCESS");
export const forgotPasswordSuccess = createAction("FORGOT_PASSWORD_SUCCESS");
export const changePasswordSuccess = createAction("CHANGE_PASSWORD_SUCCESS");
export const updateProfileSuccess = createAction("UPDATE_PROFILE_SUCCESS");

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginSuccess, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };
    })
    .addCase(registerSuccess, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
      };
    })
    .addCase(otpVerifySuccess, (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    })
    .addCase(logoutSuccess, (state) => {
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        forgetPasswordVerificationToken: null,
        user: null,
      };
    })
    .addCase(forgotPasswordSuccess, (state, action) => {
      return {
        ...state,
        forgetPasswordVerificationToken:
          action.payload.forgetPasswordVerificationToken,
      };
    })
    .addCase(changePasswordSuccess, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };
    })
    .addCase(updateProfileSuccess, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
      };
    });
});

export default authReducer;
