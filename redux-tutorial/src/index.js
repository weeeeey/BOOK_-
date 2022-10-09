// 스토어를 만들고 리액트에 리덕스를 적용하는 작업은 src의 index.js 에서 이루어짐

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// 스토어 만들기
import { createStore } from "react-redux";
import rootReducer from "./modules";
// 리액트에서 스토어를 사용할 수 있도록 Provider 컴포넌트로 감싸줄 용도
import Provider from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // 이 컴포넌트를 사용 할 때는 store을 속성으로 전달해야함
    <Provider store={store}>
        <App />
    </Provider>
);
