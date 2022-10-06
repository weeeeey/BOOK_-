// a 태그는 브라우저에서 페이지를 새로 불러오기 때문에 SPA 위배
// Link 컴포너는트 사용
// LinK 컴포넌트도 a 태그를 사용하지만, 페이지를 새로 불러오는 것을 막고
// History API를 통해 주소의 경로만 바꿔줌

// <LinK to="경로"> 링크 이름 </LinK>

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="./profile/velopert">velopert의 프로필</Link>
                </li>
                <li>
                    <Link to="./profile/gildong">길동의 프로필</Link>
                </li>
                <li>
                    <Link to="./profile/asdt">존재하지 않아유</Link>
                </li>
                <li>
                    <Link to="./articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
