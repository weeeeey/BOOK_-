import { useReducer } from "react";
// 컴포넌트 상태 관리를 위해 가장 많이 쓰는건 useState이다
// 좀더 복잡한 상태 관리가 필요할때 리듀서 사용
// reducer는 이전 상태와 action을 합쳐, 새로운 state를 만드는 조작
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = () => {
    // state: 컴포넌트에서 사용할 상태
    // dispatch: 첫번째 인자인 reducer 함수 실행. 컴포넌트 내에서 state의 업데이트 위해 사용하는 함수
    // reducer: 컴포넌트 외부에서 state를 업데이트 하는 함수. (dispatch 함수에 의해 실행 됨)
    // 현재 state,action을 인자로 받아, 기존의 state를 대체하여 새로운 state를  반환
    // action 객체에는 어떤 행동인지를 나타내는 type 속성과 관련 데이터 payload가 있음
    // 초기 state
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        nickname: "",
    });
    const { name, nickname } = state;
    const onChange = (e) => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                    <div></div>
                    <b>닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
