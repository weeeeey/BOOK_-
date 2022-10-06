// API를 요청하고
// 뉴스 데이터가 들어있는 배열을 컴포넌트 배열로 변환 및 렌더링
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: "제목",
    description: "내용",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
};
const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    // useEffect에 직접적으로 async 붙이면 안되고 그 안에 쓰이는 함수에게 붙여야함
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=7365517dd52a4abe872de70fae706cfe"
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
        // 함수 실행
    }, []);

    // fetchData()를 실행하면 처음에는 true 여서 대기중 뜨다가 비동기 실행 후 false로 변환
    if (loading) {
        return <NewsListBlock>대기중</NewsListBlock>;
    }

    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem Key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
