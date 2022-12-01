import React from "react";
import "./InputFieldUseForm.css";

function InputFieldRegular({type, name, value, placeholder, onChange, ref}) {

    return (
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}

            />
    )
}

export default InputFieldRegular;