import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import { useState, useCallback } from "react";
// App에서 카테고리 상태를 useState로 관리
// onSelect => 카테고리 값을 업데이트 하는 함수

const App = () => {
    const [category, setCategory] = useState("alls");
    const onSelect = useCallback((category) => setCategory(category), []);
    return (
        <div>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
            {/* 해당하는 카테고리 뉴스들 긁어오기 위해 뉴스 컴포넌트에도 props 전달 */}
        </div>
    );
};
export default App;
