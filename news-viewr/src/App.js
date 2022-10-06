// async 를 사용해서 axois 처리
// async 는 promise에 대해 보완해주는거
// promise를 사용하는 함수 정의 하는 곳 앞에 async 붙여주고(onClick)
// promise 함수 앞에 await 붙여주면 됨 (여기서는 axios => promise 기반이므로)
// try catch
import { useState } from "react";
import axios from "axios";

const App = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            setData(response.data);
        } catch (a) {
            console.log(a);
        }
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
