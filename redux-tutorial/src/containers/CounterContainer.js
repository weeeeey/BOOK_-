// 이 컴포넌트를 리덕스와 연동할려면 connect 함수 사용하면 됨
// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// 첫번째 인자: 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 함수
// 두번째 인자: 액션 생성 함수를 컴포넌트의 props로 넘겨주김 위한 함수

import { connect } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} increase={increase} decrease={decrease} />;
};

const mapStateToProps = (state) => ({
    number: state.Counter.number,
});
const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        console.log("increase");
    },
    decrease: () => {
        console.log("decrease");
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
