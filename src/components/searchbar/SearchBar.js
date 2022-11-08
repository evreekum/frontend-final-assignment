import React from "react";
import {useForm} from "react-hook-form";
import SelectOptions from "../select/SelectOptions";
import Button from "../button/Button";
import InputField from "../inputfield/InputField";
import "./SearchBar.css";
import axios from "axios";
import "../../"
import {findAllByDisplayValue} from "@testing-library/react";

function SearchBar() {

    const {handleSubmit} = useForm({
     });

    async function onFormSubmit(dataSearch, search, mealType, cuisine, diet, time) {
        console.log(dataSearch, search, mealType, cuisine, diet, time);
        console.log("Submitted!");

        // const apiKey= "REACT_APP_API_KEY_HOME";
        // const apiId = "REACT_APP_API_ID_HOME";

        // try {
        //     const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         params: {
        //             type: "public",
        //             app_key: "REACT_APP_API_KEY_HOME",
        //             app_id: "REACT_APP_API_ID_HOME",
        //             q: search,
        //             mealType: mealType ? mealType : null,
        //             cuisineType: cuisine ? cuisine : null,
        //             diet: diet ? diet : null,
        //             time: time ? time : null
        //         }
        //     });
        //     // const recipeHits = response.data.hits;
        //
        //     console.log(response.data);
        // } catch (error) {
        //     console.error(error);
        // }
    }

    return (

            <div className="searchbar__outer-container outer-container">
                {/*Using react-hook-form*/}
                <form className="searchbar__inner-container" onSubmit={handleSubmit(onFormSubmit)}>
                    <InputField
                        title="search"
                        type="search"
                        placeholder="Recipe Search"
                    />
                    <SelectOptions
                        type="meal-type"
                        name="mealType"
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


    )
}

export default SearchBar;