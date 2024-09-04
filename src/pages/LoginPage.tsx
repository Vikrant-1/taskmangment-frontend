import { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {};

  return (
    <div className="flex justify-center  w-full h-screen place-items-center">
      <div className="w-fit h-fit py-12 px-12 rounded-md bg-white shadow-lg hover:shadow-md ">
        <h2 className="text-indigo-600 text-center mb-4 text-lg font-medium">
          Register Your Account
        </h2>
        <TextInput
          value={firstname}
          onChangeValue={setFirstname}
          label="First Name"
          placeholder={"Enter your firstname ..."}
        />
        <TextInput
          value={lastname}
          onChangeValue={setLastname}
          label="Last Name"
          placeholder="Enter your lastname ..."
        />
        <TextInput
          value={email}
          onChangeValue={setEmail}
          label="Email"
          placeholder="example@gmail.com"
        />
        <TextInput
          value={password}
          onChangeValue={setPassword}
          label="Password"
          placeholder="Enter your password"
        />
        <div className="flex justify-center mt-5">
          <Button title="Submit" onClick={onSubmit} />
        </div>
        <div className="flex w-full place-items-center mt-3">
          <div className="w-1/2 h-px bg-gray-500"></div>
          <p className="px-2 text-gray-600 text-sm">or</p>
          <div className="w-1/2 h-px bg-gray-500"></div>
        </div>
        <div className="flex justify-end mt-2 text-sm">
          <div className="">Have a Account ?</div>
          <span
            onClick={()=>{}}
            className="pl-2 text-indigo-600 font-medium cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
