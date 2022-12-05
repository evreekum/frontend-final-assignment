import React from "react";
import "./InputFieldUseForm.css";

// import {useForm} from "react-hook-form";

function InputFieldUseForm({name, type, placeholder, value, onChange}) {
    // const {register} = useForm();

    return (
        <label htmlFor={`${name}__field`}>
            <input
                key={`${name}__key`}
                name={name}
                id={`${name}__field`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

        </label>
    )
}

/*{...register(`${name}`, validationObject)}
{errors[name] && <p className="error-message">{errors[name].message}</p> }*/
export default InputFieldUseForm;