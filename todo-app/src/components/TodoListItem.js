import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ todo }) => {
    // todo에 담겨진 것들과 변수명이 같아야 받아올 수 있음
    const { text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className={cn("checkbox", { checked })}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
