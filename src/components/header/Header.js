import React, {useEffect, useState} from "react";
import Button from "../button/Button";
import {HashLink} from "react-router-hash-link";
import "./Header.css";
// import "../recipecard/RecipeCard.css";
import "../button/Button.css";
import axios from "axios";
import RecipeCard from "../recipecard/RecipeCard";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const apiKey = process.env.REACT_APP_API_KEY_HOME;
const apiId = process.env.REACT_APP_API_ID_HOME;

function Header() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [sliderOne, setSliderOne] = useState([]);
    const [sliderTwo, setSliderTwo] = useState([]);
    const [sliderTree, setSliderTree] = useState([]);
    const [sliderFour, setSliderFour] = useState([]);
    const [sliderFive, setSliderFive] = useState([]);
    const [sliderSix, setSliderSix] = useState([]);

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
            setSliderOne(recipeData.slice(0, 1));
            setSliderTwo(recipeData.slice(2, 3));
            setSliderTree(recipeData.slice(4, 5));
            setSliderFour(recipeData.slice(6, 7));
            setSliderFive(recipeData.slice(8, 9));
            setSliderSix(recipeData.slice(10, 11));
            console.log(recipeData);
            console.log(response.data);
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
                <div className="swiper-wrapper" id="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={25}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        loop={true}
                        navigation={true}
                        pagination={{clickable: true}}
                        onSlideChange={() => console.log("slide changed")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="mySwiper"
                        id="mySwiper"
                    >
                        <SwiperSlide>
                            {Object.keys(sliderOne).length > 0 && sliderOne.map((recipe) => (
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
                        </SwiperSlide>
                        <SwiperSlide>
                            {Object.keys(sliderTwo).length > 0 && sliderTwo.map((recipe) => (
                                <RecipeCard
                                    className="header-card"
                                    key={recipe.recipe.url}
                                    id={recipe.recipe.uri.split("_")[1]}
                                    image={recipe.recipe.images.REGULAR.url}
                                    title={recipe.recipe.label}
                                    calories={Math.round(recipe.recipe.calories)}
                                    ingredients={recipe.recipe.ingredientLines.length}
                                    time={recipe.recipe.totalTime}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {Object.keys(sliderTree).length > 0 && sliderTree.map((recipe) => (
                                <RecipeCard
                                    className="header-card"
                                    key={recipe.recipe.url}
                                    id={recipe.recipe.uri.split("_")[1]}
                                    image={recipe.recipe.images.REGULAR.url}
                                    title={recipe.recipe.label}
                                    calories={Math.round(recipe.recipe.calories)}
                                    ingredients={recipe.recipe.ingredientLines.length}
                                    time={recipe.recipe.totalTime}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {Object.keys(sliderFour).length > 0 && sliderFour.map((recipe) => (
                                <RecipeCard
                                    className="header-card"
                                    key={recipe.recipe.url}
                                    id={recipe.recipe.uri.split("_")[1]}
                                    image={recipe.recipe.images.REGULAR.url}
                                    title={recipe.recipe.label}
                                    calories={Math.round(recipe.recipe.calories)}
                                    ingredients={recipe.recipe.ingredientLines.length}
                                    time={recipe.recipe.totalTime}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {Object.keys(sliderFive).length > 0 && sliderFive.map((recipe) => (
                                <RecipeCard
                                    className="header-card"
                                    key={recipe.recipe.url}
                                    id={recipe.recipe.uri.split("_")[1]}
                                    image={recipe.recipe.images.REGULAR.url}
                                    title={recipe.recipe.label}
                                    calories={Math.round(recipe.recipe.calories)}
                                    ingredients={recipe.recipe.ingredientLines.length}
                                    time={recipe.recipe.totalTime}
                                />
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {Object.keys(sliderSix).length > 0 && sliderSix.map((recipe) => (
                                <RecipeCard
                                    className="header-card"
                                    key={recipe.recipe.url}
                                    id={recipe.recipe.uri.split("_")[1]}
                                    image={recipe.recipe.images.REGULAR.url}
                                    title={recipe.recipe.label}
                                    calories={Math.round(recipe.recipe.calories)}
                                    ingredients={recipe.recipe.ingredientLines.length}
                                    time={recipe.recipe.totalTime}
                                />
                            ))}
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>


        </div>
    )
}

export default Header;