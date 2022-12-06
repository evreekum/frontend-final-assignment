import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Header from "../../components/header/Header";
import TabTitle from "../../helpers/TabTitle";
import RecipesContext from "../../context/RecipesContext";
// import {SearchContext} from "../../context/SearchContext";



function HomePage() {
    TabTitle("The Clueless Cook");

    return (
        <>
            <main>
                <Header/>
                <SearchBar/>
                {/*<SearchContext/>*/}
                {/*<RecipesContext/>*/}

            </main>
        </>
    )
}

export default HomePage;