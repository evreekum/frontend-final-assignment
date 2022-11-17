/*
import React, {createContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import "../components/searchbar/SearchBar.css";
import "../App.css";
import axios from "axios";
import InputField from "../components/inputfield/InputField";
import SelectOptions from "../components/select/SelectOptions";
import Button from "../components/button/Button";
import RecipeCard from "../components/recipecard/RecipeCard";



const apiKey = process.env.REACT_APP_API_KEY_HOME;
const apiId = process.env.REACT_APP_API_ID_HOME;

export const SearchContext = createContext({});

export function SearchContextProvider({children}) {
    const [recipes, setRecipes] = useState({
        // q: "",
        // options: null,
        // status: "pending",


    });


    useEffect(() => {
        console.log("Context opnieuw gestart")

        console.log("FetchData:", fetchData())

        fetchData();
    }, []);

    async function fetchData(search) {

        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    type: "public",
                    app_key: apiKey,
                    app_id: apiId,
                    random: true,
                    q: search
                }
            });

            // const recipeHits = response.data.hits;
            // setRecipes(recipeHits.slice(0, 18));

            // console.log("RecipeHits:", recipeHits);
            console.log("Response:", response.data);
            setRecipes({
                ...recipes,
                q: search,
                mealType: response.data.mealType,
                cuisine: response.data.cuisine,
                diet: response.data.cuisine,
                time: response.data.time,
                // options: {
                //     mealType: response.data.mealType,
                //     cuisine: response.data.cuisine,
                //     diet: response.data.cuisine,
                //     time: response.data.time,
                // },
            })

        } catch (error) {
            console.error(error);
        }

    }


    function SearchBar() {

        console.log("Recipes 2:", recipes);
        const {handleSubmit, register} = useForm({
            mode: "onBlur",
            defaultValues: {
                "search": "",
                "mealType": null,
                "cuisine": null,
                "diet": null,
                "time": null,

            }
        });

        function onFormSubmit(recipes) {
            // e.preventDefault();
            console.log(recipes);
            console.log("Submitted!");

            fetchData(recipes);

            console.log("FetchData2:", fetchData());
        }


        return (
            <>

                <div className="searchbar__outer-container outer-container">
                    {/!*Using react-hook-form*!/}
                    <form className="searchbar__inner-container inner-container" onSubmit={handleSubmit(onFormSubmit)}>
                        <InputField
                            name="search"
                            register={register}
                            // validationObject={{required: "Voer een ingredient in"}}
                            type="search"
                            placeholder="Recipe Search"
                            // errors={errors}
                        />
                        <SelectOptions
                            type="meaType"
                            name="meal-type"
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
                            name="cuisine"
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
                    <ul className="recipe-card-results__ul">
                        {Object.keys(recipes).length > 0 &&
                            <RecipeCard
                                key={recipes.recipe.url}
                                id={recipes.recipe.uri.split("_")[1]}
                                image={recipes.recipe.images.REGULAR.url}
                                title={recipes.recipe.label}
                                calories={Math.round(recipes.recipe.calories)}
                                ingredients={recipes.recipe.ingredientLines.length}
                                time={recipes.recipe.totalTime}
                            />
                        }
                        {/!*    {recipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.recipe.url}
                                id={recipe.recipe.uri.split("_")[1]}
                                image={recipe.recipe.images.REGULAR.url}
                                title={recipe.recipe.label}
                                calories={Math.round(recipe.recipe.calories)}
                                ingredients={recipe.recipe.ingredientLines.length}
                                time={recipe.recipe.totalTime}
                            />
                        ))}*!/}

                    </ul>
                </div>
            </>


        )
    }


    const searchContextData = {
        q: recipes.q,
        options: recipes.options,
        SearchBar: SearchBar,

    }

    return (
        <SearchContext.Provider value={searchContextData}>
            {recipes.status === "done" ? children : <p>Searching for recipes...</p>}
        </SearchContext.Provider>
    )

}
*/
