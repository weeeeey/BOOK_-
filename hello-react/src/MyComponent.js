// PropTypes의 종류
// array
// arrayOf(타입) : 특정 proptype 으로 이루어진 배열 arrayOf(PropTypes.number) 숫자로 이루어진 배열
// bool
// func
// number
// Object
// string
// symbol
// node : 렌더링 할 수 있는 모든것
// instanceof(클래스) : 특정 클래스의 인스턴스
// oneOf(['dog','cat'])
// oneOfType([React.PropTypes.string, React.PropTypes.number ])
// ObjectOf(React.PropTypes.number) 객체의 모든 키 값이 인자로 주어진 객체
// shape({name:PropTypes.string, num:PropTypes.number})
// any

import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
        <div>
            나의 이름은 {name} <br />
            children 값은 {children}
            <br />
            제가 좋아하는 숫자는 {favoriteNumber}
        </div>
    );
};

MyComponent.defaultProps = {
    name: "기본 이름",
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
    // isRequired를 이용한 프로프의 타입 지정
};

export default MyComponent;
