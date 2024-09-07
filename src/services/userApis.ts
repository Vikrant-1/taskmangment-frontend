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
    const response = await apiClient(url, API_METHODS.POST, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("User registered successfully:", response.data);
  } catch (error) {
    console.error("Failed to register user:", error);
  }
};
