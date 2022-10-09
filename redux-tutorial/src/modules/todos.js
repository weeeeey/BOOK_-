// 액션 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수
export const changeInput = (input) => ({
    type: CHANGE_INPUT,
    input,
});

let id = 3; //insert 호출 때마다 1씩 더해줄거
export const insert = (text) => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false,
    },
});

export const toggle = (id) => ({
    type: TOGGLE,
    id,
});
export const remove = (id) => ({
    type: REMOVE,
    id,
});

// 초기 상태 및 리듀서 함수
const initialState = {
    input: "",
    todos: [
        { id: 1, text: "리덕스 기초 배우기", done: true },
        {
            id: 2,
            text: "리액트와 리덕스 사용하기",
            done: false,
        },
    ],
};
function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input,
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo),
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                ),
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        default:
            return state;
    }
}

// 루트 리듀서: 현재 todos와 counter에 대한 리듀서를 만들었음
// 나중에 createStore 함수를 사용하여 스토어를 만들때 리듀서를 하나만 사용해야 함
// 그래서 기존에 만든 리듀서들을 하나로 합쳐줘야 해서
// index.js 파일을 만들어서 리덕스에서 제공하는
// conmbineReducers 라는 유틸 함수 사용한다

export default todos;
