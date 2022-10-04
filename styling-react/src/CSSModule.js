import styles from "./CSSModule.module.css";
const CSSModule = () => {
    return (
        // 두개 이상의 클래스를 적용시킬려면 백틱 사용해서 이런식으로
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕, 나는 <span className="somthing">CSS MODULE</span>
        </div>
    );
};

export default CSSModule;
