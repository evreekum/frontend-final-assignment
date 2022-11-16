import React from "react";
import {useForm} from "react-hook-form";
import "./SelectOptions.css";
// import {useHistory} from "react-router-dom";
function SelectOptions({type, name, value, onChange, children}) {

    const {register} = useForm();
    // const history = useHistory();

    return (

            <label htmlFor={`${type}__select`}>
                <select
                    id={`${type}__select`}
                    {...register(`${name}`)}
                    value={value}
                    onChange={onChange}
                >
                    {/*<option value="" disabled placeholder={type}>{type}</option>*/}
                    {/*<option disabled value defaultValue={type}>{type}</option>*/}
                    <option value="" disabled selected>{type}</option>
                    {children}
                </select>
            </label>

    )
}
export default SelectOptions;