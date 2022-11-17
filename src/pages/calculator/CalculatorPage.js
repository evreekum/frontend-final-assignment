import React from "react";
import "../../App.css";
import {useForm} from "react-hook-form";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";
import "./CalculatorPage.css";


function CalculatorPage() {
    TabTitle("Calorie Calculator");
    const {handleSubmit} = useForm();

    function onFormSubmitCalc(data) {
        console.log(data);
    }


    return (
        <main className="outer-container">
            <div className="inner-container">
                <h4>calorie calculator</h4>
                <form className="calc-product__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <InputField
                        name="calc-product"
                        type="text"
                        placeholder="&#xf002; Product"
                        style="font-family: 'Font Awesome 5 Free'; font-weight: 700;"
                    />
                    <Button
                        type="submit"
                        title="search"
                        className="calc-search__btn"
                    />
                </form>

                <form className="calc-amount__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <InputField
                    name="calc-amount"
                    type="text"
                    placeholder="Amount"
                    />
                    <Button
                    type="submit"
                    title="add"
                    className="calc-amount__btn"
                    />
                </form>
            </div>

        </main>
    )
}

export default CalculatorPage;