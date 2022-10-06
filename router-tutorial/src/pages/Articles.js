import { Link, Outlet } from "react-router-dom";
// Outlet 컴포넌트
// 라우트의 children으로 들어가는 JSX 요소를 보여주는 역할

const Articles = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Articles;
