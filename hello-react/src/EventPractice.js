// input 여러개를 다루는 법
import { Component } from "react";

class EventPractice extends Component {
    state = {
        username: "",
        message: "",
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 키값으로 사용됨.
        });
    };

    handleClick = () => {
        alert(this.state.username + ":" + this.state.message);
        this.setState({
            username: "",
            message: "",
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleClick();
        }
    };
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    // 요 name이 우리가 임의메서드에서 다룬 name
                    placeholder="사용자명 입력"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
