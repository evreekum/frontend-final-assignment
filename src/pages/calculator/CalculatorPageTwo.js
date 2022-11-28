import React, {useState} from "react";
import axios from "axios";
import TabTitle from "../../helpers/TabTitle";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import "./CalculatorPage.css";
import {useParams} from "react-router-dom";

const apiKeyCalc = process.env.REACT_APP_API_KEY_CALCULATOR;
const apiIdCalc = process.env.REACT_APP_API_ID_CALCULATOR;

function CalculatorPageTwo() {
    TabTitle("Calorie Calculator");
    const {handleSubmit, formState: {errors}, register} = useForm({
            mode: "onSubmit",
            defaultValues: {
                product: "",
                amount: 1
            }
        }
    )
    const [products, setProducts] = useState([]);
    const {amount} = useParams();
    // const [amount, setAmount] = useState(null);
    const [totalProducts, setTotalProducts] = useState([]);
    const [calories, setCalories] = useState([]);
    const [fat, setFat] = useState([]);
    const [carbs, setCarbs] = useState([]);
    // const [uri, setUri] = useState("");
    // const [foodId, setFoodId] = useState("");

    async function onFormSubmitCalc(data) {
        console.log(data);
        const product = data.product;
        let amount = data.amount;

        console.log("Product:", product, "Amount:", amount);
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    type: "logging",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingr: product
                }
            })
            console.log("ingr:", product);
            setProducts(response.data.hints[0]);
            setCalories(response.data.hints[0].food.nutrients.ENERC_KCAL * amount);
            setFat(response.data.hints[0].food.nutrients.FAT * amount);
            setCarbs(response.data.hints[0].food.nutrients.CHOCDF * amount);
            console.log(response.data.hints[0].food.nutrients.ENERC_KCAL * amount);
            console.log(fat);
            console.log(carbs);
            // console.log("FoodId:", response.data.hints[0].food.foodId);
            console.log("Hints:", response.data.hints[0]);
            console.log("Parsed:", response.data.parsed[0]);
            // console.log(response.food.nutrients.ENERC_KCAL)
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


    /*    async function onFormSubmitAmount(data) {
            console.log(data);
            try {
                const response = await axios.post(`https://api.edamam.com/api/food-database/v2/nutrients?app_id=${apiIdCalc}&app_key=${apiKeyCalc}`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        "ingredients": [{
                            "quantity": 0,
                            "measureURI": "string",
                            "foodId": "string",
                        }]
                    }

                });

                // setTotalProducts({
                //     ...totalProducts,
                //     ingredients: [{
                //         quantity: 2,
                //         measureURI: response.data.hints[0].measures[1].uri,
                //         foodId: response.data.hints[0].food.foodId
                //     }]
                // })
                console.log("Amount response:", response.data);
                // setAmount(response.data);
                // // setUri(response.data.hints[0].measures[1].uri);
                // console.log("URI:", response.data.hints[0].measures[1].uri);
                // setFoodId(response.data.hints[0].food.foodId);
            } catch (error) {
                console.error(error);
            }

        }*/


    return (
        <main className="outer-container">
            <div className="calc__inner-container inner-container">
                <h4>calorie calculator</h4>

                <form className="calc-product__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <input
                        id="product__field"
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
                    {Object.keys(products).length > 0 &&
                        <tr>
                            <td>{products.food.label}</td>
                            <td>{Math.round(products.measures[0].weight)}</td>
                            <td>Gram</td>
                        </tr>
                    }
                    </tbody>
                </table>

                <form onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <label htmlFor="amount__field">Amount</label>
                    <input
                        id="amount__field"
                        type="number"
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
                        <th>servings</th>
                        <th>calories</th>
                        <th>fat</th>
                        <th>carbs</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(products).length > 0 &&
                        <tr key={products.food.foodId}>
                            <td>{products.food.label}</td>
                            <td>(amount)</td>
                            <td>{calories} kCal</td>
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

export default CalculatorPageTwo;