import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Header from "../../components/header/Header";

function Home() {


    return (
        <>
            <main>
                <Header/>
                <SearchBar/>
                <ul className="recipe-result__list">
                    {recipes.map}
                </ul>
            </main>
        </>
    )
}

export default Home;