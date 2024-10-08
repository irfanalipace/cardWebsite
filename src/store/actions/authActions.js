import { request } from "../../services/axios";
import {
  loginSuccess,
  registerSuccess,
  otpVerifySuccess,
  logoutSuccess,
  forgotPasswordSuccess,
  resendOtpSuccess,
} from "../reducers/authReducers";

export const login = (data) => async (dispatch) => {
  try {
    const response = await request({
      method: "post",
      url: "api/login",
      data,
    });

    if (response.status === 200 || response.status === 201) {
      dispatch(
        loginSuccess({
          token: response.data.payload.token,
          user: response.data.payload.user,
        })
      );
      return true;
    }

    return false;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await request({
      method: "post",
      url: "api/register",
      data: userData,
      notify: true,
    });
    if (response.status === 200 || response.status === 201) {
      dispatch(registerSuccess({ user: response.data.payload }));
      return true;
    }

    return false;
  } catch (error) {
    console.error("Registration error:", error);
    return false;
  }
};

export const verifyOtp = (data) => async (dispatch) => {
  try {
    const response = await request({
      method: "post",
      url: "api/verifyOtp",
      data,
    });
    if (response.status === 200 || response.status === 201) {
      dispatch(otpVerifySuccess({ token: response.data.payload.token }));
      return true;
    }

    return false;
  } catch (error) {
    console.error("OTP verification error:", error);
    return false;
  }
};

export const resendOtp = (email) => async (dispatch) => {
  try {
    const response = await request({
      method: "post",
      url: "api/resendOtp",
      data: { email },
    });

    if (response.status === 200 || response.status === 201) {
      dispatch(resendOtpSuccess());
      return true;
    }

    return false;
  } catch (error) {
    console.error("Resend OTP error:", error);
    return false;
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    const response = await request({
      method: "post",
      url: "api/resendOtp", // Replace with your actual forgot password endpoint
      data: { email },
    });
    if (response.status === 200 || response.status === 201) {
      dispatch(forgotPasswordSuccess());
      return true;
    }

    return false;
  } catch (error) {
    console.error("Forgot password error:", error);
    return false;
  }
};

export const logout = (token) => async (dispatch) => {
  try {
    const response = await request({
      method: "get",
      url: "api/logout",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200 || response.status === 201) {
      dispatch(logoutSuccess());
      return true;
    }
    return false;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
};
