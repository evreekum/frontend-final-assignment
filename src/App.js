import "./App.css";
import React, {useContext} from "react";
import NavBar from "./components/navigation/NavBar";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import CalculatorPage from "./pages/calculator/CalculatorPage";
import Footer from "./components/footer/Footer";
import RecipePage from "./pages/recipe/RecipePage";
import {AuthContext} from "./context/AuthContext";
import SignUpPage from "./pages/signup-login/SignUpPage";
import LoginPage from "./pages/signup-login/LoginPage";

function App() {
    const {isAuth} = useContext(AuthContext);
    return (
        <div className="outer-container">
            <NavBar/>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/recipe/:id">
                    <RecipePage/>
                </Route>
                <Route path="/calculator">
                    {isAuth ? <CalculatorPage/> : <Redirect to="/login"/>}
                </Route>
                <Route exact path="/signup">
                    <SignUpPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
            </Switch>

            <Footer/>
        </div>

    );
}

export default App;