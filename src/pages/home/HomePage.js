import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Header from "../../components/header/Header";
import TabTitle from "../../helpers/TabTitle";
// import {SearchContext} from "../../context/SearchContext";



function HomePage() {
    TabTitle("The Clueless Cook");

    return (
        <>
            <main>
                <Header/>
                <SearchBar/>
                {/*<SearchContext/>*/}

            </main>
        </>
    )
}

export default HomePage;