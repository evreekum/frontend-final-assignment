import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Header from "../../components/header/Header";
import RecipeCard from "../../components/recipecard/RecipeCard";

function Home() {


    return (
        <>
            <main>
                <Header/>
                <SearchBar/>
                <RecipeCard/>
            </main>
        </>
    )
}

export default Home;