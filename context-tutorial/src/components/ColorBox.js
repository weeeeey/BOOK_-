import ColorContext from "../constexts/color";

const ColorBox = () => {
    return (
        // Consumer 사이에 중괄호를 열어서 함수를 넣어줌
        // 이러한 패턴을 Function as a child 혹은 Render Props 라고 함
        // children 자리에 일반 JSX나 문자열이 아닌 [함수]를 전달

        <ColorContext.Consumer>
            {(value) => (
                <div
                    style={{
                        width: "64px",
                        height: "64px",
                        background: value.color,
                    }}
                />
            )}
        </ColorContext.Consumer>
    );
};

export default ColorBox;
