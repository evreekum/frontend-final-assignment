import React, {useState} from "react";
import axios from "axios";

function RecipePageData() {

    const [recipePage, setRecipePage] = useState();
    const id = "";
    async function fetchRecipeData() {

        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    type: "public",
                    app_key: "process.env.REACT_APP_API_KEY_HOME",
                    app_id: "process.env.REACT_APP_API_ID_HOME",

                }
            });
            console.log(response.data);

            const selectedRecipe = response.data.recipe;
            setRecipePage(selectedRecipe);
            console.log(selectedRecipe);
            console.log(recipePage);
        } catch (error) {
            console.error(error);
        }

    }
    fetchRecipeData();

    return (
        <>
        </>
    )
}

export default RecipePageData;