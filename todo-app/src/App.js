import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useState, useCallback, useRef } from "react";
// 현재 프로젝트에서는 todos 배열이 업데이트 되면 onToggle과 onRemove 함수도 새롭게 바뀐다.
// 배열 상태 업뎃 과정에서 최산 todos를 참조하기 때문
//[해결법] 1.useState의 함수형 업뎃 기능 사용  or 2. useReducer 사용

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

// [함수형 업데이트]: setTodos를 사용할 때, 새로운 상태를 파라미터로 넣는 대신 / 상태 업데이트를 어떻게 할 지 정의해주는 업데이트 함수
// useCallback 두번째 파라미터에 todos를 넣을 필요 없어짐
const App = () => {
    const [todos, setTodos] = useState(createBulkTodos);
    const nextId = useRef(4);

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos((todos) => todos.concat(todo));
        nextId.current += 1;
    }, []);

    const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
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
