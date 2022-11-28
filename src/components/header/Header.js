import React from "react";
import Button from "../button/Button";
import {HashLink} from "react-router-hash-link";
import "./Header.css";
import "../button/Button.css";

function Header() {

    return (
        <div className="header__outer-container outer-container">
            <div className="header__inner-container inner-container">
                <div>
                    <h1>delicious recipes</h1>
                    <h3>daily updated</h3>
                    <HashLink to="#q__field">
                        <Button
                            type="button"
                            title="find recipes"
                        />
                    </HashLink>
                </div>
            </div>

        </div>
    )
}

export default Header;