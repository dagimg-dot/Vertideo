import styles from "../css/Loader.module.css";

const Loader = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loaderBox}>
        <div className={styles.loader}></div>
        <div className={styles.loaderText}>{message}</div>
      </div>
    </div>
  );
};

export default Loader;
