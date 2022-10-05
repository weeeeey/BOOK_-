import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useState, useCallback, useRef } from "react";
// props로 전달해야 할 함수를 만들 때는 useCallback 으로 감사는 것을 습관화 하기(컴포넌트 성능 최적화)
// 새로운 객체 만들때마다 id에 +1을 해줄거임. 그런데 id 값은 렌더링 되는 정보가 아니기 때문에 useRef 사용할거

function createBulkTodos() {
    const arr = [];
    for (let i = 0; i <= 2500; i++) {
        arr.push({
            id: i,
            text: `할일 ${i}`,
            checked: false,
        });
    }
    return arr;
}
const App = () => {
    const [todos, setTodos] = useState(createBulkTodos);

    // 고유값으로 사용될 id
    // ref를 사용하여 변수 담기(리렌더링 되면 안되니)
    const nextId = useRef(2502);

    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos]
    );

    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
            // 내가 전달한 id와 같지 않아야 true, 같으면 false가 되어서 필터로 걸러져서 지워짐
        },
        [todos]
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },
        [todos]
    );
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

// 나중에 추가 할 일정 항목에 대해서는 App에서 관리함
// App에서 useState를 이용하용 todo 상태를 정의 하고, TodoList의 props로 전달
