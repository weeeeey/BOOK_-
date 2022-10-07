// Context API 는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을때 유용함
// eg. 로그인 정보, App환경 설정, 테마 등등
// 리덕스, 리액트 라우터, styled-component등은 Context API 기반으로 구현됨

import ColorBox from "./components/ColorBox";
import ColorContext from "./constexts/color";

// Provider를 통해 Context의 value 변경
const App = () => {
    return (
        <ColorContext.Provider value={{ color: "red" }}>
            <ColorBox></ColorBox>
        </ColorContext.Provider>
    );
};

export default App;
