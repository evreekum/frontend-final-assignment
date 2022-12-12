import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";
import InputFieldRegister from "../../components/inputfield/InputFieldRegister";
import "./SignUp-Login.css";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";

function SignUpPage() {
    TabTitle("Sign Up");
    const history = useHistory();
    const {handleSubmit, register, formState: {errors}} = useForm({
        mode: "onBlur"
    });
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function onFormSubmit(data) {
        toggleError(false);
        toggleLoading(true);
        toggleSuccess(false);
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: data.username,
                password: data.password,
                email: data.email,
                role: [data.user]
            });
            history.push("/login");
            toggleSuccess(true);
            setSuccessMessage(response.data.message);
        } catch (error) {
            console.error(error);
            toggleError(true);
            setErrorMessage(error.response.data.message);
        }
        toggleLoading(false);
    }

    return (
        <main className="signup-login__outer-container outer-container">
            <div className="signup-login__inner-container inner-container">
                <h4>Sign Up</h4>
                <p>The Calorie Calculator is a feature only available to members with an account.</p>
                <p>Please sign up and login to get access now!</p>

                {loading && <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
                {success && <span>{successMessage &&
                    <p className="loading-message">{successMessage}! You are getting redirected to login.</p>}</span>}

                <form className="signup-login__form" onSubmit={handleSubmit(onFormSubmit)}>
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
                            className="signup-login__input"
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
                            className="signup-login__input"
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
                            className="signup-login__input"
                        />
                        {error && <span>{error &&
                            <p className="error-message">{errorMessage}. <br/>Please try again or go to login.
                            </p>}</span>}

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
export default SignUpPage;