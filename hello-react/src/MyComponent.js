const MyComponent = (props) => {
    return <div style={{ fontSize: 50 }}>나의 이름은 {props.name}</div>;
};
MyComponent.defaultProps = {
    name: "기본 이름",
};
export default MyComponent;
