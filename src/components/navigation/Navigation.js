import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.css";
import "./logo-font.css";
import "../../App.css";
import {HashLink} from "react-router-hash-link";

function Navigation() {

    return (
        <>
            <div className="nav__outer-container outer-container">
                <nav className="nav__inner-container inner-container">
                    <h2><NavLink to="/" exact className="nav__logo">The Clueless Cook</NavLink></h2>
                    <ul className="nav__ul">
                        <li><NavLink to="/" exact className="nav__li">home</NavLink></li>
                        <li><HashLink to="#about__footer" className="nav__li">about</HashLink></li>
                        <li><NavLink to="/calculator" className="nav__li">calculator</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation;
