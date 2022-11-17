import React from "react";
import "./Button.css";

function Button({type, title, className}) {
    return (
        <button
            type={type}
            id={`${title}__btn`}
            className={className}
        >
            {title}
        </button>
    )
}

export default Button;