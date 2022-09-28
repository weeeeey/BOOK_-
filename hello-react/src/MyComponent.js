// const MyComponent = (props) => {
//     const { name, children } = props;
//     return (
//         <div>
//             나의 이름은 {name} <br />
//             children 값은 {children}
//             입니다.
//         </div>
//     );
// };
const MyComponent = ({ name, children }) => {
    return (
        <div>
            나의 이름은 {name} <br />
            children 값은 {children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: "기본 이름",
};
export default MyComponent;
