import logo from "./logo.svg";
import "./App.css";

function App() {
    const name = "리액트";

    return <div className="react">{name}</div>;
    // 기존 css에서는 클래스를 지정할때 class = 으로 했다면
    // jsx 에서는 className 으로 지정
}

export default App;
