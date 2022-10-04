// 일반 CSS 방식으로 스타일링 하는 방법
// 클래스 이름은 컴포넌트명-클래스 로 지어서 중복 되는 클래스 피한다
// eg) App-logo

import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <img src={logo} className="logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
