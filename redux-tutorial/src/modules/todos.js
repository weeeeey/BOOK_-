import { createAction, handleAction } from "redux-actions";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// export const changeInput = (input) => ({
//     type: CHANGE_INPUT,
//     input,
// });

// let id = 3;
// export const insert = (text) => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false,
//     },
// });

// export const toggle = (id) => ({ type: TOGGLE, id });
// export const remove = (id) => ({ type: REMOVE, id });

// [[createAction 생성시 파라미터가 필요한 경우]]
// const MY_ACTION = 'sample/MY_ACTION'
// const myAction = createAction(MY_ACTION)
// const action = myAction('hello world')

// createAction으로 액션 생성시 액션에 필요한 추가 데이터는 payload라는 이름을 사용함
// payload 에 변형을 주고 싶다면 함수를 따로 선언 하면 됨

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
// 위 함수들 경우 두번쨰 인자 필요없지만 명시해줌으로써 시인성 올림
let id = 3;
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));

const initialState = {
    input: "",
    todos: [
        {
            id: 1,
            text: "리덕스 기초",
            done: true,
        },
        {
            id: 2,
            text: "리액트와 리덕스 사용하기",
            done: false,
        },
    ],
};

// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input,
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo),
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo
//                 ),
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id),
//             };
//         default:
//             return state;
//     }
// }

// createAction으로 만든 action 생성 함수는 파라미터로 받아 온 값을 이름으로 사용하는게 아닌 action.payload 라는 공통적 이름을 사용함
// 따라서 action.payload 값을 조회해서 업뎃해줘야함

const todos = handleAction({
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => ({
        ...state,
        todos: state.todos.concat(action.payload),
    }),
    // 객체 비구조화 할당 문법을 통해 payload가 무엇인지 명확시 해줌
    [TOGGLE]: (state, { payload: id }) => ({
        ...state,
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    }),
});
export default todos;
