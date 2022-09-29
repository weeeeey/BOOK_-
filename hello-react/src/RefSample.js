import { Component } from "react";
import React from "react";

class RefSample extends Component {
    input = React.createRef();
    // createRef 를 사용하여 ref를 만들려면
    // 컴포넌트 내부에서 멤버 변수로 React.createRef를 담아준다.
    // 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 ref설정 완료
    handleFocus = () => {
        this.input.current.focus();
        // 설정 후 ref를 설정해준 DOM에 접근하려면 this.input.current를 조회하면됨
    };

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}
// ref 생성하는 또다른 방법
{
    /* <input ref={(ref)=>this.input=ref} /> */
}
export default RefSample;
