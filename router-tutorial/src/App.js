// 게시글 목록 페이지에 게시글을 열었을떄,
// 게시글 하단에 게시글 목록을 보여줘야 할 경우
// 기존이라면  article 컴포넌트에서
// <div>
//   <h2>게시글{id}</h2>
//   <Articles />
// </div>  라고 했을 것이다.
// 이것을 라우팅 중첩을 이용해 변경해본다.

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
                <Route path="/articles/" element={<Articles />}>
                    <Route path=":id" element={<Article />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
