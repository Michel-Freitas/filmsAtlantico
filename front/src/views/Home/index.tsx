import React, { useEffect, useState } from "react";
import InputText from "../../components/InputText";
import { IFilm } from "../../schemas/FilmSchemas";
import { useFilmsService } from "../../service";
import MovieCard from "./MovieCard";
import "./style.scss";

const Home: React.FC = () => {
    
    const { VITE_BASE_URL_IMAGES } = import.meta.env;
    const filmService = useFilmsService();
    const [filmsList, setFilmsList] = useState<IFilm[]>([]);

    useEffect(() => {
        initial();
    }, []);

    async function initial() {
        const result = await filmService.getFilms();
        setFilmsList(result);
    }

    function changeFavorite(id: number) {
        setFilmsList((state) => state
            .map(item => item.id === id
                ? {...item, favorite: !item.favorite}
                : item
            )
        );
    }

    return (
        <div className="home">
            <InputText
                name="searchFilms"
                placeholder="Pesquisar..."
            />
            <main className="home__main">
                {filmsList.map((item) => {
                    return <MovieCard
                        key={item.id}
                        coverUrl={`${VITE_BASE_URL_IMAGES}${item.coverPhoto}`}
                        detailsButtonAction={() => {}}
                        favoriteButtonAction={changeFavorite}
                        movieTitle={item.title}
                        releaseDate={item.releaseDate}
                        movieId={item.id}
                        isFavorite={item.favorite}
                    />
                })}
            </main>
        </div>
    )
}

export default Home;