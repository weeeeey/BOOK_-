import { createAction, handleAction } from "redux-actions";
// 액션 타입, 액션 생성 함수, 리듀서 함수를 한 곳에 묶음

// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수 (이 함수를 다른 파일에서 불러와 사용)
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// [createAction]을 통한 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const initialState = {
    number: 0,
};

// 리듀서 함수 만들기
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return { number: state.number + 1 };
//         case DECREASE:
//             return { number: state.number - 1 };
//         default:
//             return state;
//     }
// }

// [handleActions 함수를 통한 reducer 함수 생성]
const counter = handleAction(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState
);
export default counter;
