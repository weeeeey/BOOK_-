import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// BrowserRouter 컴포넌트는 WA에 HTML5의 Histoey API를 사용하여
// 페이지를 새로 불러오지 않고도 주소를 변경하고
// 현재 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있게 해줌

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
