import React, {useState} from "react";
import "../../App.css";
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import InputField from "../../components/inputfield/InputField";
import Button from "../../components/button/Button";
import TabTitle from "../../helpers/TabTitle";
import "./CalculatorPage.css";
import axios from "axios";


const apiKeyCalc = process.env.REACT_APP_API_KEY_CALCULATOR;
const apiIdCalc = process.env.REACT_APP_API_ID_CALCULATOR;

function CalculatorPage() {
    TabTitle("Calorie Calculator");
    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            product: "",
            amount: null
        }});
    const {register, handleSubmit, formState: {errors}} = methods;

/*    const {handleSubmit, formState: {errors}, register} = methods({
        mode: "onChange",
        defaultValues: {
            product: "",
            amount: null
        }
    });*/
    // const [product, setProduct] = useState("");
    // const [amount, setAmount] = useState(null);
    // const [error, toggleError] = useState(false);

    const onFormSubmitCalc = async (data) => {
        console.log(data);
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    type: "public",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingr: {data}

                }
            })
            // setProduct(response.data.text);
            console.log(response.data)
            console.log(response.data.parsed[0]);
        } catch (error) {
            console.error(error);
            // toggleError(true);
        }

    }


    //
    // function onFormSubmitCalc(data) {
    //     console.log("Data:", data);
    //     fetchData();
    // }

  /*  async function fetchData(data) {

        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    type: "public",
                    app_id: apiIdCalc,
                    app_key: apiKeyCalc,
                    ingr: data

                }
            })
            // setProduct(response.data.text);
            console.log(response.data.parsed[0]);
        } catch (error) {
            console.error(error);
            // toggleError(true);
        }

    }*/


    return (
        <main className="outer-container">
            <div className="inner-container">
                <h4>calorie calculator</h4>
                <FormProvider {...methods}>
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

                   {/* <form className="calc-amount__form" onSubmit={handleSubmit(onFormSubmitCalc)}>
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
                    </form>*/}
                </FormProvider>
            </div>

        </main>
    )
}

export default CalculatorPage;