import styles from "./CSSModule.module.css";
const CSSModule = () => {
    return (
        <div className={styles.wrapper}>
            안녕, 나는 <span className="somthing">CSS MODULE</span>
        </div>
    );
};

export default CSSModule;
