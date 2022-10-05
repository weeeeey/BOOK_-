import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useState, useCallback, useRef } from "react";
// props로 전달해야 할 함수를 만들 때는 useCallback 으로 감사는 것을 습관화 하기(컴포넌트 성능 최적화)
// 새로운 객체 만들때마다 id에 +1을 해줄거임. 그런데 id 값은 렌더링 되는 정보가 아니기 때문에 useRef 사용할거

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "리액트 기초 알아보기",
            checked: true,
        },
        {
            id: 2,
            text: "컴포넌트 스타일링 알아보기",
            checked: true,
        },
        {
            id: 3,
            text: "일정 관리 앱 만들어보기",
            checked: false,
        },
    ]);

    // 고유값으로 사용될 id
    // ref를 사용하여 변수 담기(리렌더링 되면 안되니)
    const nextId = useRef(4);

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
    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} />
            </TodoTemplate>
        </div>
    );
};

export default App;

// 나중에 추가 할 일정 항목에 대해서는 App에서 관리함
// App에서 useState를 이용하용 todo 상태를 정의 하고, TodoList의 props로 전달
