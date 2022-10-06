// 공통 레이아웃 컴포넌트
// 중첩을 이용한 공통 요소 보여주기

import { Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Articles from "./pages/Articles.js";
import Article from "./pages/Article.js";
import Layout from "./pages/Layout.js";

const App = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile/:username" element={<Profile />} />
                </Route>
                <Route path="/articles/" element={<Articles />}>
                    <Route path=":id" element={<Article />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
