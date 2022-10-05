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
