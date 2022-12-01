import React, {useEffect, useState} from "react";
import "../../App.css";
import {useForm} from "react-hook-form";
import InputFieldUseForm from "../../components/inputfield/InputFieldUseForm";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";
import "./CalculatorPage.css";
import axios from "axios";
import InputFieldRegular from "../../components/inputfield/InputFieldRegular";
import {logDOM} from "@testing-library/react";


const apiKeyCalc = process.env.REACT_APP_API_KEY_CALCULATOR;
const apiIdCalc = process.env.REACT_APP_API_ID_CALCULATOR;

function CalculatorPage() {
    TabTitle("Calorie Calculator");

    const [product, setProduct] = useState("");
    const [amount, setAmount] = useState("");
    const [foundProduct, setFoundProduct] = useState([]);
    const [calculator, setCalculator] = useState([]);
    const [calories, setCalories] = useState(0);
    const [fat, setFat] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const onFormSubmitProduct = function (e) {
            e.preventDefault();

        async function fetchProductData(product) {

            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                    params: {
                        app_id: apiIdCalc,
                        app_key: apiKeyCalc,
                        ingr: product
                    }
                })
                console.log("Result:", response.data);
                const productHints = response.data.hints[0];
                console.log("Hints:", response.data.hints[0], productHints);
                console.log("Parsed:", response.data.parsed[0]);
                setFoundProduct([...foundProduct, productHints]);

            } catch (error) {
                console.error(error);
                toggleError(true);
            }
            toggleLoading(false);

        }

        fetchProductData();
    }

    useEffect(() => {
        console.log("Product useEffect:",);
        if (product) {
            onFormSubmitProduct();
            setProduct("");
        }

    }, [product]);


    function onFormSubmitAmount(amount) {

        setCalculator([...calculator, [foundProduct, amount]]);


        let newCalories = 0;
        Object.values(foundProduct).map((calculate) => newCalories += calculate.food.nutrients.ENERC_KCAL * amount);
        setCalories(calories => calories + newCalories);

        let newFat = 0;
        Object.values(foundProduct).map((calculate) => newFat += calculate.food.nutrients.FAT * amount);
        setFat(fat => fat + newFat);

        let newCarbs = 0;
        Object.values(foundProduct).map((calculate) => newCarbs += calculate.food.nutrients.CHOCDF * amount);
        setCarbs(carbs => carbs + newCarbs);

        setFoundProduct([]);
    }

    useEffect(() => {
        console.log("Amount useEffect:");
        onFormSubmitAmount(amount);
    }, [amount]);

    return (
        <main className="outer-container">
            <div className="calc__inner-container inner-container">
                <h4>calorie calculator</h4>

                <form className="calc-product__form" onSubmit={onFormSubmitProduct}>
                    <InputFieldRegular
                        type="search"
                        name="product"
                        value={product}
                        placeholder="Product"
                        onChange={(e) => setProduct(e.target.value)}
                        className={error === true ? "product__error-message" : "default"}
                    />
                    <Button
                        type="submit"
                        title="search"
                        className="calc-search__btn"
                    />
                </form>

                {error &&
                    <p className="error-message">This field can't be empty. Please fill in an ingredient or product
                        and try again.</p>}
                {loading && <p className="loading-message">Loading product information.</p>}

                <table>
                    <thead>
                    <tr>
                        <th>product</th>
                        <th>quantity</th>
                        <th>label</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(foundProduct).length > 0 && foundProduct.map((product) => (
                        <tr key={product.food.foodId}>
                            <td>{product.food.label}</td>
                            <td>{Math.round(product.measures[0].weight)}</td>
                            <td>Gram</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmitAmount(amount);
                    setAmount("");
                }}>
                    <label htmlFor="amount__field">Amount</label>
                    <InputFieldRegular
                        type="text"
                        name="amount"
                        value={amount}
                        placeholder="Amount"
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <label htmlFor="add__btn">Serving(s)</label>
                    <Button
                        type="submit"
                        title="add"
                        className="calc-amount__btn"
                    />
                </form>

                <table>
                    <thead>
                    <tr>
                        <th>product</th>
                        <th>servings</th>
                        <th>calories</th>
                        <th>fat</th>
                        <th>carbs</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(calculator).length > 0 && calculator.map((array) => {
                        return array[0].map((amount) => {
                            return (
                                <tr key={amount.food.nutrients.ENERC_KCAL}>
                                    <td>{amount.food.label}</td>
                                    <td>{array[1]}</td>
                                    <td>{Math.round(amount.food.nutrients.ENERC_KCAL) * array[1]} kCal</td>
                                    <td>{(amount.food.nutrients.FAT).toFixed(2) * array[1]} g</td>
                                    <td>{(amount.food.nutrients.CHOCDF).toFixed(1) * array[1]} g</td>
                                </tr>
                            )
                        })
                    })}
                    {Object.keys(calculator).length > 0 &&

                        <tr key="total-calc">
                            <td><strong>Total</strong></td>
                            <td></td>
                            <td>{Math.round(calories)} kCal</td>
                            <td>{(fat).toFixed(1)} g</td>
                            <td>{(carbs).toFixed(1)} g</td>
                        </tr>
                    }
                    </tbody>
                </table>

            </div>

        </main>
    )
}

export default CalculatorPage;