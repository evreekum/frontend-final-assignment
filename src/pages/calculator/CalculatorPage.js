import React, {useState} from "react";
import "../../App.css";
import {useForm} from "react-hook-form";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";
import "./CalculatorPage.css";
import axios from "axios";

const apiKeyCalc = process.env.REACT_APP_API_KEY_CALCULATOR;
const apiIdCalc = process.env.REACT_APP_API_ID_CALCULATOR;

function CalculatorPage() {
    TabTitle("Calorie Calculator");
    const {handleSubmit, formState: {errors}, register} = useForm();
    const [product, setProduct] = useState("");
    const [error, toggleError] = useState(false);

    async function onFormSubmitCalc(product) {
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    type: "public",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingr: product
                }
            })
            setProduct(response.data.text);
            console.log(response, product);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }

    }


    return (
        <main className="outer-container">
            <div className="inner-container">
                <h4>calorie calculator</h4>
                <form className="calc-product__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <InputField
                        name="product"
                        register={register}
                        validationObject={{required: "This field can't be empty. Please fill in an ingredient or product and try again."}}
                        type="text"
                        placeholder="Product"
                        errors={errors}
                    />
                    <Button
                        type="submit"
                        title="search"
                        className="calc-search__btn"
                    />
                </form>

                <form className="calc-amount__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <InputField
                    name="amount"
                    register={register}
                    validationObject={{required: "Type in a quantity."}}
                    type="text"
                    placeholder="Amount"
                    errors={errors}
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