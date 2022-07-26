import { useContext } from "react";
import { FilmsContext } from "../context/FilmsContext";

export function useBoardMovies() {

    const { films, setFilms } = useContext(FilmsContext);
    const favoriteMovies = films.filter(item => item.favorite)

    function changeFavorite(id: number) {
        setFilms((state) => state
            .map(item => item.id === id
                ? {...item, favorite: !item.favorite}
                : item
            )
        );
    }

    return {
        films,
        favoriteMovies,
        setFilms,
        changeFavorite,
    }

}