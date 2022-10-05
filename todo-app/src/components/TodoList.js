import React, { useCallback } from "react";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
    // List 컴포넌트를 사용하기 위해 rowRenderer 라는 함수 작성
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos]
    );
    return (
        <List
            // props: 해당 리스트 전체 크기와 각 항목의 높이, 각 항목 렌더링 할때 사용할 함수, 배열
            // 이 props들로 자동 최적화
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{ outline: "none" }}
        />
    );
};

export default React.memo(TodoList);
