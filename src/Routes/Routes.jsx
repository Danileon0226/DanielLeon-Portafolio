import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import AboutMe from "../Screens/AboutMe/AboutMe";

export default function Rutas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutMe" element={<AboutMe />} />
            </Routes>
        </BrowserRouter>
    );
}