import React from "react";
import "../../App.css";
import {useForm} from "react-hook-form";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";



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
                <form className="calculator-product__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <InputField
                        title="calculator-product"
                        type="text"
                        placeholder="Product"
                    />
                    <Button
                        type="submit"
                        title="calculator-product"
                    />
                </form>

                <form className="calculator-amount__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <InputField
                    title="calculator-amount"
                    type="text"
                    placeholder="Amount"
                    />

                </form>
            </div>

        </main>
    )
}

export default CalculatorPage;