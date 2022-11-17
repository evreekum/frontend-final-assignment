import React from "react";
import "./RecipeCard.css";
import ClockIcon from "../../assets/icons/time.svg";
// import ClockIcon from "../../../public/time.svg";
import {Link} from "react-router-dom";
import TitleLength from "../../helpers/TitleLength";


function RecipeCard({id, image, title, calories, ingredients, time}) {

    return (

        <li className="recipe-card__li">
            <article className="recipe-card">
                <Link to={`/recipe/${id}`} className="recipe-card__link" target="_blank">

                    <img className="recipe-card__img" src={image} alt="Meal Image"/>
                    <span className="recipe-card__text">
                        <h6 className="recipe-card__title">{TitleLength(`${title}`)}</h6>
                        <section className="recipe-card__info">
                            <p className="recipe-card__ingr-cal"> <strong>{calories}</strong> calories | <strong>{ingredients}</strong> ingredients </p>
                            <p className="recipe-card__time"><img src={ClockIcon} className="clock-icon__svg"
                                                                  alt="Clock Icon"/><strong>{time}</strong> min </p>
                        </section>
                        {/*<ClockIcon className="recipe-card__svg" alt="Clock Icon"/>*/}
                    </span>
                </Link>
            </article>
        </li>

    )
}

export default RecipeCard;