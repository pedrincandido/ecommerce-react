import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomFormControl: React.FC<InputProps> = ({ placeholder, type, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomFormControl;
