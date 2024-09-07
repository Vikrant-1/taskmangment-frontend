import { AxiosResponse } from "axios";
import { apiClient, API_METHODS } from "./apiClient";

interface RegisterUserProps {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}

export const RegisterUser = async (data: RegisterUserProps) => {
  const url = `${import.meta.env.VITE_BASE_URI}/user/signup`;
  try {
    const response:AxiosResponse = await apiClient(url, API_METHODS.POST, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.data.success === true) {
      console.log("User registered successfully:", response.data);
      return response.data.data;
    }
  } catch (error) {
    console.error("Failed to register user:", error);
  }
};

export const LoginUser = async (data: {
  username: string;
  password: string;
}) => {
  const url = `${import.meta.env.VITE_BASE_URI}/user/login`;

  try {
    const response:AxiosResponse = await apiClient(url, API_METHODS.POST, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response,'response');
    
    if (response.data.success === true) {
      console.log("User logged in successfully:", response.data);
      return response.data.data;
    }
  } catch (error) {
    console.error("Failed to login user:", error);
  }
};