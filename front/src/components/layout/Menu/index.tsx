import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <h2>Films Atlântico</h2>
            </div>
            <div className="menu__itemGroup">
                <Link to="/" className="menu__item">
                    <span>Home</span>
                </Link>
                <Link to="/favorites" className="menu__item">
                    <span>Favoritos</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu;