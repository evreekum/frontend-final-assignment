import React, {useState} from "react";
import RecipeCard from "../recipecard/RecipeCard";
import axios from "axios";
import "../recipecard/RecipeCard.css";

function HomeSearchData() {

    const [recipes, setRecipes] = useState();

    async function fetchData(search, mealType, cuisine, diet, time) {

        try {
            const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    type: "public",
                    app_key: "REACT_APP_API_KEY_HOME",
                    app_id: "REACT_APP_API_ID_HOME",
                    q: search,
                    mealType: mealType ? mealType : null,
                    cuisineType: cuisine ? cuisine : null,
                    diet: diet ? diet : null,
                    time: time ? time : null
                }
            });
            console.log(response.data);

            const recipeHits = response.data;
            setRecipes(recipeHits.hits.slice(0, 18));
            console.log(recipeHits);
            console.log(recipes);
        } catch (error) {
            console.error(error);
        }

    }

    fetchData();

    return (
        <ul className="recipe-card-results__ul">

            {Object.keys((recipes).length > 0 &&
                <RecipeCard
                    id={recipes.recipe.uri.split("_")[1]}
                    image={recipes.recipe.images.REGULAR.url}
                    title={recipes.recipe.label}
                    calories={Math.round(recipes.recipe.calories)}
                    ingredients={recipes.recipe.ingredientLines.length}
                    time={recipes.recipe.totalTime}
                />
            )}
        </ul>
    )

}

export default HomeSearchData;