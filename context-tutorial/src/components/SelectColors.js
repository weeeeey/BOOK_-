// 왼쪽 클릭하면 큰 사각형 색상 변경
// 오른쪽 클릭하면 작은 사각형 색상 변경
import { ColorConsumer } from "../constexts/Color";

const colors = ["red", "yellow", "orange"];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 고르시오.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: "flex" }}>
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: "24px",
                                    height: "24px",
                                    cursor: "pointer",
                                }}
                                onClick={() => actions.setColor(color)}
                                // onContextMenu 는 마우스 오른쪽 버트 클릭 이벤트 처리
                                onContextMenu={(e) => {
                                    // 오른쪽 클릭시 브라우저 메뉴 나타나는 이슈 제거
                                    e.preventDefault();
                                    actions.setSubColor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColors;
