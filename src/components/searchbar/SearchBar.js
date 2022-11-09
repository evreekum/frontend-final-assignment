import React, {useState} from "react";
import {useForm} from "react-hook-form";
import SelectOptions from "../select/SelectOptions";
import Button from "../button/Button";
import InputField from "../inputfield/InputField";
import "./SearchBar.css";
import axios from "axios";
import RecipeCard from "../recipecard/RecipeCard";


function SearchBar() {
    const [search, setSearch] = useState("");
    const [mealType, setMealType] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [time, setTime] = useState("");
    const [recipes, setRecipes] = useState([]);

    const {handleSubmit} = useForm({});

    function onFormSubmit(dataSearch) {
        // e.preventDefault();
        console.log(dataSearch);
        console.log("Submitted!");
        fetchData();
        // HomeSearchData(search);
        console.log("FetchData:", fetchData());
    }

    async function fetchData() {

        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    type: "public",
                    app_key: "d8f7fb26122382212dc8fd7bff0570b7",
                    app_id: "eb071f48",
                    q: search,
                    mealType: mealType ? mealType : null,
                    cuisineType: cuisine ? cuisine : null,
                    diet: diet ? diet : null,
                    time: time ? time : null
                }
            });

            const recipeHits = response.data.hits;
            setRecipes(recipeHits.slice(0, 18));
            console.log("RecipeHits:", recipeHits);

        } catch (error) {
            console.error(error);
        }

    }


    return (
        <>

            <div className="searchbar__outer-container outer-container">
                {/*Using react-hook-form*/}
                <form className="searchbar__inner-container" onSubmit={handleSubmit(onFormSubmit)}>
                    <InputField
                        title="search"
                        type="search"
                        placeholder="Recipe Search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <SelectOptions
                        type="meal-type"
                        // name="mealType"
                        value={mealType}
                        onChange={(e) => setMealType(e.target.value)}
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
                        // name="cuisine"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
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
                        // name="diet"
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
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
                        // name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
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
            <div>
                <ul className="recipe-card-results__ul">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.recipe.url}
                            id={recipe.recipe.uri.split("_")[1]}
                            image={recipe.recipe.images.REGULAR.url}
                            title={recipe.recipe.label}
                            calories={Math.round(recipe.recipe.calories)}
                            ingredients={recipe.recipe.ingredientLines.length}
                            time={recipe.recipe.totalTime}
                        />
                    ))}

                </ul>
            </div>
        </>


    )
}

export default SearchBar;