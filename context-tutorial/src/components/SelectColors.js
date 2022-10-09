// 왼쪽 클릭하면 큰 사각형 색상 변경
// 오른쪽 클릭하면 작은 사각형 색상 변경
import { Component } from "react";
import ColorContext from "../constexts/Color";

const colors = [
    "red",
    "yellow",
    "orange",
    "green",
    "blue",
    "purple",
    "darkblue",
];

class SelectColors extends Component {
    static contextType = ColorContext;
    // 이렇게 static을 잡아주면 this.conext를 조회했을때
    // 현재 Context의 value를 가리키게 된다
    // 만약 setColor를 호출하고 싶다면 this.context.actions.setColor를 호출하면 됨

    handleSetColor = (color) => {
        this.context.actions.setColor(color);
    };
    handleSetSubColor = (color) => {
        this.context.actions.setSubColor(color);
    };

    render() {
        return (
            <div>
                <h2> 색상을 선택하세용</h2>
                <div style={{ displey: "flex" }}>
                    {colors.map((color) => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: "64px",
                                height: "64px",
                                cursor: "pointer",
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                this.handleSetSubColor(color);
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default SelectColors;
