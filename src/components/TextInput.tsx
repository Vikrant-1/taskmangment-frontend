import { useState } from "react";

interface TextInputProps {
  label?: string;
  value: string;
  placeholder: string;
  onChangeValue: (value: string) => void;
  rightImage?: string;
  leftImage?: string;
}

const TextInput = ({
  label,
  value,
  onChangeValue,
  placeholder,
  rightImage,
  leftImage,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <label
        htmlFor="input"
        className="block text-sm font-medium leading-6 text-gray-900 mb-1 mt-3"
      >
        {label}
      </label>
      <div
        className={`flex bg-white items-center border rounded-md ${
          isFocused ? "border-indigo-600" : "border-gray-300"
        } py-1.5 pl-3 pr-2`}
      >
        {leftImage && <img src={leftImage} className="w-5 h-5 mr-2" />}
        <input
          id="input"
          type={label?.toLowerCase() === "password" ? "password" : "text"}
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-grow outline-none bg-transparent text-gray-900 placeholder-gray-400 text-sm leading-6"
        />
        {rightImage && <img src={rightImage} className="w-5 h-5 mx-2" />}
      </div>
    </div>
  );
};

export default TextInput;
