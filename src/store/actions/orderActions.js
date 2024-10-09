import { request } from "../../services/axios";

export const createOrder = async (orderData) => {
  try {
    const response = await request({
      url: "/api/create/order",
      method: "POST",
      data: orderData,
    });
    if (response.status === 200 || response.status === 201) {
      return { success: response.data.success, data: response.data.payload };
    }
    return {
      success: false,
      data: null,
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

export const fetchOrders = async () => {
  try {
    const response = await request({
      url: "/api/show/order",
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
