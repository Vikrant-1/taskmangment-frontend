import { format } from "date-fns";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface TextInputProps {
  label?: string;
  value: any;
  placeholder: string;
  onChangeValue: (value: any) => void;
  rightImage?: string;
  leftImage?: string;
  istextArea?: boolean;
  readOnly?: boolean;
  showCalender?: boolean;
  isCalender?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const TextInput = ({
  label,
  value,
  onChangeValue,
  placeholder,
  rightImage,
  leftImage,
  istextArea,
  readOnly,
  showCalender,
  isCalender,
  minDate,
  maxDate,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full">
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
        {showCalender && (
          <Calendar
            className="absolute"
            value={new Date(value)}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(value, event) => {
              event.stopPropagation();
              onChangeValue(value);
            }}
          />
        )}
        {istextArea ? (
          <textarea
            id="input"
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={6}
            maxLength={300}
            style={{ resize: "none", overflow: "hidden" }}
            className="flex-grow outline-none bg-transparent text-gray-900 placeholder-gray-400 text-sm leading-6"
          />
        ) : (
          <input
            id="input"
            type={label?.toLowerCase() === "password" ? "password" : "text"}
            value={isCalender ? format(new Date(value), "dd MMM yyyy") : value}
            onChange={(e) => onChangeValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            readOnly={readOnly}
            placeholder={placeholder}
            className="flex-grow outline-none bg-transparent text-gray-900 placeholder-gray-400 text-sm leading-6"
          />
        )}
        {rightImage && <img src={rightImage} className="w-5 h-5 mx-2" />}
      </div>
    </div>
  );
};

export default TextInput;
