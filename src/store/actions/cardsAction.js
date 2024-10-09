import { request } from "../../services/axios";

export const fetchCards = async () => {
  try {
    const response = await request({
      url: "/api/cards",
      method: "GET",
    });
    if (response.status === 200 || response.status === 201) {
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
      data: null,
      error:
        error?.response?.data?.message ||
        error.message ||
        "Error! Please try again later",
    };
  }
};
