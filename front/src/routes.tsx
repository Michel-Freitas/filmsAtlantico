import { Routes, Route } from "react-router-dom";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    )
}

export default AppRoutes;