import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useState } from "react";

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
    return (
        <div>
            <TodoTemplate>
                <TodoInsert />
                <TodoList todos={todos} />
            </TodoTemplate>
        </div>
    );
};

export default App;

// 나중에 추가 할 일정 항목에 대해서는 App에서 관리함
// App에서 useState를 이용하용 todo 상태를 정의 하고, TodoList의 props로 전달
