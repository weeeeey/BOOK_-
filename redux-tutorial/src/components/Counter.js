// components 폴더에는 프렌제테이셔널 컴포넌트 작성 (상태 관리x, props만 받아와서 화면에 UI 보여주는 용도)
const Counter = ({ number, onIncrese, onDecrease }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrese}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;
