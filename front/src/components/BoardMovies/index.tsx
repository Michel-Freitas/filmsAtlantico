import React, { ReactNode } from "react";
import "./style.scss";

type BoardMovies = {
    children: ReactNode
}

const BoardMovies: React.FC<BoardMovies> = (props) => {
    return (
        <div className="boardMovies">
            {props.children}
        </div>
    )
}

export default BoardMovies;