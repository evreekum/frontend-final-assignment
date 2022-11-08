import React from "react";
import {useForm} from "react-hook-form";
import "./InputField.css";


function InputField({title, type, placeholder}) {

    const {register} = useForm();

    return (
        <label htmlFor={`${title}-field`}>
            <input
                {...register(`${title}`)}
                id={`${title}-field`}
                type={type}
                placeholder={placeholder}
            />
        </label>
    )
}

export default InputField;