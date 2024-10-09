import axios from "axios";
import ToastComp from "../components/toast/ToastComp";
import { store } from "../store/StoreConfig";

const client = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
});

client.interceptors.request.use(
  (config) => {
    const token = store.getState()?.auth?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const request = async ({ ...options }, notify = true) => {
  const onSuccess = (response) => {
    if (notify) {
      const method = options.method.toLowerCase();
      let message = "";

      if (response.status === 200 || response.status === 201) {
        switch (method) {
          case "post":
            message = response.data.message || "Added Successfully";
            break;
          case "put":
          case "patch":
            message = response.message || "Updated Successfully";
            break;
          case "delete":
            message = response.message || "Removed Successfully";
            break;
          case "get":
            // Optionally, add message for GET requests
            message = response.data.message || "Data Retrieved Successfully";
            break;
          default:
            message = "Action Completed";
        }

        ToastComp({ variant: "success", message });
      } else {
        ToastComp({
          variant: "error",
          message: response.message || "Error occurred",
        });
      }
    }
    return response;
  };

  const onError = (error) => {
    const errorMessage =
      error?.response?.data?.message ||
      error.message ||
      "Error! Please try again later";

    if (notify) {
      ToastComp({ variant: "error", message: errorMessage });
    }
    throw error;
  };

  try {
    // Different client logic if necessary
    if (options?.url?.includes("tennis")) {
      return await client1(options).then(onSuccess).catch(onError);
    }

    return await client(options).then(onSuccess).catch(onError);
  } catch (err) {
    console.error("Error in Axios request: ", err);
    throw err;
  }
};
