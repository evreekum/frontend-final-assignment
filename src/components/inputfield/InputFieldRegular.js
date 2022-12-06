import React from "react";
import "./InputField.css";

function InputFieldRegular({type, name, value, placeholder, onChange}) {

    return (
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                id={`${name}__field`}
            />
    )
}

export default InputFieldRegular;