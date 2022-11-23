import React, {useContext, useState} from "react";
import axios from "axios";
import TabTitle from "../../helpers/TabTitle";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";


const apiKeyCalc = process.env.REACT_APP_API_KEY_CALCULATOR;
const apiIdCalc = process.env.REACT_APP_API_ID_CALCULATOR;

function CalculatorPageTwo() {
    TabTitle("Calorie Calculator");
    const {handleSubmit, formState: {errors}, register} = useForm({
            mode: "onSubmit",
            defaultValues: {
                product: "",
                amount: null
            }
        }
    )
    const [product, setProduct] = useState([]);
    const [amount, setAmount] = useState(null);
    const [totalProducts, setTotalProducts] = useState([]);
    const [calories, setCalories] = useState([]);
    const [fat, setFat] = useState([]);
    const [carbs, setCarbs] = useState([]);

    async function onFormSubmitCalc(data) {
        console.log(data);
        const ingredient = data.product;
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    type: "logging",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingr: ingredient
                }
            })
            console.log("ingr:", ingredient);
            setProduct(response.data.hints[0]);
            setAmount(response.data);
            console.log("Amount:", amount);
            console.log("Hints:", response.data.hints);
            console.log("Parsed:", response.data.parsed[0]);
        } catch (error) {
            console.error(error);
            // toggleError(true);
        }
    }

    // const onFormSubmitAmount = (data) => {
    //
    //     setTotalProducts([...totalProducts, [product, amount]]);
    //
    //         let newCalories = 0;
    //         Object.values(data).map((calculate) => newCalories += calculate.nutrients.ENERC_KCAL * amount);
    //         setTotalProducts(calories => calories + newCalories);
    //
    // }


    async function onFormSubmitAmount() {

        try {
            const response = await axios.post(`https://api.edamam.com/api/food-database/v2/nutrients`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",

                },
                params: {
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingredients: [{
                        quantity: `${amount}`,
                        measureURI: `${productURI}`,
                        foodId: `${productId}`


                    }

                    ]

                }
            })
        } catch (error) {
            console.error(error);
        }

    }



return (
    <main className="outer-container">
        <div className="inner-container">
            <h4>calorie calculator</h4>

            <form className="calc-product__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                <input
                    type="text"
                    {...register("product", {
                        required: "This field can't be empty. Please fill in an ingredient or product and try again.",
                    })}
                    placeholder="Product"
                />
                <Button
                    type="submit"
                    title="search"
                    className="calc-search__btn"
                />
                {errors.product && <p className="error-message">{errors.product.message}</p>}
            </form>

            <table>
                <thead>
                <tr>
                    <th>product</th>
                    <th>quantity</th>
                    <th>label</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(product).length > 0 &&
                    <tr>
                        <td>{product.food.label}</td>
                        <td>{Math.round(product.measures[1].weight)} g</td>
                        <td>{product.measures[1].label}</td>
                    </tr>
                }
                </tbody>
            </table>

            <form onSubmit={handleSubmit(onFormSubmitAmount)}>
                <label htmlFor="amount-input">Amount</label>
                <input
                    id="amount-input"
                    type="text"
                    {...register("amount")}
                />
                <label htmlFor="add__btn">Serving(s)</label>
                <Button
                    type="submit"
                    title="add"
                    className="calc-amount__btn"
                />
                {errors.amount && <p className="error-message">{errors.amount.message}</p>}
            </form>

            <table>
                <thead>
                <tr>
                    <th>product</th>
                    <th>calories</th>
                    <th>fat</th>
                    <th>carbs</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(totalProducts).length > 0 &&
                    <tr>
                        <td>{product.food.label}</td>
                        <td>{calories}</td>
                        <td></td>
                    </tr>
                }
                </tbody>
            </table>

        </div>

    </main>
)
}

export default CalculatorPageTwo;