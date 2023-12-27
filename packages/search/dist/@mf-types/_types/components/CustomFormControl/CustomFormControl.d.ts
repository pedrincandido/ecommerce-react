import React from "react";
interface InputProps {
    placeholder: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const CustomFormControl: React.FC<InputProps>;
export default CustomFormControl;
