import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useReducer, useCallback, useRef } from "react";
// 눈에 보이는 부분만 렌더링 하고 이외 부분은 렌더링 하지 않고 크기만 차지하게끔 하는 방법
// react-virtualized

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
        undefined,
        createBulkTodos
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
