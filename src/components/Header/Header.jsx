import clsx from "clsx";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={clsx(styles.header, "padding")}>
      <div className={clsx(styles.group, styles.back)}>
        <object
          title="backSvg"
          className={clsx(styles.svg, styles.backSvg)}
          data="/images/back.svg"
          type="image/svg+xml"
        ></object>
        <span className={styles.text}>Back</span>
      </div>
      <div className={styles.group}>
        <object
          title="heartSvg"
          className={clsx(styles.svg, styles.heartSvg)}
          data="/images/heart.svg"
          type="image/svg+xml"
        ></object>
        <object
          title="folderSvg"
          className={clsx(styles.svg, styles.folderSvg)}
          data="/images/folder.svg"
          type="image/svg+xml"
        ></object>
      </div>
    </header>
  );
}
export default Header;
