import React from "react";

function Calculate100gr(totalNutrient, totalWeight) {


    return (
        `${totalNutrient}` / `${totalWeight}`
    )

}
console.log(Calculate100gr(500, 100))
export default Calculate100gr;