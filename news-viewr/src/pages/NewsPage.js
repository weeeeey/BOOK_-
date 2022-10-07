import NewsList from "../components/NewsList";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";

const NewsPage = () => {
    const params = useParams();
    const category = params.category || "all";
    // 카테고리가 선택되지 않았으면 기본값 'all'

    return (
        <div>
            {/* 현재 선택된 카테고리 값을 URL 파라미터를 통해 사용할 것이므로 */}
            {/* 카테코리 컴포넌트에 현자 선택된 카테고리 값과 onSelect함수 전달할 필요x */}
            <Categories />
            <NewsList category={category} />
        </div>
    );
};

export default NewsPage;
