import React from "react";

function FooterListItem({title, children}) {

    return (
        <>
            <li>
                <h5>{title}</h5>
                {children}
            </li>
        </>
    )
}

export default FooterListItem;