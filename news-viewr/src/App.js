// axois 는 가장 많이 사용되고 있는 JS HTTP 클라이언트이다.
// [특징] : HTTP 요청을 Promise 기반으로 처리
import { useState } from "react";
import axios from "axios";

const App = () => {
    const [data, setData] = useState(null);
    const onClick = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            });
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && (
                <textarea
                    rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readOnly={true}
                />
            )}
        </div>
    );
};

export default App;
