// 컴포넌트 선언은 함수||클래스형
// 클래스형 선언 이점: state 기능, 라이프 사이클 기능 사용 가능, 임의 메소드 정의

// 클래스형 컨포넌트 주의점
// 1. render 함수가 필수
// 2. 그 안에서 보여줘야 할 JSX를 반환해야함

// 함수 컴포넌트 특징
// [장점] 1. 클래스보다 선언하기 편함
//        2. 메모리 자원 덜 사용
// [단점] state와 라이프 사이클 api 사용 불가 (지금은 Hooks로 어느정도 해결)

import { Component } from "react";

class App extends Component {
    render() {
        const name = "react";
        return <div className="react">{name}</div>;
    }
}

export default App;
