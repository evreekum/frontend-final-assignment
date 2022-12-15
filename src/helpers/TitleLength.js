import React from "react";

function TitleLength(title) {
    if (title.length < 45) {
        return title;
    } else {
        return title.substring(0, 44) + "...";
    }
}

export default TitleLength;