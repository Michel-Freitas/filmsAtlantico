import React from "react";
import { StartIcon, StartWithBackgroundIcon } from "../../../assets/icons";
import "./style.scss";

type MovieCard = {
    coverUrl: string;
    movieTitle: string;
    releaseDate: string;
    movieId: number;
    isFavorite: boolean;
    favoriteButtonAction: (id: number) => void
    detailsButtonAction: () => void
}

const MovieCard: React.FC<MovieCard> = (props) => {
    return (
        <div className="movieCard">
            <header className="movieCard__header">
                <img src={props.coverUrl} />
            </header>
            <main className="movieCard__main">
                <span>{props.movieTitle}</span>
                <span>{props.releaseDate}</span>
            </main>
            <footer className="movieCard__footer">
                <button
                    onClick={() => props.favoriteButtonAction(props.movieId)}
                >
                    {props.isFavorite
                        ? <StartWithBackgroundIcon />
                        : <StartIcon />
                    } Favorito
                </button>
                <button onClick={props.detailsButtonAction}>Detalhes</button>
            </footer>
        </div>
    )
}

export default MovieCard;