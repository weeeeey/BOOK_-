// Context API 는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을때 유용함
// eg. 로그인 정보, App환경 설정, 테마 등등
// 리덕스, 리액트 라우터, styled-component등은 Context API 기반으로 구현됨

import ColorBox from "./components/ColorBox";
import ColorContext from "./constexts/color";

// Provider를 통해 Context의 value 변경
const App = () => {
    return (
        // Context 오브젝트에 포함된 React 컴포넌트인 Provider는
        // context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다.
        // Provider는 value prop을 받아서 하위에 있는 컴포넌트들에게 전달함(전달 받는 컴포넌트 수에 제한 없음)
        // 중첩 Provider도 가능하며 하위 Provider가 더 강력함
        <ColorContext.Provider value={{ color: "red" }}>
            <ColorBox></ColorBox>
        </ColorContext.Provider>
    );
};

export default App;
