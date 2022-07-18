import React from "react";
import Menu from "./components/layout/Menu";
import Home from "./views/Home";
import "./app.scss";

const App: React.FC = () => {
    return (
        <div className="app">
            <Menu />
            <Home />
        </div>
    )
}

export default App;