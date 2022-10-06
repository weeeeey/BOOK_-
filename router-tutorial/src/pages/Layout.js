import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const goArticles = () => {
        navigate("/articles");
        // articles 경로로 이동
    };
    return (
        <div>
            <header
                style={{ background: "lightgray", padding: 16, fontSize: 24 }}
            >
                header
            </header>
            <button onClick={goBack}>뒤로 가기</button>
            <button onClick={goArticles}>게시글 목록</button>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
