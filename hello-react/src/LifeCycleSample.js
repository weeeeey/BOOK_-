// 라이프 사이클 메서드
// [특징]: 컴포넌의 수명-페이지에 렌더링 되기 전 준비 과정에서 시작하여 페이지에서 사라질때 끝남
//        클래스형 컴포넌트에서만 사용 가능 ( 함수에서는 Hooks 기능으로 대체 )
// [종류] :Will 접두사 붙은 메소드(작업 전 실행), Did 붙은 (작업 작동 후) -> 총 9가지

// [카테고리] : 마운트(페이지에 나타남), 업데이트(컴포넌트 정보를 업데이트), 언마운트(사라짐)
// -마운트-: DOM이 생성되고 웹 브라우저에 나타는 것.
//           호출하는 메소드: constructor->getDerivedStateFromProps->render->componentDidMount
// -업데이트-: props가 바뀔 때, state가 바뀔때, 부모 컴포넌트가 리렌더링, this.forceUpdate로 강제로 렌더링을 트리거할때
//           호출 메소드: getDerivedStateFromProps->shouldComponentUpdate
// ->true 반환시 render 호출 / false 반환 시 작업 취소
// ->render -> getSnapshotBeforeUpdate
// ->웹 브라우저상의 실제 DOM 변화 -> componentDidUpdate
// -언마운트- : 컴포넌트를 DOM에서 제거하는 것 / 호출 메서드: componentWillUnmount

import { Component } from "react";
class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };
    myRef = null;

    constructor(props) {
        super(props);
        console.log("constructor");
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return nextState.number % 10 !== 4;
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", prevProps, prevState);
        if (snapshot) {
            console.log("업데이트 직전 색상: ", snapshot);
        }
    }
    render() {
        console.log("render");
        const style = {
            color: this.props.color,
        };
        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
