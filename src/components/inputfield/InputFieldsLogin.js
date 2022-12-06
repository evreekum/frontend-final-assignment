import React from "react";
import "../../pages/signup-login/SignUp.css";
import InputFieldRegister from "./InputFieldRegister";
import {useForm} from "react-hook-form";


function InputFieldsLogin() {
    const {register, formState: {errors}} = useForm({
        mode: "onBlur"
    });

    return (
        <>
            <InputFieldRegister
                label="Choose a username:"
                register={register}
                name="username"
                validationObject={{
                    required: "Username can't be empty",
                    minLength: {
                        value: 6,
                        message: "Username needs to have at least 6 characters",
                    }
                }}
                type="username"
                placeholder="Username"
                errors={errors}
                className="signup__input"
            />
            <InputFieldRegister
                label="Choose a password:"
                register={register}
                name="password"
                validationObject={{
                    required: "Password can't be empty",
                    minLength: {
                        value: 8,
                        message: "Password needs to have at least 8 characters",
                    }
                }}
                type="text"
                placeholder="Password"
                errors={errors}
                className="signup__input"
            />
        </>
    )
}

export default InputFieldsLogin;