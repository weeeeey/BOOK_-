import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
    };
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                {/* input에 담은 메시지를 this.setState를 통해 state.message 값을 변경해주고 */}
                {/* 버튼에 클릭 이벤트가 발생했을시 alert를 통해 해당 문구를 띄워줌 */}
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력하세요"
                    value={this.state.message}
                    onChange={(e) => {
                        this.setState({
                            message: e.target.value,
                        });
                    }}
                />
                <button
                    onClick={() => {
                        alert(this.state.message);
                        this.setState({
                            message: "",
                        });
                    }}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;
