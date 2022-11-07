import "./App.css";
import React from "react";
import Navigation from "./components/navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Calculator from "./pages/calculator/Calculator";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <div className="outer-container">
                <Navigation/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/recipe/:recipeId">
                        <Recipe/>
                    </Route>
                    <Route path="/calculator">
                        <Calculator/>
                    </Route>
                </Switch>

                <Footer/>

            </div>
        </>
    );
}

export default App;
