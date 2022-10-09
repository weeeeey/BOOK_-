// 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 작성하는 방법
// Ducks 패턴이라고 부름
// Ducks 패턴을 사용하여 작성한 코드를 모듈 이라고 함

// 액션 타입 정의
// 대문자로 정의 = "모듈 이름/ 액션 이름"  => 대형 프로젝트에서 액션 이름 충돌 방지
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수 만들기
// export 키워드 붙여주기(다른 파일에서 불러와 사용할려고)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태 및 리듀서 함수 만들기
// cf) export 는 여러 개를 내보낼수 있지만 export default 는 한개만 내보냄
//      export 한건 부를때 import {increase,decrease} from aasd
//      export default는 부를때 import counter from asdasd
const InitialState = {
    number: 0,
};

function counter(state = InitialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1,
            };
        case DECREASE:
            return {
                number: state.number - 1,
            };
        default:
            return state;
    }
}

export default counter;

// 루트 리듀서: 현재 todos와 counter에 대한 리듀서를 만들었음
// 나중에 createStore 함수를 사용하여 스토어를 만들때 리듀서를 하나만 사용해야 함
// 그래서 기존에 만든 리듀서들을 하나로 합쳐줘야 해서
// index.js 파일을 만들어서 리덕스에서 제공하는
// conmbineReducers 라는 유틸 함수 사용한다
