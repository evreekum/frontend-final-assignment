import React from "react";
import "./InputFieldUseForm.css";

function InputFieldRegular({type, name, value, placeholder, onChange, onError, className}) {

    return (
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
            />
    )
}

export default InputFieldRegular;