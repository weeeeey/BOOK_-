// 페이지 주소 정의 시 유동적인 값을 넣을때가 있음
// 1. URL 파라미터 /profile/velopert
// 2. 쿼리스트링 /articles?page=1&keyword=react

// 1번은 경로에 유동적인 값 넣음(ID/이름으로 특정 데이터 조회시 사용)
// 2번은 주소 뒷부분에 ? 문자열 이후 key=value 값을 정의하면 &로 구분한형태
// (키워드 검색, 페이지네이션 등 데이터 조회에 필요한 옵션 전달)

import { Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default App;
