import axios from "axios";
import { BASE_URI } from "../env";

interface RegisterUserProps {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}

export const RegisterUser = async ({
  username,
  firstname,
  lastname,
  password,
}: RegisterUserProps) => {
  try {
    const data = {
      username,
      firstname,
      lastname,
      password,
    };
    const url = `${BASE_URI()}/user/signup`;
    await axios.post(url, data);
  } catch (error) {
    console.log("ERROR IN REGISTER USER API : ", error);
  }
};
