import React from "react";
import {useForm} from "react-hook-form";
import "./SelectOptions.css";
// import {useHistory} from "react-router-dom";
function SelectOptions({type, name, children}) {

    const {register} = useForm({
        defaultValues: {
            "mealType": "",
            "cuisine": "",
            "diet": "",
            "time": "",
        }
    });
    // const history = useHistory();

    return (

            <label htmlFor={`${type}-select`}>
                <select
                    id={`${type}-select`}
                    {...register(`${name}`)}
                >
                    <option value="" disabled placeholder={type}>{type}</option>
                    {/*<option disabled defaultChecked={type}>{type}</option>*/}
                    {/*<option value="" disabled selected>{type}</option>*/}
                    {children}
                </select>
            </label>

    )
}

export default SelectOptions;