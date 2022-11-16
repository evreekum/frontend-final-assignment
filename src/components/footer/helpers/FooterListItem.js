import React from "react";

function FooterListItem({title, children}) {

    return (
        <>
            <li>
                <h6 id={`${title}__footer`}>{title}</h6>
                {children}
            </li>
        </>
    )
}

export default FooterListItem;