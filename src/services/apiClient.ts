import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

enum API_METHODS {
  POST = "post",
  GET = "get",
  PUT = "put",
  DELETE = "delete",
}

const apiClient = async <T>(
  url: string,
  method: API_METHODS,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        ...config?.headers,
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request made but no response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export { apiClient, API_METHODS };
