import React, { useEffect } from "react";
import InputText from "../../components/InputText";
import { useFilmsService } from "../../service";
import "./style.scss";
import BoardMovies from "../../components/BoardMovies";
import { useBoardMovies } from "../../hooks";
import MovieCard from "../../components/MovieCard";

const Home: React.FC = () => {

    const { VITE_BASE_URL_IMAGES } = import.meta.env;
    const { films, setFilms, changeFavorite } = useBoardMovies();
    const filmService = useFilmsService();

    useEffect(() => {
        initial();
    }, []);

    async function initial() {
        if (films.length != 0) return;
        const result = await filmService.getFilms();
        setFilms(result);
    }

    return (
        <div className="home">
            <InputText
                name="searchFilms"
                placeholder="Pesquisar..."
            />
            <BoardMovies>
                {films.map((item) => {
                    return <MovieCard
                        key={item.id}
                        coverUrl={`${VITE_BASE_URL_IMAGES}${item.coverPhoto}`}
                        detailsButtonAction={() => { }}
                        favoriteButtonAction={changeFavorite}
                        movieTitle={item.title}
                        releaseDate={item.releaseDate}
                        movieId={item.id}
                        isFavorite={item.favorite}
                    />
                })}
            </BoardMovies>
        </div>
    )
}

export default Home;