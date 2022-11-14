import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Header from "../../components/header/Header";
import TabTitle from "../../helpers/TabTitle";



function HomePage() {
    TabTitle("The Clueless Cook");

    return (
        <>
            <main>
                <Header/>
                <SearchBar/>

            </main>
        </>
    )
}

export default HomePage;