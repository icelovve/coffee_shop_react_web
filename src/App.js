import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import Error404 from "./pages/Error404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page/about" element={<AboutPage/>} />
                <Route path="/page/service" element={<ServicePage />} />
                <Route path="/page/menu" element={<MenuPage />} />
                <Route path="/page/contact" element={<ContactPage />} />

                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
