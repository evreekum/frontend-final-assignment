import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";


function SocialIcon({link, children}) {

    return (
        <>
            <Link to={link}>
                <div className="footer__social-circle">
                    <span className="footer__social-icon">
                        {children}
                    </span>
                </div>
            </Link>
        </>
    )
}

export default SocialIcon;