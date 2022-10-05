import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useReducer, useCallback, useRef } from "react";
// 현재 프로젝트에서는 todos 배열이 업데이트 되면 onToggle과 onRemove 함수도 새롭게 바뀐다.
// 배열 상태 업뎃 과정에서 최산 todos를 참조하기 때문
//[해결법] 1.useState의 함수형 업뎃 기능 사용  or 2. useReducer 사용
// (둘다 성능 비슷함)

function createBulkTodos() {
    const arr = [];
    for (let i = 1; i <= 2500; i++) {
        arr.push({
            id: i,
            text: `할일 ${i}`,
            checked: false,
        });
    }
    return arr;
}
function todoReducer(todos, action) {
    switch (action.type) {
        case "INSERT":
            return todos.concat(action.todo);
        case "REMOVE":
            return todos.filter((todo) => todo.id !== action.id);
        case "TOGGLE":
            return todos.map((todo) =>
                todo.id === action.id
                    ? { ...todo, checked: !todo.checked }
                    : todo
            );
        default:
            return todos;
    }
}
const App = () => {
    const [todos, dispatch] = useReducer(
        todoReducer,
        undefined, //초기 상태
        createBulkTodos //초기 상태를 만들어 주는 함수(맨 처음 렌더링 될때만 함수 호출)
    );
    const nextId = useRef(4);

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        dispatch({ type: "INSERT", todo });
        nextId.current += 1;
    }, []);

    const onRemove = useCallback((id) => {
        dispatch({ type: "REMOVE", id });
    }, []);

    const onToggle = useCallback((id) => {
        dispatch({ type: "TOGGLE", id });
    }, []);
    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList
                    todos={todos}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            </TodoTemplate>
        </div>
    );
};

export default App;
