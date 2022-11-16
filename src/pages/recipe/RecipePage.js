import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ClockIcon from "../../assets/icons/time.png";
import "../../components/recipecard/RecipeCard.css";
import "./RecipePage.css";
import TabTitle from "../../helpers/TabTitle";


const apiKey = process.env.REACT_APP_API_KEY_HOME;
const apiId = process.env.REACT_APP_API_ID_HOME;


function RecipePage() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [healthLabels, setHealthLabels] = useState([]);
    // const [nutrients, setNutrients] = useState([]);
    TabTitle(`${recipe.label}`);


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
            console.log("Response:", response.data.recipe.ingredientLines);

            const fetchRecipe = response.data.recipe;
            const fetchIngredients = fetchRecipe.ingredientLines;
            const fetchHealthLabels = fetchRecipe.healthLabels;
            setRecipe(fetchRecipe);
            setIngredients(fetchIngredients);
            setHealthLabels(fetchHealthLabels);
            console.log("FetchRecipe:", fetchRecipe);

        } catch (error) {
            console.error(error);
        }
        // fetchRecipeData();
    }


    return (
        <div className="recipe-page__outer-container outer-container">
            {Object.keys(recipe).length > 0 &&
                <article className="recipe-page__inner-container inner-container">
                    <section className="recipe-page__description">
                        <div className="recipe-page__title">
                            <h4>{recipe.label}</h4>
                            <p><img className="clock-icon__svg" src={ClockIcon}
                                    alt="Clock Icon"/><strong>{recipe.totalTime}</strong> min </p>

                            {/*<p><ClockIcon classname="clock-icon__svg" alt="Clock Icon"/>{recipe.totalTime} min </p>*/}
                        </div>

                        <p className="recipe-page__instructions">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                            mattis eros.
                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                            posuere a,
                            pede.
                            <br></br><br></br>
                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean
                            dignissim pellentesque felis.

                            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
                            ultricies in,
                            diam. Sed arcu. Cras consequat.
                            <br></br>
                            <br></br>
                            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna
                            eros eu
                            erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                            luctus,
                            metus.
                            <br></br>
                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean
                            dignissim pellentesque felis.
                            <br></br>
                            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
                            ultricies in,
                            diam. Sed arcu. Cras consequat.


                        </p>
                        <a className="recipe-page__original-link" href={recipe.url} target="_blank"
                           rel="nofollow, noopener, noreferrer">Click here for the original recipe</a>
                    </section>

                    <img className="recipe-page__img" src={recipe.images.REGULAR.url} alt="Meal Image"/>

                    <div className="recipe-page__ingredients-nutrients__wrapper">
                        <section className="recipe-page__ingredients">
                            <h5>ingredients</h5>
                            <ul>
                                {ingredients.map((ingredient) => (

                                    <li key={ingredients.foodId}>{ingredient}</li>

                                ))}
                            </ul>
                        </section>

                        <section className="recipe-page__nutrients">
                            <h5>nutrients</h5>
                            <table className="recipe-page__nutrients-table">
                                <tbody>
                                <tr>
                                    <td className="recipe-nutrients__row-1"></td>
                                    <td className="recipe-nutrients__row-2"><strong>Total</strong></td>
                                    <td className="recipe-nutrients__row-3"><strong>Unit</strong></td>
                                    <td className="recipe-nutrients__row-2"><strong>100g</strong></td>
                                    <td className="recipe-nutrients__row-3"><strong>Unit</strong></td>
                                </tr>
                                <tr>
                                    <td className="recipe-nutrients__row-1">Weight</td>
                                    <td className="recipe-nutrients__row-2">{Math.round(recipe.totalWeight)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">g</td>
                                    <td className="recipe-nutrients__row-2">100</td>
                                    <td className="recipe-nutrients__row-3">g</td>
                                </tr>
                                <tr>

                                    <td className="recipe-nutrients__row-1">{recipe.totalNutrients.ENERC_KCAL.label}
                                    </td>
                                    <td className="recipe-nutrients__row-2">{Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.ENERC_KCAL.unit}</td>
                                    <td className="recipe-nutrients__row-2">{parseFloat((recipe.totalNutrients.ENERC_KCAL.quantity / recipe.totalWeight) * 100).toFixed(0)}</td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.ENERC_KCAL.unit}</td>
                                </tr>
                                <tr>
                                    <td className="recipe-nutrients__row-1">{recipe.totalNutrients.FAT.label}
                                    </td>
                                    <td className="recipe-nutrients__row-2">{Math.round(recipe.totalNutrients.FAT.quantity)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.FAT.unit}</td>
                                    <td className="recipe-nutrients__row-2">{parseFloat((recipe.totalNutrients.FAT.quantity / recipe.totalWeight) * 100).toFixed(2)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.FAT.unit}</td>
                                </tr>
                                <tr>
                                    <td className="recipe-nutrients__row-1">{recipe.totalNutrients.CHOCDF.label}
                                    </td>
                                    <td className="recipe-nutrients__row-2">{Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.CHOCDF.unit}</td>
                                    <td className="recipe-nutrients__row-2">{parseFloat((recipe.totalNutrients.CHOCDF.quantity / recipe.totalWeight) * 100).toFixed(2)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.CHOCDF.unit}</td>
                                </tr>
                                <tr>
                                    <td className="recipe-nutrients__row-1">{recipe.totalNutrients.SUGAR.label}
                                    </td>
                                    <td className="recipe-nutrients__row-2">{Math.round(recipe.totalNutrients.SUGAR.quantity)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.SUGAR.unit}</td>
                                    <td className="recipe-nutrients__row-2">{parseFloat((recipe.totalNutrients.SUGAR.quantity / recipe.totalWeight) * 100).toFixed(2)}</td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.SUGAR.unit}</td>
                                </tr>
                                <tr>
                                    <td className="recipe-nutrients__row-1">{recipe.totalNutrients.PROCNT.label}
                                    </td>
                                    <td className="recipe-nutrients__row-2">{Math.round(recipe.totalNutrients.PROCNT.quantity)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.PROCNT.unit}</td>
                                    <td className="recipe-nutrients__row-2">{parseFloat((recipe.totalNutrients.PROCNT.quantity / recipe.totalWeight) * 100).toFixed(2)}</td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.PROCNT.unit}</td>
                                </tr>
                                <tr>
                                    <td className="recipe-nutrients__row-1">{recipe.totalNutrients.NA.label}
                                    </td>
                                    <td className="recipe-nutrients__row-2">{Math.round(recipe.totalNutrients.NA.quantity)}
                                    </td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.NA.unit}</td>
                                    <td className="recipe-nutrients__row-2">{parseFloat((recipe.totalNutrients.NA.quantity / recipe.totalWeight) * 100).toFixed(2)}</td>
                                    <td className="recipe-nutrients__row-3">{recipe.totalNutrients.NA.unit}</td>
                                </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                    <section>
                        <h5>health labels</h5>
                        <ul className="recipe-page__health-label">
                            {healthLabels.map((healthLabel) => (

                                <li key={ingredients.foodId} className="recipe-page__health-label__li">{healthLabel}</li>

                            ))}
                        </ul>
                    </section>
                </article>
            }
        </div>
    )
}

export default RecipePage;