import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
    return (
        <Routes>
            {/* <Route path="주소 규칙" element={보여줄 컴포넌트 jsx} /> */}

            <Route path="/" element={<NewsPage />} />
            <Route path="/:category" element={<NewsPage />} />

            {/* '/'뒤에 ':'는 변수 취급 */}

            {/* useParams의 URL은 Key, Value 형식으로 짝지어 들어가기 때문에 
            숫자를 넣든 문자를 넣어 주소를 이동시킬 수 있다. 
            만약 URL이 /1인 경우 {두번째 줄}이 렌더링 된다. 
            /span처럼 문자를 넣은 경우에도 {두번째 줄}이 렌더링 된다. */}

            {/* 경로에 category URL이 없어도 뉴스 페이지 컴포넌트를 보여야하고 */}
            {/* 경로에 category URL이 있어도 뉴스 페이지 컴포넌트를 보여야함 */}
            {/* 따라서 라우트 컴포넌트를 두번 사용 */}
        </Routes>
    );
};
export default App;
