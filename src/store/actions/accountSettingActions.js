import { request } from "../../services/axios";
import { updateProfileSuccess } from "../reducers/authReducers";

export const updateProfile = (data) => async (dispatch) => {
  try {
    const response = await request({
      url: "/api/update/profile",
      method: "POST",
      data,
    });
    if (response.status === 200 || response.status === 201) {
      dispatch(
        updateProfileSuccess({
          user: response.data.payload,
        })
      );
      return {
        success: response.data.success,
        data: response.data.payload,
        error: null,
      };
    }
    return {
      success: false,
      data: null,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error?.response?.data?.message ||
        error.message ||
        "Error! Please try again later",
    };
  }
};
