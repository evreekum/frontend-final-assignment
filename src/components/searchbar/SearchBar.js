import React, {useEffect, useState} from "react";
// import {useForm} from "react-hook-form";
import SelectOptions from "../select/SelectOptions";
import Button from "../button/Button";
import InputFieldUseForm from "../inputfield/InputFieldUseForm";
import "./SearchBar.css";
import "../../App.css";
import axios from "axios";
import RecipeCard from "../recipecard/RecipeCard";

const apiKey = process.env.REACT_APP_API_KEY_HOME;
const apiId = process.env.REACT_APP_API_ID_HOME;

function SearchBar() {
    // const {search} = useParams();
    const [search, setSearch] = useState("");
    const [mealType, setMealType] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [time, setTime] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [allData, setAllData] = useState({});
    const [recipesUrl, setRecipesUrl] = useState(`https://api.edamam.com/api/recipes/v2`);
    const [count, setCount] = useState(0);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [updated, setUpdated] = useState(search);


    function nextClick() {
        setRecipesUrl(allData.next.href);
        window.scrollTo({top: 550, left: 0, behavior: "smooth"})
        console.log(recipesUrl);
    }


    // function updateMessage() {
    //     onFormSubmit();
    //     setUpdated(search);
    // }

    useEffect(() => {
        fetchData();
        console.log("useEffect")

    }, [recipesUrl, search]);

    function onFormSubmit(e) {
        e.preventDefault();
        // console.log(data);
        console.log("Submitted!");
        fetchData();
        setSearch("");
        setUpdated(search);

    }

    async function fetchData() {


        try {
            const response = await axios.get(recipesUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    type: "public",
                    app_key: apiKey,
                    app_id: apiId,
                    q: search,
                    mealType: mealType ? mealType : null,
                    cuisineType: cuisine ? cuisine : null,
                    diet: diet ? diet : null,
                    time: time ? time : null
                }
            });
            console.log("Data:", response.data);
            const recipeData = response.data;
            setRecipes(recipeData.hits);
            setAllData(recipeData._links);
            setCount(recipeData.count);
            setFrom(recipeData.from);
            setTo(recipeData.to);
            console.log("Count:", count);
            console.log("From:", from);
            console.log("To:", to)
            console.log("RecipeHits:", recipeData.hits);

        } catch (error) {
            console.error(error);
        }

    }

    // useEffect(() => {
    //     const controller = new AbortController();
    //
    //     return() => controller.abort();
    // }, []);

    return (
        <>

            <div className="searchbar__outer-container outer-container">

                <form className="searchbar__inner-container inner-container" onSubmit={(onFormSubmit)}>
                    <InputFieldUseForm
                        name="search"
                        type="search"
                        placeholder="Recipe Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />
                    <SelectOptions
                        type="meal-type"
                        name="mealType"
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
                        name="cuisineType"
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
                        name="diet"
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
                        name="time"
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
            <div className="outer-container">

                <div className="searchbar__count">
                    <p><strong>{count}</strong> recipes found for <strong>{updated}</strong></p>
                    <p>From: <strong>{from}</strong> To: <strong>{to}</strong></p>
                </div>


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
                <Button
                    type="button"
                    title="next"
                    onClick={nextClick}
                    disabled={!allData.next}
                />
            </div>
        </>


    )
}

export default SearchBar;