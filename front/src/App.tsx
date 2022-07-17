import React from "react";
import Menu from "./components/layout/Menu";
import Home from "./views/Home";

const App: React.FC = () => {
    return (
        <div>
            <Menu />
            <Home />
        </div>
    )
}

export default App;