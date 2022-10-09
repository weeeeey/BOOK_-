// 소규모 프로젝트 : 컴포넌트가 가진 state 만으로 관리 가능
// 대규모일 때 힘듬
// 리덕스 사용시: 상태 업뎃 로직 모듈 관리 용이
// react-redux 라이브러리에서 제공하는 connect(유틸 함수)와 Provider(컴포넌트)를 사용해서
// 리덕스 작업 처리

// 리덕스 => 1.프레젠테이셔널 컴포넌트 + 2.컨테이너 컴포넌트
// 1. props를 받아와서 화면에 보여주는 컴포넌트
// 2. 리덕스와 연동되어 있는 컴포넌트. 리덕스로부터 상태를 받아오거나 스토어에 액션을 디스패치하기도 함

import Counter from "./components/Counter";
import Todos from "./components/Todo";

const App = () => {
    return (
        <div>
            <Counter number={0} />
            <hr />
            <Todos />
        </div>
    );
};

export default App;
