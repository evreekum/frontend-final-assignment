import React from "react";
import "./Button.css";

function Button({type, title}) {
    return (
        <button
            type={type}
            id={`${title}-btn`}
        >
            {title}
        </button>
    )
}

export default Button;