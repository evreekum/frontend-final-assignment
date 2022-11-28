import React from "react";
import "./InputField.css";
import {useForm, useFormContext} from "react-hook-form";

function InputField({name, validationObject, type, placeholder, value, onChange, errors}) {
    // const methods = useFormContext();
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

            />
            {errors[name] && <p className="error-message">{errors[name].message}</p> }
            {/*{...register(name, validationObject)}*/}
            {/*// value={value}*/}
            {/*// onChange={onChange}*/}
        </label>

    )
}

export default InputField;