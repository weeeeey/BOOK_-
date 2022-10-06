import { useParams } from "react-router-dom";

const data = {
    velopert: {
        name: "민경훈",
        dexcription: "리액트를 좋아하는 개발자",
    },
    gildong: {
        name: "홍길동",
        dexcription: "고전소설 개발자",
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.dexcription}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;
