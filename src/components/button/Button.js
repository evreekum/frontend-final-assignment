import React from "react";
import "./Button.css";

function Button({type, title, className, onClick, disabled}) {
    return (
        <button
            type={type}
            id={`${title}__btn`}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}
export default Button;