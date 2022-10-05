import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

import { React } from "react";
// useMemo 사용 (컴포넌트 만들고 감싸주기만 하면 됨. export 부분에서)
// 컴포넌트의 props가 바뀌지 않았다면, 리렌더링 하지 않도록 설정
// 클래스 컴포넌트의 shouldComponentUpdate 라는 라이프 사이클과 용도 같음

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    // todo에 담겨진 것들과 변수명이 같아야 받아올 수 있음
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div
                className={cn("checkbox", { checked })}
                onClick={() => onToggle(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);
