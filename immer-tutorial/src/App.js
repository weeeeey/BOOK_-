import { useRef, useCallback, useState } from "react";
import produce from "immer";
// produce를 사용하면 객체 안에 있는 값을 직접 수정하거나, 배열에 직접적인 변화를 일으키는
// push와 slice등의 함수를 사용해도 무방함
// onRemove 같은 경우 filter가 더 깔끔할 수 있음.
// 불변성 유지 코드가 깔끔하지 않을 경우 produce 사용한다.

const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: "", username: "" });
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });

    //input 수정을 위한 함수
    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setForm(
                produce(form, (draft) => {
                    draft[name] = value;
                })
                // 전개 연산자(...) 필요 없이 produce로 만져줌
            );
        },
        [form]
    );
    // form 등록 함수
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username,
            };
            // arr에 새항목 등록
            setData(
                produce(data, (draft) => {
                    draft.array.push(info);
                })
            );
            setForm({
                name: "",
                username: "",
            });
            nextId.current += 1;
        },
        [data, form.name, form.username]
    );
    const onRemove = useCallback(
        (id) => {
            setData(
                produce(data, (draft) => {
                    draft.array.splice(
                        draft.array.findIndex((info) => info.id === id),
                        1
                    );
                })
            );
        },
        [data]
    );
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map((info) => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
