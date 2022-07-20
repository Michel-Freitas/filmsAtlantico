import React from "react";
import Menu from "./components/layout/Menu";
import "./app.scss";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { FilmsProvider } from "./context/FilmsContext";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <FilmsProvider>
                <div className="app">
                    <Menu />
                    <AppRoutes />
                </div>
            </FilmsProvider>
        </BrowserRouter>
    )
}

export default App;