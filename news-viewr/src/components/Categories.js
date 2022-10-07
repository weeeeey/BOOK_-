import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

// div 같은 일반 HTML 요소가 아닌 컴포넌트에 styled-component를 적용 시킬떄는
// styled(컴포넌트 이름)`` 으로 사용

// NavLink로 만들어진 Category 컴포넌트
const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }
    & + & {
        margin-left: 1rem;
    }
`;

const categories = [
    {
        name: "all",
        text: "전체보기",
    },
    {
        name: "business",
        text: "비즈니스",
    },
    {
        name: "entertainment",
        text: "엔터네인먼트",
    },
    {
        name: "health",
        text: "건강",
    },
    {
        name: "science",
        text: "과학",
    },
    {
        name: "sports",
        text: "스포츠",
    },
    {
        name: "technology",
        text: "기술",
    },
];

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    className={({ isActive }) =>
                        isActive ? "active" : undefined
                    }
                    to={c.name === "all" ? "/" : `/${c.name}`}
                    // 카테고리 렌더링 후 to 속성에 정의해둔 URL로 이동한단
                    // NavLink : 현재 url과 이동할 url이 같을 경우 style 속성 추가 가능하다는 특징
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
