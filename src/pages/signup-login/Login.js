import React, {useContext} from "react";
import TabTitle from "../../helpers/TabTitle";
import {useForm} from "react-hook-form";
import axios from "axios";
import InputFieldRegister from "../../components/inputfield/InputFieldRegister";
import Button from "../../components/button/Button";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import "./Login.css"


function Login() {
    TabTitle("Login");
    const {login} = useContext(AuthContext);
    const {handleSubmit, register, formState: {errors}} = useForm({
        mode: "onBlur"
    });

    async function onFormSubmit(data) {
        console.log(data);
        try {
            const response = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password
            })
            console.log(response.data);
            login(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <main className="signup__outer-container outer-container">
            <div className="signup__inner-container inner-container">
                <h4>login</h4>
                <p>The Calorie Calculator is a feature only available to members with an account.</p>
                <p>Please login to get access now!</p>
                <form className="signup__form" onSubmit={handleSubmit(onFormSubmit)}>
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
                            className="signup__input"
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
                            className="signup__input"
                        />
                        <Button
                            type="submit"
                            title="login"
                            className="auth__btn"
                        />

                        <p className="signup__link">Not a member yet? <Link to="/signup">Sign up here</Link></p>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}

export default Login;