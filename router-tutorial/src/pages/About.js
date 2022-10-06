import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();
    // useLocation 은 location 객체를 반환함
    // ****[location 객체가 갖고 있는것들]****
    // pathname: 현재 주소의 경로(쿼리스트링 제외)
    // search: 맨 앞의? 문자를 포함한 쿼리스트링 값
    // hash: 주소의 # 문자열 뒤의 값(구형 브라우저에서 사용)
    // state: 페이지로 이동할 떄 임의로 넣을 수 있는 상태 값
    // key: location 객체의 고유 값. 초기에는 default. 페이지 변경시 고유 값 생성

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로젝트</p>
            <p>쿼리스트링: {location.search}</p>
            {/* 주소창에 http://localhost:3000/about?asdasd 이라고 적으면 쿼리스트링:?asdasd가 나옴*/}
        </div>
    );
};

export default About;
