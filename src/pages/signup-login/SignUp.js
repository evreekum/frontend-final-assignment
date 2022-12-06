import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";
import InputFieldRegister from "../../components/inputfield/InputFieldRegister";
import "./SignUp.css";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";

function SignUp() {
    TabTitle("Sign Up");
    const history = useHistory();
    const {handleSubmit, register, formState: {errors}} = useForm({
        mode: "onBlur"
    });

    async function onFormSubmit(data) {
        console.log(data);
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: data.username,
                password: data.password,
                email: data.email
            })
            console.log(response);
            history.push("/login");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <main className="signup__outer-container outer-container">
            <div className="signup__inner-container inner-container">
                <h4>Sign Up</h4>
                <p>The Calorie Calculator is a feature only available to members with an account.</p>
                <p>Please sign up and login to get access now!</p>

                <form className="signup__form" onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <legend>Personal details:</legend>
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
                        <InputFieldRegister
                            label="Your e-mail address:"
                            register={register}
                            name="email"
                            validationObject={{
                                required: "E-mail can't be empty",
                                pattern: {
                                    value: /@\w+/g,
                                    message: "E-mail must include @",
                                }
                            }}
                            type="email"
                            placeholder="E-mail"
                            errors={errors}
                            className="signup__input"
                        />
                        <Button
                            type="submit"
                            title="sign up"
                            className="auth__btn"
                        />
                    </fieldset>
                </form>
            </div>
        </main>
    )
}

export default SignUp;