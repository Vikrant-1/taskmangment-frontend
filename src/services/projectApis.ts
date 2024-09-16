import { AxiosResponse } from "axios";
import { API_METHODS, apiClient } from "./apiClient";
import { toast } from "react-toastify";

interface CreateProjectProps {
  name: string;
  description: string;
  teams?: string[];
  toDate: number;
  fromDate: number;
}

export const createProjectApi = async (data: CreateProjectProps) => {
  try {
    const url = `${import.meta.env.VITE_BASE_URI}/project`;

    const response: AxiosResponse = await apiClient(
      url,
      API_METHODS.POST,
      data
    );
    if (response.data.success === true) {
      console.log("User registered successfully:", response.data);
      return response.data.data;
    } else {
        throw new Error(response.data.message);
        
    }
  } catch (error) {
      if (error instanceof Error) {
          toast(error.message, { type: 'success' });
      }
    console.error("ERROR WHILE CREATING PROJECT : ", error);
  }
};
