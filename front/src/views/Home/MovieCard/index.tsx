import React from "react";
import { StartIcon, StartWithBackgroundIcon } from "../../../assets/icons";
import "./style.scss";

const MovieCard: React.FC = () => {
    return (
        <div className="movieCard">
            <header className="movieCard__header">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg" alt="" />
            </header>
            <main className="movieCard__main">
                <span>Homem-Aranha: Sem Volta Para Casa</span>
                <span>16/12/2021</span>
            </main>
            <footer className="movieCard__footer">
                <button><StartIcon /> Favorito</button>
                <button>Detalhes</button>
            </footer>
        </div>
    )
}

export default MovieCard;