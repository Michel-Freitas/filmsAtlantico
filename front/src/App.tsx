import React from "react";
import Menu from "./components/layout/Menu";
import "./app.scss";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Menu />
                <AppRoutes />
            </div>
        </BrowserRouter>
    )
}

export default App;