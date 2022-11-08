import React from "react";
import "./RecipeCard.css";
import ClockIcon from "../../assets/icons/time.svg";
import {Link} from "react-router-dom";


function RecipeCard({id, image, title, ingredients, calories, time}) {

    return (
        <article className="recipe-card__wrapper">
            <section className="recipe-card">
                <Link to={`/recipe/:${id}`} className="recipe-card__link">
                    <img src={image} alt="Recipe Image"/>
                    <span className="recipe-card__text">
                        <h6>{title}</h6>
                        <section className="recipe-card__info">
                            <p className="recipe-card__ingr-cal"> <strong>{calories}</strong> calories | <strong>{ingredients}</strong> ingredients </p>
                            <p className="recipe-card__time">{time} min <ClockIcon alt="Clock Icon"/></p>
                        </section>
                    </span>
                </Link>
            </section>
        </article>
    )
}

export default RecipeCard;