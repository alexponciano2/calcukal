import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dungeons from "./pages/Dungeons"
import WorldMap from "./pages/WorldMap"
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } ></Route>
            <Route path="/dungeons" element={ <Dungeons /> } ></Route>
            <Route path="/worldmap" element={ <WorldMap /> } ></Route>
            <Route path="*" element={ <PageNotFound /> } ></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default AppRoutes;
