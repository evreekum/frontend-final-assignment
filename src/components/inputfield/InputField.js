import React from "react";
import {useForm} from "react-hook-form";
import "./InputField.css";


function InputField({title, type, placeholder, onChange, value}) {

    const {register} = useForm();

    return (
        <label htmlFor={`${title}__field`}>
            <input
                {...register(`${title}`)}
                id={`${title}__field`}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </label>

    )
}

export default InputField;