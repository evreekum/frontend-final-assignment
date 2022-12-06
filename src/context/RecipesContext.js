import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import InputFieldRegister from "../components/inputfield/InputFieldRegister";
import SelectOptions from "../components/select/SelectOptions";
import Button from "../components/button/Button";
import RecipeCard from "../components/recipecard/RecipeCard";
import {useForm} from "react-hook-form";
import "../components/searchbar/SearchBar.css";
import "../App.css";



const apiKey = process.env.REACT_APP_API_KEY_HOME;
const apiId = process.env.REACT_APP_API_ID_HOME;

function RecipesContext() {
    const {handleSubmit, formState: {errors}, register} = useForm({
        mode: 'onSubmit',
        defaultValues: {
            search: "",
            mealType: "",
            cuisineType: "",
            diet: "",
            time: ""
        }
    });



    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    // useEffect(() => {
    //     console.log("useEffect started");
    //     onFormSubmit();
    // }, [recipes]);


    function onFormSubmit(data) {

        console.log("Form data:", data);
        fetchRecipes(data);
    }


    async function fetchRecipes(search) {
        toggleError(false);
        toggleLoading(true);
        // console.log("Data:", data);

        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
                params: {
                    type: "public",
                    app_id: apiId,
                    app_key: apiKey,
                    q: search
                }
            })
            console.log("Response:", response.data.hits);

            const recipeHits = response.data.hits;
            setRecipes(recipeHits.slice(0, 18));

            console.log("Search:", );
            console.log(recipeHits.slice(0, 18));
            console.log()
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
        toggleLoading(false);
    }


    return (
        <>

            <div className="searchbar__outer-container outer-container">
                {/*Using react-hook-form*/}
                <form className="searchbar__inner-container inner-container" onSubmit={handleSubmit(onFormSubmit)}>
                    <InputFieldRegister
                        name="search"
                        register={register}
                        validationObject={{required: "Fill in an ingredient"}}
                        type="search"
                        placeholder="Recipe Search"
                        errors={errors}
                    />
                    <SelectOptions
                        type="meal-type"
                        name="mealType"
                        register={register}
                    >
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="snack">Snack</option>
                        <option value="teatime">Teatime</option>
                    </SelectOptions>

                    <SelectOptions
                        type="cuisine"
                        name="cuisineType"
                        register={register}
                    >
                        <option value="american">american</option>
                        <option value="asian">asian</option>
                        <option value="british">british</option>
                        <option value="caribbean">caribbean</option>
                        <option value="central-europe">central europe</option>
                        <option value="chinese">chinese</option>
                        <option value="eastern-europe">eastern europe</option>
                        <option value="french">french</option>
                        <option value="greek">greek</option>
                        <option value="indian">indian</option>
                        <option value="italian">italian</option>
                        <option value="japanese">japanese</option>
                        <option value="korean">korean</option>
                        <option value="kosher">kosher</option>
                        <option value="mediterranean">mediterranean</option>
                        <option value="mexican">mexican</option>
                        <option value="middle eastern">middle eastern</option>
                        <option value="nordic">nordic</option>
                        <option value="south american">south american</option>
                        <option value="south east asian">south east asian</option>
                        <option value="world">world</option>
                    </SelectOptions>

                    <SelectOptions
                        type="diet"
                        name="diet"
                        register={register}
                    >
                        <option value="balanced">balanced</option>
                        <option value="high-fiber">high-fiber</option>
                        <option value="high-protein">high-protein</option>
                        <option value="low-carb">low-carb</option>
                        <option value="low-fat">low-fat</option>
                        <option value="low-sodium">low-sodium</option>
                    </SelectOptions>

                    <SelectOptions
                        type="Time"
                        name="time"
                        register={register}
                    >
                        <option value="0-15">0-15 min</option>
                        <option value="15-30">15-30 min</option>
                        <option value="30-45">30-45 min</option>
                        <option value="45-60">45-60 min</option>
                        <option value="60-75">60-75 min</option>
                        <option value="75-90">75-90 min</option>
                        <option value="90-105">90-105 min</option>
                        <option value="105-120">105-120 min</option>
                        <option value="120+">120+ min</option>
                    </SelectOptions>

                    <Button
                        type="submit"
                        title="search"

                    />
                </form>
            </div>

            <div className="outer-container">
                {loading && <span>Looking for recipes...</span>}
                {error &&
                    <span className="error-message">Something went wrong. <br/>The ingredient(s) is(are) either not recognized or it may be mistyped. <br/>Please try again.</span>}
                <ul className="recipe-card-results__ul">
                    {recipes && recipes.map((recipeData) => {
                        return (
                            <RecipeCard
                                key={recipeData.recipe.url}
                                id={recipeData.recipe.uri.split("_")[1]}
                                image={recipeData.recipe.images.REGULAR.url}
                                title={recipeData.recipe.label}
                                calories={Math.round(recipeData.recipe.calories)}
                                ingredients={recipeData.recipe.ingredientLines.length}
                                time={recipeData.recipe.totalTime}
                            />
                        )
                    })}
                </ul>
            </div>

        </>

    )
}

export default RecipesContext;