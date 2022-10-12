import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
// 스토어를 만들때 리듀서 하나만 사용하므로 묶어줘야함
