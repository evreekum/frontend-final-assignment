import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import "./NavBar.css";
import "./logo-font.css";
import "../../App.css";
import {HashLink} from "react-router-hash-link";
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <div className="nav__outer-container outer-container">
            <nav className="nav__inner-container inner-container">
                <h2><NavLink to="/" exact className="nav__logo">The Clueless Cook</NavLink></h2>
                <ul className="nav__ul">
                    <li><NavLink to="/" exact className="nav__li">home</NavLink></li>
                    <li><HashLink to="#about__footer" className="nav__li">about</HashLink></li>
                    <li><NavLink to="/calculator" className="nav__li">calculator</NavLink></li>
                    {isAuth ?
                        <li>
                            <Button
                                type="button"
                                title="log out"
                                className="auth__btn"
                                onClick={logout}
                            />
                        </li>
                        :
                        <li className="nav__btn">
                            <Button
                                type="button"
                                title="log in"
                                className="auth__btn login__btn"
                                onClick={() => history.push("/login")}
                            />
                        </li>
                    }
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;