import React from "react";
import "./RecipeCard.css";
import ClockIcon from "../../assets/icons/time.svg";
import {Link} from "react-router-dom";


function RecipeCard({id, image, title, calories, ingredients, time}) {

    return (

        <li className="recipe-card__li">
            <article className="recipe-card">
                <Link to={`/recipe/:${id}`} className="recipe-card__link" target="_blank">

                    <img className="recipe-card__img" src={image} alt="Meal Image"/>
                    <span className="recipe-card__text">
                        <h6>{title}</h6>
                        <section className="recipe-card__info">
                            <p className="recipe-card__ingr-cal"> <strong>{calories}</strong> calories | <strong>{ingredients}</strong> ingredients </p>
                            <p className="recipe-card__time"><img className="clock-icon__svg" src={ClockIcon}
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