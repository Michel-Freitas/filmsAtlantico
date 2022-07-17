import React from "react";
import "./style.scss";

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <h2>Films Atlântico</h2>
            </div>
            <div className="menu__itemGroup">
                <a href="#" className="menu__item">
                    <span>Home</span>
                </a>
                <a href="#" className="menu__item">
                    <span>Favoritos</span>
                </a>
            </div>
        </div>
    )
}

export default Menu;