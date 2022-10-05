// produce 함수는 두가지 파라미터를 받음
// produce(originalstate, fun)
// 첫번째는 수정하고 싶은 state, 두번째는 state를 어떻게 업뎃할지 정의하는 함수
// 두번째 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신 하면서 새로운 상태 생성
import produce from "immer";

const originalState = [
    {
        id: 1,
        todo: "전개 연산자와 배열 내장 함수로 불변성 유지하기",
        checked: true,
    },
    {
        id: 2,
        todo: "immer로 불변성 유지하기",
        checked: false,
    },
];

const nextState = produce(originalState, (draft) => {
    // id기 2인 항목의 checked 값을 true로 설정
    const todo = draft.find((t) => t.id === 2);
    todo.checked = true;

    // 배열에 새로운 데이터 추가
    draft.push({
        id: 3,
        todo: "일정 관리 앱에 immer 적용하기",
        checked: false,
    });
    // id=1 인 항목을 제거하기
    draft.splice(
        draft.findIndex((t) => t.id === 1),
        1
    );
});
