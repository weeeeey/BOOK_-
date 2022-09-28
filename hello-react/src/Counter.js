// props는 부모 컴포넌트가 설정하는 값, state는 자식이
// state 종류
// 1. 클래스형 컴포넌트가 갖고 있는 state
// 2. 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state

import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        // 클래스형 컴포넌트에서 constructor를 작성할때는 super()를 호출해야함
        // super()가 호출되면 리액트의 Component클래스가 지닌 생성자 함수를 호출해줌
        // this.state 값에 초깃값 설정(객체 형식이어야 함)
        super(props);
        this.state = {
            number: 0,
        };
    }
    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 });
                        // this.state 로 값을 변경한다면 그것은 함수가 아니므로 onClick 콜백함수에 넣을수가 없음
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
