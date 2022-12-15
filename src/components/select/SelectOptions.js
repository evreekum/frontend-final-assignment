import React from "react";
import "./SelectOptions.css";

function SelectOptions({type, name, value, onChange, children}) {

    return (
        <label htmlFor={`${type}__select`}>
            <select
                id={`${type}__select`}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="" disabled placeholder={type}>{type}</option>
                {children}
            </select>
        </label>
    )
}

export default SelectOptions;