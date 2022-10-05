import { useState, useCallback } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue("");
            e.preventDefault(); //submit 이벤트는 브라우저 새로고침을 발생시키니, 그것을 방지
        },
        [onInsert, value]
    );
    return (
        // onSubmit 함수가 호출되면, props로 받아 온 onInsert 함수에 현재 value 값을 파라미터로 넣어서 호출하고,
        // 현재 value 값을 초기화한다.(onSubmit 대신에 버튼의 onClick 이벤트로도 처리 가능)
        // onSubmit를 만든 이유는 input에서 엔터를 눌렀을때도 처리 할 수 있음
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
