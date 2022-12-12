import React, {useContext, useState} from "react";
import TabTitle from "../../helpers/TabTitle";
import {useForm} from "react-hook-form";
import axios from "axios";
import InputFieldRegister from "../../components/inputfield/InputFieldRegister";
import Button from "../../components/button/Button";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import "./SignUp-Login.css";

function LoginPage() {
    TabTitle("Login");
    const {login} = useContext(AuthContext);
    const {handleSubmit, register, formState: {errors}} = useForm({
        mode: "onBlur"
    });
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function onFormSubmit(data) {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password
            });
            login(response.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <main className="signup-login__outer-container outer-container">
            <div className="signup-login__inner-container inner-container">
                <h4>login</h4>
                <p>The Calorie Calculator is a feature only available to members with an account.</p>
                <p>Please login to get access now!</p>

                {loading && <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}

                <form className="signup-login__form" onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <legend>Personal details:</legend>
                        <InputFieldRegister
                            label="Type in your username:"
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
                            label="Type in your password:"
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

                        {error && <span><p className="error-message">The username or password is incorrect. <br/>Please try again <br/>or sign up by following the link below.</p></span>}

                        <Button
                            type="submit"
                            title="login"
                            className="auth__btn"
                        />
                        <p className="signup__link">Not a member yet? <Link id="signup__link-link" to="/signup">Sign up here</Link></p>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}
export default LoginPage;