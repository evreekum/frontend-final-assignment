import React from "react";
import "./InputField.css";


function InputField({name, register, validationObject, type, placeholder, value, onChange, errors, style}) {



    return (
        <label htmlFor={`${name}__field`}>
            <input
                name={name}
                id={`${name}__field`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={style}

            />
            {/*{...register(name, validationObject)}*/}
            {/*{errors[name] && <p className="error-message">{errors[name].message}</p> }*/}
        </label>

    )
}

export default InputField;