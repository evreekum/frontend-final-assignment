import React from "react";

function TitleLength(title) {
    if (title.length < 40) {
        return title;
    } else {
        return title.substring(0,38) + "...";
    }
}

export default TitleLength;