// 링크에서 사용하는 경로===현재 라우터의 경로 일 경우
// 특정 스타일 or CSS 클래스 적용하는 컴포넌트
// style,className은 {isActive: boolean} 을 파라미터로 전달받는 함수 타입의 값을 전달

// <NavLink style={({isActive})=>isActive? activeStyle:undefined} />
// <NavLink className={({isActive})=>isActive? 'active':undefined} />

import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
    const activeStyle = {
        color: "green",
        fontSize: 21,
    };

    return (
        <div>
            <Outlet />
            <ul>
                <li>
                    <NavLink
                        to="/articles/1"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        게시글 1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/articles/2"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        게시글 2
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/articles/3"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        게시글 3
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Articles;
