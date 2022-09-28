import { useState } from "react";

const Say = () => {
    // useState 함수에는 상태의 초깃값을 넣어줌.(객체 아니어도 됨. 클래스 컴포넌트와의 차이점)
    // 함수를 호출하면 배열이 반환되는데
    // 첫번째 원소(message)는 현재 상태, 두번째 원소(setMessage)에는 상태를 바꾸어 주는 함수(이것을 세터라고 함)
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("안녕하세요");
    const onClickLeave = () => setMessage("떠납니다");

    const [color, setColor] = useState("black");
    return (
        <div>
            <button onClick={onClickEnter}>엔터</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>

            <button style={{ color: "red" }} onClick={() => setColor("red")}>
                빨간색
            </button>
            <button
                style={{ color: "green" }}
                onClick={() => setColor("green")}
            >
                초록
            </button>
            <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
                파랑
            </button>
        </div>
    );
};

export default Say;
