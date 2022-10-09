// 스토어를 만들고 리액트에 리덕스를 적용하는 작업은 src의 index.js 에서 이루어짐

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore } from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
