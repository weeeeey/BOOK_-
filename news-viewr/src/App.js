import { useState } from "react";
import axios from "axios";
import NewsItem from "./components/NewsItem";
import NewsList from "./components/NewsList";

const App = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=7365517dd52a4abe872de70fae706cfe"
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
                <textarea rows={10} value={JSON.stringify(data, null, 2)} />
            )}
        </div>
    );
};

export default App;
