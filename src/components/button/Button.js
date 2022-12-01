import React from "react";
import "./Button.css";

function Button({type, title, className, onClick}) {
    return (
        <button
            type={type}
            id={`${title}__btn`}
            className={className}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button;