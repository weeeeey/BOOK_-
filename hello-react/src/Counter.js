// props는 부모 컴포넌트가 설정하는 값, state는 자식이
// state 종류
// 1. 클래스형 컴포넌트가 갖고 있는 state
// 2. 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state

import { Component } from "react";

class Counter extends Component {
    // constructor을 사용하지 않고 state의 초깃값 설정 하는 법
    state = {
        number: 0,
        fixedNumber: 250,
    };
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>클릭 수: {number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
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
