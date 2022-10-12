import Todos from "./components/Todos";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div>
            <Counter number={0} />
            <hr />
            <Todos />
        </div>
    );
};

export default App;
