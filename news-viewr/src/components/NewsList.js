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

// const sampleArticle = {
//     title: "제목",
//     description: "내용",
//     url: "https://google.com",
//     urlToImage: "https://via.placeholder.com/160",
// };

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // App에서 넘겨준 인자를 기준으로 all이 아니라면 주소에 &category=컨텐츠 를 붙여서 데려온다
                const query = category === "all" ? "" : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7365517dd52a4abe872de70fae706cfe`
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);
    // useEffect 이므로 빈 배열을 넘겨주면 처음에만 렌더링 하고 그 뒤 안한다.
    // 따라서 category가 변할 때마다 렌더링 해야 하므로 categroy에 의존하게 넣어준다
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
