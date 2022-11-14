import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ClockIcon from "../../assets/icons/time.svg";
import "../recipecard/RecipeCard.css";
import NutrientsTable from "../nutrientsTable/NutrientsTable";

const apiKey = process.env.REACT_APP_API_KEY_HOME;
const apiId = process.env.REACT_APP_API_ID_HOME;


function RecipePageData() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [healthLabels, setHealthLabels] = useState([]);


    useEffect(() => {
        fetchRecipeData();
    }, []);


    async function fetchRecipeData() {

        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    type: "public",
                    app_key: apiKey,
                    app_id: apiId,

                }
            });
            console.log(response.data);

            const fetchRecipe = response.data.recipe;
            const fetchIngredients = fetchRecipe.ingredientLines;
            const fetchHealthLabels = fetchRecipe.healthLabels;
            setRecipe(fetchRecipe);
            setIngredients(fetchIngredients);
            setHealthLabels(fetchHealthLabels);

            console.log(fetchRecipe);
            console.log(recipe);
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <div className="recipe-page__outer-container outer-container">
            {Object.keys(recipe).length > 0 &&
                <article className="recipe-page__inner-container inner-container">
                    <section className="recipe-page__title">
                        <h3>{recipe.recipe.label}</h3>
                        <p><img className="clock-icon__svg" src={ClockIcon}
                                alt="Clock Icon"/>{recipe.recipe.totalTime} min </p>
                    </section>
                    <section className="recipe-page__instructions">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                            mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                            posuere a,
                            pede.

                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean
                            dignissim pellentesque felis.

                            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
                            ultricies in,
                            diam. Sed arcu. Cras consequat.

                            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna
                            eros eu
                            erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                            luctus,
                            metus.

                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean
                            dignissim pellentesque felis.

                            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
                            ultricies in,
                            diam. Sed arcu. Cras consequat.
                        </p>
                    </section>
                    <picture>
                        <img src={recipe.recipe.images.REGULAR.url} alt="Meal Image"/>
                    </picture>
                    <tbody>
                        <NutrientsTable/>
                    </tbody>

                </article>
            }
        </div>
    )
}

export default RecipePageData;