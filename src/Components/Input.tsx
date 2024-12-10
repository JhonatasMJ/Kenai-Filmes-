import React from "react";
import { InputProps } from "../Types/Types";

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-white" htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`block px-3 py-2 border rounded-md bg-input border-none 
          ${error ? "border-red-500 text-red-500 " : " text-white "}`}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
