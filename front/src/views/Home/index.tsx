import React from "react";
import InputText from "../../components/InputText";
import MovieCard from "./MovieCard";
import "./style.scss";

const Home: React.FC = () => {
    return (
        <div className="home">
            <InputText
                name="searchFilms"
                placeholder="Pesquisar..."
            />
            <main className="home__main">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </main>
        </div>
    )
}

export default Home;