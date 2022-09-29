import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
    };
    // 임의 메서드로 만든 메서드를 따로 바인딩 없이 선언하는 방법(by 화살표 함수)

    handleChange = (e) => {
        this.setState({
            message: e.target.value,
        });
    };

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: "",
        });
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
