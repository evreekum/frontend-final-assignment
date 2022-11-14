import React from "react";

function NutrientsTable(nutrientLabel, nutrientQuantity, nutrientUnit, nutrientName) {


    return (

        <tr>
            <td className="recipe-nutrients__row-1">{`totalNutrients.${nutrientName}.label`}
            </td>
            <td className="recipe-nutrients__row-2">{Math.round(`recipe.totalNutrients.${nutrientName}.quantity`)}
            </td>
            <td>{`recipe.totalNutrients.${nutrientName}.unit`}</td>
            {/*<td className="recipe-nutrients__row-1">{`${nutrientLabel}`}*/}
            {/*</td>*/}
            {/*<td className="recipe-nutrients__row-2">{`${nutrientQuantity}`}*/}
            {/*</td>*/}
            {/*<td>{`${nutrientUnit}`}</td>*/}
        </tr>

    )
}

export default NutrientsTable;


/*<NutrientsTable
    nutrientName="ENERC_KCAL"
/>
<NutrientsTable
    nutrientName="FAT"
/>
<NutrientsTable
    nutrientName="CHOCDF"
/>
<NutrientsTable
    nutrientName="SUGAR"
/>
<NutrientsTable
    nutrientName="PROCNT"
/>
<NutrientsTable
    nutrientName="NA"
/>*/

/*
<td className="recipe-nutrients__row-1">{`recipe.totalNutrients.${nutrientName}.label`}
</td>
<td className="recipe-nutrients__row-2">{Math.round(`recipe.totalNutrients.${nutrientName}.quantity`)}
</td>
<td>{`recipe.totalNutrients.${nutrientName}.unit`}</td>*/
