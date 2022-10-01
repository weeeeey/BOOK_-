import { useState } from "react";

const IterationSample = () => {
    const [names, setName] = useState([
        { id: 1, text: "aa" },
        { id: 2, text: "bb" },
        { id: 3, text: "cc" },
        { id: 4, text: "dd" },
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        // push 대신에 concat 쓰는 이유
        // push를 사용하면 기존 배열에 추가하게 됨
        // 리액트는 기존 상태를 그대로 두고 새로운 값으로 설정(불변성 유지) 해야 하므로 concat 사용
        const nextName = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setName(nextName);
        setInputText("");
    };
    const nameList = names.map((name) => <li key={name.id}> {name.text} </li>);
    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;
