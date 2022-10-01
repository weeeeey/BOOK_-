// map
// arr.map(callback,[thisArg])
// callback의 파라미터 => currentValue, index, array
// thisArg:(선택항목) 콜백 함수 내부에서 사용할 this 레퍼런스

// key값
// 리액트에서 키는 컴포넌트 배열을 랜더링 할 때 어떤 원소에 변동이 있는지 알기 위해 사용
// 키 값은 언제나 유일무이
// map 함수에 전달되는 콜백 함수의 인수인 index값을 사용하면 됨

const IterationSample = () => {
    const names = ["aa", "bb", "cc"];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    // 키값으로 인덱스를 이용 (고유한 값이 없을때만 인덱스 이용)
    return <ul>{nameList}</ul>;
};

export default IterationSample;
