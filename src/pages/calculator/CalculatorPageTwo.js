/*
import React, {useEffect, useState} from "react";
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
            mode: "onChange",
            defaultValues: {
                product: "",
                amount: null,
                quantity: "",
                measureURI: "",
                foodId: ""

            }
        }
    )
    const [product, setProduct] = useState("");
    // const {product} = useParams();
    const [amount, setAmount] = useState(null);
    const [foundProduct, setFoundProduct] = useState([]);
    const [calculator, setCalculator] = useState([]);
    const [calories, setCalories] = useState(0);
    const [fat, setFat] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [error, toggleError] = useState(false);
    const [uri, setUri] = useState("");
    const [foodId, setFoodId] = useState("");



    async function onFormSubmitCalc(data) {
        console.log("Data:", data.product);
        // const product = data.product;
        // let amount = data.amount;

        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    type: "logging",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingr: data.product
                }
            })
            console.log("Result:", response.data);
            const productHits = response.data.hints[0];
            console.log("Hints:", response.data.hints[0], productHits);
            console.log("Parsed:", response.data.parsed[0]);
            // setProduct(response.data);
            setFoundProduct([...foundProduct, productHits]);
            // setCalories(response.data.hints[0].food.nutrients.ENERC_KCAL * amount);
            // setFat(response.data.hints[0].food.nutrients.FAT * amount);
            // setCarbs(response.data.hints[0].food.nutrients.CHOCDF * amount);
            // console.log(response.data.hints[0].food.nutrients.ENERC_KCAL * amount);
            // console.log(fat);
            // console.log(carbs);
            setFoodId(response.data.hints[0].food.foodId);
            console.log("FoodId:", response.data.hints[0].food.foodId);
            setUri(response.data.hints[0].measures[1].uri);
            console.log("URI:", response.data.hints[0].measures[1].uri);


        } catch (error) {
            console.error(error);
            toggleError(true);
        }
    }
    useEffect(() => {
        console.log("Product useEffect:", );
        onFormSubmitCalc();
    }, []);

    useEffect(() => {
        console.log("Amount useEffect:");
        onFormSubmitAmount();
    }, [amount]);


    /!*async function onFormSubmitAmount(data) {
        setCalculator([...calculator, [foundProduct, amount]]);
        console.log("Amount:", data.amount);
        console.log(uri);
        console.log(foodId);
        try {
            const response = await axios.post(`https://api.edamam.com/api/food-database/v2/nutrients`, {
                quantity: "1",
                measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                foodId: "" }, {
                headers: "Accept: application/json",
                params: {
                    type: "public",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,



                }
            })
            // setProduct(response.data.text);
            console.log("Response:", response.data);
            // setAmount([amount]);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }

    }*!/

    function onFormSubmitAmount() {

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


    /!*    async function onFormSubmitAmount(data) {
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

        }*!/


    return (
        <main className="outer-container">
            <div className="calc__inner-container inner-container">
                <h4>calorie calculator</h4>

                <form className="calc-product__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
                    <input
                        id="product__field"
                        type="text"
                        name="product"

                        {...register("product", {
                            required: "This field can't be empty. Please fill in an ingredient or product and try again."
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
                    {Object.keys(foundProduct).length > 0 && foundProduct.map((product) => (
                        <tr key={product.food.foodId}>
                            <td>{product.food.label}</td>
                            <td>{Math.round(product.measures[0].weight)}</td>
                            <td>Gram</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <form onSubmit={handleSubmit(onFormSubmitAmount)}>
                    <label htmlFor="amount__field">Amount</label>
                    <input
                        id="amount__field"
                        type="number"
                        name="amount"
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
                    {Object.keys(calculator).length > 0 && calculator.map((array) => {
                        return array[0].map((amount) => {
                            return (
                                <tr key={amount.food.nutrients.ENERC_KCAL}>
                                    <td>{amount.food.label}</td>
                                    <td>{Math.round(amount.food.nutrients.ENERC_KCAL)} kCal</td>
                                    <td>{(amount.food.nutrients.FAT).toFixed(1)} g</td>
                                    <td>{(amount.food.nutrients.CHOCDF).toFixed(1)} g</td>
                                </tr>
                            )
                        })
                    })}
                    {Object.keys(calculator).length > 0 &&
                        <tr>
                            <td>Total</td>
                            <td>{calories}</td>
                            <td>{fat}</td>
                            <td>{carbs}</td>
                        </tr>
                    }
                    </tbody>
                </table>

            </div>

        </main>
    )
}

export default CalculatorPageTwo;
*/
