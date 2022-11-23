import "./App.css";
import React from "react";
import Navigation from "./components/navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
// import RecipePage from "./pages/recipe/RecipePage";
// import CalculatorPage from "./pages/calculator/CalculatorPage";
import Footer from "./components/footer/Footer";
import RecipePage from "./pages/recipe/RecipePage";
import CalculatorPageTwo from "./pages/calculator/CalculatorPageTwo";

function App() {
    return (
        <>
            <div className="outer-container">
                <Navigation/>

                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/recipe/:id">
                        <RecipePage/>
                    </Route>
                    <Route path="/calculator">
                        <CalculatorPageTwo/>
                    </Route>
                </Switch>

                <Footer/>

            </div>
        </>
    );
}

export default App;
