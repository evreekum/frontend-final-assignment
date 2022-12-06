import React from "react";
import "./InputField.css";

function InputFieldRegister({label, register, name, validationObject, type, placeholder, errors, className}) {

    return (
        <label className={`${name}__label`} htmlFor={`${name}__field`}>{label}
            <input
                {...register(`${name}`, validationObject)}
                id={`${name}__field`}
                type={type}
                placeholder={placeholder}
                className={className}
            />
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </label>
    )
}

export default InputFieldRegister;