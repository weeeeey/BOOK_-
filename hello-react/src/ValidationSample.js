import { Component } from "react";
import "./ValidationSample.css";

// HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼
// 리액트 프로젝트 내부에서 DOM에 이름을 다는 것을 ref(레퍼런스)라고 한다.
// 웬만하면 ref을 다룰때 id 사용 x (HTML에서 Id는 유일해야 하는데 컴포넌트를 여러번 사용할 경우 중복 id 발생)
// ref로 id를 꼭 사용해야한다면 id에 추가 텍스트 붙이기 button01,button02 처럼

class ValidationSample extends Component {
    state = {
        password: "",
        clicked: false,
        vaildated: false,
    };
    handleChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            vaildated: this.state.password === "0000",
        });
    };
    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={
                        this.state.clicked
                            ? this.state.vaildated
                                ? "success"
                                : "failure"
                            : ""
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
