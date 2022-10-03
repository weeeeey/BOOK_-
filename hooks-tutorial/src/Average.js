import { useState, useMemo, useCallback } from "react";
// useCallback 은 useMemo와 비슷한 함수
// 주로 렌더링 성능 최적화 할 때 사용 (만들어놨던 함수를 재사용 할 수 있음)
// useCallback 이 없다면 onChange와 onInsert 함수는 리렌더링 될때마다 새로 만들어진 함수를 사용하게 됨
// useCallback 첫번째 인자로는 생성하고 싶은 함수, 두번쨰 인자에는 배열
const getAverage = (numbers) => {
    console.log("평균값 계산 중");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    // 컴포넌트가 처음 렌더링 될때만 함수 생성(빈 배열을 인자로 줬을 경우)
    // 기존 값을 조회하지 않고 바로 설정하기 때문에 빈 배열 넘겨줌
    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);
    // number 또는 list (인자로 넘겨준 것들) 가 바뀌었을때만 함수 생성
    // 기존의 number와 list를 조회해서 nextList를 수행하기 때문에 인자로 넣어줌
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);
    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값</b> {avg}
            </div>
        </div>
    );
};
export default Average;
