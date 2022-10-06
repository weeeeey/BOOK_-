// Navigate 컴포넌트는 화면에 보여주는 순간 다른 페이지로 이동 시킴
// eg. 로그아웃 상태에서 회원만 이용 가능한 페이지에 접근하면 로그인 페이지로 이동시켜줌

import { Navigate } from "react-router-dom";

const Mypage = () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} />;
    }
    return <div>마이 페이진</div>;
};

export default Mypage;
