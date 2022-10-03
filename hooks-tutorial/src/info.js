import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    useEffect(() => {
        console.log("렌더링 완료");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
        };
        // return() : cleanup(뒷정리 함수)은 언마운트 되기 전이나 업데이특 직전 수행하고 싶은걸 보여줌
        // 언마운트 되기 전에만 수행하고 싶으면 두번째 인자에 빈배열 넣으면 됨
    }, [name]);
    // useEffect 두번째 인자로 빈 배열을 넘겨주면 처음 렌더링 될때만 나오고 그 뒤로 안나옴
    // 특정 값이 업데이트 될때만 실행하고 싶을때는 두번째 파라미터에 전달되는 배열에 검사하고 싶은 값을 넣어주면 됨
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                    <div></div>
                    <b>닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
