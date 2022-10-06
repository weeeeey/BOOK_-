import { Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default App;
