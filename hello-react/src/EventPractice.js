import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
    };

    // 임의 메서드를 만들어서 전달하는 방법.
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // 함수가 호출될 떄 this는 호출부에 따라 결정됨.
        // 그래서 특정 HTML요소의 이벤트로 등록되는 과정에서 메서드와 this간 관계가 끊어질 수 있음.
        // 이를 방지하기 위해 바인딩 과정을 거쳐줌
        // 하지 않을시 this가 undefined를 가리키게 됨
    }

    handleChange(e) {
        this.setState({
            message: e.target.value,
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: "",
        });
    }

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
