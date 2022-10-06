// 1. yarn add 'react-router-dom'
// 2. index.js => BrowserRouter 라이브러리 추가 및 App 태그 감싸기
// 3. Route,Routes 라이브러리 소환
// 4. <Router path="주소 규칙" element={보여줄 컴포넌트} />

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
