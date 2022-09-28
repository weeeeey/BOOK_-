import logo from "./logo.svg";
import "./App.css";

function App() {
    const name = "리액트";
    return (
        <div>
            <div className="react">{name}</div>
            <input />
            {/* <input></input> */}
            {/* HTML에는 input 이나 br 태그 등 닫는 태그가 없는 것들이 있음 */}
            {/* 하지만 jsx에서는 안닫아주면 오류 뜸 */}
        </div>
    );
}

export default App;
