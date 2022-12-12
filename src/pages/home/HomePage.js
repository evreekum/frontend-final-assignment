import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Header from "../../components/header/Header";
import TabTitle from "../../helpers/TabTitle";
import "./HomePage.css";

function HomePage() {
    TabTitle("The Clueless Cook");
    return (
        <div className="home__outer-container">
            <header>
                <Header/>
            </header>
            <main>
                <SearchBar/>
            </main>
        </div>
    )
}
export default HomePage;