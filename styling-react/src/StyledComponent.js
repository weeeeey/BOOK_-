// js 파일 안에 스타일을 선언하는 방식 (CSS in JS)
// CSS-in-Js 라이브러리는 정말 많은데 이 중 styled-components를 실습(대체품 emotion)
// yarn add styled-components
// 장점: props 값으로 전달해 주는 값을 쉽게 스타일에 적용할 수 있다.
import styled, { css } from "styled-components";

const Box = styled.div`
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(2, 255, 255, 0.9);
    }

    ${(props) =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
);

export default StyledComponent;
