import React, {useEffect, useState} from "react";
import Button from "../button/Button";
import {HashLink} from "react-router-hash-link";
import "./Header.css";
import "../button/Button.css";
import axios from "axios";
import RecipeCard from "../recipecard/RecipeCard";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoadingSpinner from "../loading/LoadingSpinner";

const apiKey = process.env.REACT_APP_API_KEY_HOME;
const apiId = process.env.REACT_APP_API_ID_HOME;

function Header() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [sliderRecipes, setSliderRecipes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
                mode: "onSubmit",
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    type: "public",
                    app_key: apiKey,
                    app_id: apiId,
                    random: true,
                    mealType: "dinner",
                }
            });
            const recipeData = response.data.hits;
            setSliderRecipes(recipeData.slice(0, 20));
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <div className="outer-container">
            <div className="header__outer-container">
                <div className="header__inner-container inner-container">
                    <h1>delicious recipes</h1>
                    <h3>daily updated</h3>
                    <HashLink to="#search__field">
                        <Button
                            type="button"
                            title="find recipes"
                        />
                    </HashLink>
                </div>
            </div>
            <div className="swiper-container">
                {loading && <LoadingSpinner/>}

                <div className="swiper-wrapper" id="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={15}
                        slidesPerView={5}
                        slidesPerGroup={4}
                        loop={true}
                        navigation={true}
                        pagination={{clickable: true}}
                        className="mySwiper"
                        id="mySwiper"
                    >
                        {error &&
                            <span><p className="error-message">Something went wrong. Refresh the page and try again.</p></span>}

                        <ul>
                            {Object.keys(sliderRecipes).length > 0 && sliderRecipes.map((recipe, index) => (
                                <SwiperSlide key={index}>
                                    <RecipeCard
                                        key={recipe._links.self.href}
                                        id={recipe.recipe.uri.split("_")[1]}
                                        image={recipe.recipe.images.REGULAR.url}
                                        title={recipe.recipe.label}
                                        calories={Math.round(recipe.recipe.calories)}
                                        ingredients={recipe.recipe.ingredientLines.length}
                                        time={recipe.recipe.totalTime}
                                    />
                                </SwiperSlide>
                            ))}
                        </ul>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Header;