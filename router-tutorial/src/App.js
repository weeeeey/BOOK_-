// 라우팅 관련 작업시 리액트 라우터가 제공하는 유용한 API들
// useNavigate
// NavLink
// 와일드카드 *
// Navigate

import { Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Articles from "./pages/Articles.js";
import Article from "./pages/Article.js";
import Layout from "./pages/Layout.js";
import NotFound from "./pages/NotFound.js";

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
                <Route path="*" element={<NotFound />} />
                {/* 경로를 다 찾아보고 맞지 않는 것은 NotFound 출력 */}
            </Routes>
        </div>
    );
};

export default App;
