interface TextInputProps {
  label?: string;
  value: string;
  placeholder: string;
  onChangeValue: (value: string) => void;
}

const TextInput = ({
  label,
  value,
  onChangeValue,
  placeholder,
}: TextInputProps) => {
  return (
    <div>
      <label
        htmlFor="input"
        className="block text-sm font-medium leading-6 text-gray-900 mb-1 mt-3"
      >
        {label}
      </label>
      <input
        id="input"
        type={label?.toLowerCase() === "password" ? "password" : "text"}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        placeholder={placeholder}
        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default TextInput;
