import { request } from "../../services/axios";

export const contactApi = async (orderData) => {
    try {
      const response = await request({
       
        url: "/api/contact-us",
        method: "POST",
        data: orderData,
      });
      alert("jdja");
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