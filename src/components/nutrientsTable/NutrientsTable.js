import React from "react";

function NutrientsTable(nutrientName) {

    return (
        <>
            <tr>
                <td className="recipe-nutrients__row-1">{`recipe.recipe.totalNutrients.${nutrientName}.label`}
                </td>
                <td className="recipe-nutrients__row-2">{Math.round(`recipe.recipe.totalNutrients.${nutrientName}.quantity`)}
                </td>
                <td>{`recipe.recipe.totalNutrients.${nutrientName}.unit`}</td>
            </tr>
        </>
    )
}

export default NutrientsTable;