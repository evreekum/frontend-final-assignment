import React from "react";
import "./InputFieldUseForm.css";
import {useForm} from "react-hook-form";

function InputFieldUseForm({name, validationObject, type, placeholder, ref, errors}) {
    const {register} = useForm();

    return (
        <label htmlFor={`${name}__field`}>
            <input
                key={`${name}__key`}
                name={name}
                id={`${name}__field`}
                {...register(`${name}`, validationObject)}
                type={type}
                placeholder={placeholder}
                ref={(e) => {ref(e) `${ref}`.current = e }}
            />
            {errors[name] && <p className="error-message">{errors[name].message}</p> }
        </label>
    )
}

export default InputFieldUseForm;