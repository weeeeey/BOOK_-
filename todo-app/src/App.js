import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
    return (
        <div>
            <TodoTemplate>
                <TodoInsert />
            </TodoTemplate>
        </div>
    );
};

export default App;
