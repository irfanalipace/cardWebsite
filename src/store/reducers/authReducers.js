import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
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
export const resendOtpSuccess = createAction("RESEND_OTP_SUCCESS");

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
        token: null,
        isAuthenticated: false,
        user: null,
      };
    })
    .addCase(forgotPasswordSuccess, (state) => {
      // Handle forgot password success if needed
    })
    .addCase(resendOtpSuccess, (state, action) => {
      return {
        ...state,
      };
    });
});

export default authReducer;
