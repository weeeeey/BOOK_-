// [리렌더링 되는 상황]
// 1. 자신이 전달받은 props가 변경될떄
// 2. 자신의 state가 바뀔때
// 3. 부모 컴포넌트가 리렌더링 될때
// 4. forceUpdate 함수가 실행될때

// [현 프로그램 리렌더링 상황]
// 할 일 항목 1을 체크하면 App 컴포넌트의 state가 변경되면서 App컴포넌트가 리렌더링
// 부모가 리렌더링 되었으니 TodoList 리렌더링되고 그 안의 무수한 컴포넌트들도 리렌더링

// [최적화 하는 방법]
// React.memo 사용, onToggle-onRemove 함수 바뀌지 않게 하기, 불변성의 중요성
// TodoList 컴포넌트 최적화하기
// react-virtualized를 사용

import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useState, useCallback, useRef } from "react";

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
    // useState(createBulkTodos()) 라고 적었다면 렌더링 할 때마다 함수 실행 시켜서 데이터가 계속해서 자동 생성 됐을거임
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
