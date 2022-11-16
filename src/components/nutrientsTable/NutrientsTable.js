import React from "react";

function NutrientsTable(nutrientLabel, nutrientQuantity, nutrientUnit) {


    return (

        <tr>
            <td className="recipe-nutrients__row-1">{`${nutrientLabel}`}
            </td>
            <td className="recipe-nutrients__row-2">{`${nutrientQuantity}`}
            </td>
            <td>{`${nutrientUnit}`}</td>
        </tr>

    )
}

export default NutrientsTable;