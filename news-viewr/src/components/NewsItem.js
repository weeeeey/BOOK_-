// 각 뉴스 정보를 보여주는 컴포넌트
// 받아올 정보 title, description, url, urlTolmage(뉴스 이미지)
import styled from "styled-components";

const NewsItemBlock = styled.div`
    display: flex;
    .thumnail {
        margin-right: 1rem;
        img {
            display: flex;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contens {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thmbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thmbnail" />
                    </a>
                </div>
            )}
            <div className="contens">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;
