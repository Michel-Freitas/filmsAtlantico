import React from "react"
import BoardMovies from "../../components/BoardMovies";
import MovieCard from "../../components/MovieCard";
import { useBoardMovies } from "../../hooks";

const Favorites: React.FC = () => {

    const { favoriteMovies, changeFavorite } = useBoardMovies();
    const { VITE_BASE_URL_IMAGES } = import.meta.env;

    return (
        <div className="favorites">
            <BoardMovies>
                {favoriteMovies.map((item) => {
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

export default Favorites;