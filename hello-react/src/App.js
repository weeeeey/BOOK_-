import logo from "./logo.svg";
import "./App.css";

function App() {
    const name = "리액트";
    const style = {
        backgroundColor: "black",
        color: "aqua",
        fontSize: "30px", //px라고 명명하고 싶으면 감싸줘야함
        fontWeight: "bold",
        padding: 16, // 단위 없이 안감싸주면 기본 단위인 px로 적용됨
    };
    return <div style={style}>{name}</div>;
    // <div style={{backgruondColor:"black", color:"aqua"}}>{name}</div>
}

export default App;
