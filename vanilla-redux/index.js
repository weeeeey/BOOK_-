import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// [액션 타입과 액션 생성 함수 정의]
// 액션: 프로젝트 상태에 변화를 일으키는 것
// 액션 이름은 문자열 형태. 주로 대문자로 작성(고유한 이름)
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
// 액션 생성 함수 (type은 필수로 갖고 있어야함)
const toggelSwitch = () => {
    {
        type: TOGGLE_SWITCH;
    }
};
const increase = (diffrence) => {
    {
        type: INCREASE, diffrence;
    }
};
const decrease = () => {
    {
        type: DECREASE;
    }
};
// 초기값 설정
const initialState = {
    toggle: false,
    counter: 0,
};

// Reducer 함수 정의
// 변화를 일으키는 함수 (파라미터로 state와 action 받아옴)
// 리듀서가 맨 처음 호출될떄는 state가 undefined 이므로 initial을 기본값으로 줌
// 상태의 불변성을 유지하면서 업뎃 해야돼서 spread 연산자 이용함( 복잡해지면 immer 라이브러리 사용하기)
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle,
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.diffrence,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);

// 스토어 내장함수
// 이 함수는 상태가 업뎃 때마다 호출 된다
const render = () => {
    const state = store.getState();
    if (state.toggle) {
        divToggle.classList.add("active");
    } else {
        divToggle.classList.remove("active");
    }
    counter.innerText = state.counter;
};

render();
store.subscribe(render);
// 구독하기
// 스토어 상태 바뀔 때마다 render 호출
//
const listener = () => {
    console.log("상태가 업뎃됨");
};
const unsubscribe = store.subscribe(listener);
unsubscribe();

divToggle.onclick = () => {
    store.dispatch(toggelSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};
