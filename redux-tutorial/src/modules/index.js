// 루트 리듀서: 현재 todos와 counter에 대한 리듀서를 만들었음
// 나중에 createStore 함수를 사용하여 스토어를 만들때 리듀서를 하나만 사용해야 함
// 그래서 기존에 만든 리듀서들을 하나로 합쳐줘야 해서
// index.js 파일을 만들어서 리덕스에서 제공하는
// conmbineReducers 라는 유틸 함수 사용한다

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
