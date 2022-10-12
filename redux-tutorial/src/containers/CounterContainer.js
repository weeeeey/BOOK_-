import { useSelector, useDispatch } from "react-redux";
// connect 대신에 useSelector 사용해보기
// import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    // useDispatch를 통한 액션 디스패치
    return (
        <Counter
            number={number}
            onIncrease={() => dispatch(increase)}
            onDecrease={() => dispatch(decrease)}
        />
    );
};

// export default connect((state) => ({ number: state.counter.number }), {
//     increase,
//     decrease,
// })(CounterContainer);

export default CounterContainer;
