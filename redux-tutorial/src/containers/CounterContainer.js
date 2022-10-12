// 컨테이너 컴포넌트: 리덕스와 연동되어 있는 컴포넌트
// 리덕스로부터 상태를 받아오고, 리덕스 스토어에 액션을 디스패치하기도 함

// 컴포넌트에서 redux store 에 접근하여 원하는 상태를 받아 오고,
// action도 dispatch 해 줄 차례

// [아래의 컴포넌트를 리덕스와 연동하기 위해 connet 함수를 사용]
// connect(mapStateToProps,mapDispatchToProps)(연동할 컴포넌트)
// 1번 파라미터: redux store 안의 state를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// 2번 파라미터: action 생성 함수를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
// connet 함수 호출 시 또 다른 함수 반환해줌. 그 뒤 연동할 컴포넌트를 파라미터로 넘어줌으로 리덕스와 연동된 컴포넌트를 만듬

import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// const mapStateToProps = (state) => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default connect(
    (state) => ({ number: state.counter.number }),
    (dispatch) => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
    })
)(CounterContainer);
