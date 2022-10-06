import { useSearchParams } from "react-router-dom";
// aoubt?detail=true&mode=20 같은 쿼리스트링 일 경우
// key 값과 value를 나누기 위해
// useSearchParams 를 사용해서 분리한다.
// 쿼리 파라미터일 경우 무조건 문자열 타입이므로 숫자형 다룰땐 parseInt 사용
const About = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const detail = searchParam.get("detail");
    const mode = searchParam.get("mode");

    const onToggleDetail = () => {
        setSearchParam({ mode, detail: detail === "true" ? false : true });
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParam({ detail, mode: nextMode });
        console.log(mode);
    };
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로젝트</p>
            <p>detail:{detail}</p>
            <p>mode:{mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode+1</button>
        </div>
    );
};

export default About;
