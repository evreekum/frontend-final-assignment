import React, {useEffect, useState} from "react";
import "../../App.css";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";
import "./CalculatorPage.css";
import axios from "axios";
import InputFieldRegular from "../../components/inputfield/InputFieldRegular";

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

    async function fetchProductData(product) {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                mode: "onSubmit",
                params: {
                    type: "logging",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingr: product
                }
            });
            // console.log("Result:", response.data);
            const productHints = response.data.hints[0];
            setFoundProduct([...foundProduct, productHints]);

        } catch (error) {
            console.error(error);
            toggleError(true);
        }
        toggleLoading(false);
    }

    useEffect(() => {
        if (product) {
            fetchProductData(product);
        }
    }, []);

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
        onFormSubmitAmount(amount);
    }, []);

    return (
        <main className="calc__outer-container outer-container">
            <div className="calc__inner-container inner-container">

                <h4>calorie calculator</h4>
                <p className="calc__subtitle">How to use the Calorie Calculator:</p>
                <p>Fill in a product or ingredient and search.</p>
                <p>When you fill in an amount of servings it will give you </p>
                <p>the amount of calories, fat and carbohydrates the product contains.</p>
                <p>You can add multiple products to find the total of calories, fat and carbohydrates of all items
                    together.</p>

                <fieldset>
                    <legend>Calculate:</legend>
                    <div className="calc-form__wrapper">
                        <form className="calc__form" onSubmit={(e) => {
                            e.preventDefault();
                            fetchProductData(product);
                            setProduct("");
                        }}>
                            <InputFieldRegular
                                type="search"
                                name="product"
                                value={product}
                                placeholder="Product"
                                onChange={(e) => setProduct(e.target.value)}
                            />
                            <Button
                                type="submit"
                                title="search"
                                className="calc-search__btn"
                            />
                        </form>

                        {product.length === 0 && error &&
                            <p className="error-message">This field can't be empty. Please fill in an ingredient or
                                product
                                and try again.</p>}
                        {loading && <p className="loading-message">Looking for product...</p>}

                        <table className="calc__table">
                            <thead>
                            <tr>
                                <th className="calc__label">product</th>
                                <th>quantity</th>
                                <th>label</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Object.keys(foundProduct).length > 0 && foundProduct.map((product) => (
                                <tr key={product.food.foodId}>
                                    <td className="calc__label">{product.food.label}</td>
                                    <td>{Math.round(product.measures[1].weight)}</td>
                                    <td>gram</td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>

                        <form className="calc__form" onSubmit={(e) => {
                            e.preventDefault();
                            onFormSubmitAmount(amount);
                            setAmount("");
                        }}>
                            <label htmlFor="amount__field">Amount</label>
                            <InputFieldRegular
                                type="number"
                                name="amount"
                                value={amount}
                                placeholder="0"
                                onChange={(e) => setAmount(e.target.value)}
                                min="1"
                            />
                            <label htmlFor="add__btn">Servings</label>
                            <Button
                                type="submit"
                                title="add"
                                className="calc-amount__btn"
                            />
                        </form>

                        <table className="calc__table">
                            <thead>
                            <tr>
                                <th className="calc__label">product</th>
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
                                            <td className="calc__label">{amount.food.label}</td>
                                            <td>{array[1]}</td>
                                            <td>{Math.round(amount.food.nutrients.ENERC_KCAL) * array[1]} kCal</td>
                                            <td>{(amount.food.nutrients.FAT).toFixed(2) * array[1]} g</td>
                                            <td>{(amount.food.nutrients.CHOCDF).toFixed(1) * array[1]} g</td>
                                        </tr>
                                    )
                                })
                            })}
                            {Object.keys(calculator).length > 0 &&
                                <tr className="calc-amount__total">
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td>{Math.round(calories)} kCal</td>
                                    <td>{(fat).toFixed(1)} g</td>
                                    <td>{(carbs).toFixed(1)} g</td>
                                </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                </fieldset>
            </div>
        </main>
    )
}
export default CalculatorPage;