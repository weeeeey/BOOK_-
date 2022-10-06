import { Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Articles from "./pages/Articles.js";
import Article from "./pages/Article.js";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/articles/" element={<Articles />} />
                <Route path="/articles/:id" element={<Article />} />
                {/* 아티크즈에서 id를 넘기면 아티클을 보여주겠다 */}
            </Routes>
        </div>
    );
};

export default App;
