import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    // 첫번쨰 인자는 리듀서 함수
    // 두번째 인자에는 해당 리듀셔의 기본 값
    // useReducer 훅을 사용하면 state(현재 가르키고 있는 값),dispatch(액션을 발생시키는 함수)를 받아옴
    // 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 뺴내 오기 가능해짐
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>
            </p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        </div>
    );
};

export default Counter;
